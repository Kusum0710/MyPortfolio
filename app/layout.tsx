import type { Metadata, Viewport } from 'next';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Portfolio - Automation Executive & DevOps Specialist',
  description: 'Premium portfolio showcasing expertise in automation, DevOps, cybersecurity, and cloud computing',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark bg-dark">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
