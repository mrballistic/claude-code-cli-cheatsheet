import type { PermissionMode } from '@/lib/constants';

interface ModeCardProps {
  mode: PermissionMode;
}

export default function ModeCard({ mode }: ModeCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-3">
        <h3
          className="text-[1.125rem] font-medium"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
        >
          {mode.mode}
        </h3>
        {mode.flag !== '(none)' && (
          <code
            className="text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
          >
            {mode.flag}
          </code>
        )}
      </div>
      <p className="text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
        {mode.behavior}
      </p>
      <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
        Use when: <span style={{ color: 'var(--text-secondary)' }}>{mode.useWhen}</span>
      </p>
    </div>
  );
}
