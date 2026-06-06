import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gokul Vemulapalli — Electrical Engineer',
  description:
    'M.Sc. Electrical Engineering student specializing in Automation Technology — dynamic control systems, power electronics, and embedded firmware.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
