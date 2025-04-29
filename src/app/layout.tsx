import './globals.css'; // Import your global CSS file (where Tailwind is imported)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PrepTrail - Ace Your Interviews',
  description: 'Prepare for your dream job interview with PrepTrail.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}