import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asteroids',
  description: 'A classic Asteroids arcade game built with Next.js and HTML5 Canvas. Navigate your ship, blast asteroids, and survive as long as you can.',
  keywords: ['asteroids', 'game', 'arcade', 'nextjs', 'canvas'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
