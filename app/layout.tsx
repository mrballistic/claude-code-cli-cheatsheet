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

const siteUrl = 'https://claude-code-cli-cheatsheet.vercel.app';

export const metadata: Metadata = {
  title: 'Claude Code CLI — The Complete Reference',
  description:
    'From first launch to autonomous agents. The companion reference for the Claude Code CLI Meetup talk.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Claude Code CLI — The Complete Reference',
    description:
      'Every command, mode, and concept from the Claude Code CLI Meetup talk. Install to autonomous agents in one page.',
    url: siteUrl,
    siteName: 'Claude Code CLI Cheatsheet',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code CLI — The Complete Reference',
    description:
      'Every command, mode, and concept from the Claude Code CLI Meetup talk. Install to autonomous agents in one page.',
  },
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
