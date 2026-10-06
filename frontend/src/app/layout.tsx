import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import './globals.css';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';

const montserrat = localFont({
  src: './fonts/Montserrat-Latin-Variable.woff2',
  weight: '400 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'InCIT Conference 2027',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
