import Fastify from 'fastify';

const app = Fastify({ logger: true });

// Application routes will be added after project requirements are confirmed.
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.once(signal, () => {
    void app.close().catch((error: unknown) => {
      app.log.error(error);
      process.exitCode = 1;
    });
  });
}

try {
  await app.listen({
    port: Number(process.env.PORT ?? 8000),
    host: process.env.HOST ?? '127.0.0.1',
  });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
