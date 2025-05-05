import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'PrepTrail - Ace Your Interviews',
  description: 'Prepare for your dream job interview with PrepTrail.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
