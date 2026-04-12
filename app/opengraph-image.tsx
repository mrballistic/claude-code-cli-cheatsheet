/**
 * Dynamic Open Graph image generated via Next.js ImageResponse.
 * Renders the Claude-style sparkle icon alongside the site title
 * on a dark background matching the site's color system.
 */
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Claude Code CLI — The Complete Reference';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gradient backdrop */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,211,238,0.08) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Sparkle icon — inline SVG rendered as img data URI */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          style={{ marginBottom: 32 }}
        >
          <rect width="32" height="32" rx="8" fill="#13131a" />
          <g transform="translate(16,16)">
            <path
              d="M0,-12 C1.5,-4 4,-1.5 12,0 C4,1.5 1.5,4 0,12 C-1.5,4 -4,1.5 -12,0 C-4,-1.5 -1.5,-4 0,-12Z"
              fill="#22d3ee"
            />
            <circle cx="7" cy="-7" r="1.5" fill="#a78bfa" />
          </g>
        </svg>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
              fontFamily: 'monospace',
              display: 'flex',
            }}
          >
            Claude Code CLI
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#22d3ee',
              fontFamily: 'monospace',
              display: 'flex',
            }}
          >
            The Complete Reference
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#64748b',
              marginTop: 8,
              fontFamily: 'sans-serif',
              display: 'flex',
            }}
          >
            From first launch to autonomous agents
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #22d3ee, #a78bfa, transparent)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
