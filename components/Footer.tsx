import { FOOTER } from '@/lib/constants';
import { Terminal, Triangle } from 'lucide-react';

/** Site footer with "Built with Claude Code CLI" and "Deployed on Vercel" badges and talk date. */
export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: '1px solid var(--border-primary)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <Terminal size={14} style={{ color: 'var(--accent-primary)' }} />
            {FOOTER.builtWith}
          </span>
          <span className="inline-flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <Triangle size={14} style={{ color: 'var(--text-secondary)' }} />
            {FOOTER.deployedOn}
          </span>
        </div>
        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          {FOOTER.talkDate}
        </span>
      </div>
    </footer>
  );
}
