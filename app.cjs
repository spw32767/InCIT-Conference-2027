// Plesk startup file. Keep this file beside the root package.json.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const frontendDir = path.join(__dirname, 'frontend');

function fatal(stage, error) {
  console.error(`${stage}:`, error);
  process.exit(1);
}

process.on('uncaughtException', (error) => fatal('Uncaught exception', error));
process.on('unhandledRejection', (error) => fatal('Unhandled rejection', error));

async function start() {
  const passenger = typeof PhusionPassenger !== 'undefined';

  // Select our HTTP server explicitly when running under Passenger.
  if (passenger) PhusionPassenger.configure({ autoInstall: false });

  const buildId = path.join(frontendDir, '.next', 'BUILD_ID');
  if (!fs.existsSync(buildId)) {
    throw new Error(`Production build not found: ${buildId}`);
  }

  process.chdir(frontendDir);
  process.env.NODE_ENV = 'production';
  const next = require('next');
  const app = next({ dev: false, dir: frontendDir });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = http.createServer(async (req, res) => {
    const pathname = (req.url || '/').split('?')[0];
    try {
      await handle(req, res);
    } catch (error) {
      console.error(`Request failed: ${req.method} ${pathname}`, error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Internal Server Error');
      } else {
        res.destroy();
      }
    }
  });
  server.once('error', (error) => fatal('HTTP server failed', error));

  if (passenger) {
    server.listen('passenger');
  } else {
    server.listen(Number(process.env.PORT || 3000), '127.0.0.1');
  }
}

start().catch((error) => fatal('Startup failed', error));
