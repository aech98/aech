import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';

const font = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm',
});

export const metadata: Metadata = {
  title: 'Tahir Ridwan',
  description: 'Portfolio',
};

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-black antialiased">
      <body
        className={cn(
          'font-dm font-normal text-base text-slate-50 bg-dark antialiased',
          font.variable
        )}
      >
        <div className="min-h-screen max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
