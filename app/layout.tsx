/**
 * Root layout. Loads JetBrains Mono (display/code) and Outfit (body)
 * via next/font/google, sets page metadata, and applies font CSS variables.
 */
import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Claude Code CLI — The Complete Reference',
  description:
    'From first launch to autonomous agents. The companion reference for the Claude Code CLI Meetup talk.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${outfit.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
