import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'MEDKONG — Modular AI Kit for the revenue cycle',
  description:
    'A kit of deployable AI and workflow modules for healthcare revenue cycle operations. Built by AKOS on Palantir Foundry.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds `mk-js` to <html>
    // before React hydrates, which React would otherwise report — and revert —
    // as a server/client attribute mismatch.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Marks the document as script-enabled before the body is parsed, so the
          pre-hydration rules in globals.css can hide the elements that are
          about to animate in. Without this the browser paints the text, then
          the motion hook hides it and replays it — a visible flash on load.
          No script means the class is never set and everything renders plainly.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('mk-js')" }}
        />
        {/*
          The design's inline styles reference `Archivo` and `'IBM Plex Mono'`
          by literal family name in hundreds of `font:` shorthands, so the
          families have to keep those exact names. next/font hashes them, hence
          the plain stylesheet link the design source uses.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* no-page-custom-font targets the pages router; in a root layout this
            <link> already applies to every page. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
