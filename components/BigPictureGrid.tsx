import { BIG_PICTURE } from '@/lib/constants';
import {
  FileText,
  Sparkles,
  Anchor,
  Shield,
  Zap,
  Server,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  'CLAUDE.md': FileText,
  Skills: Sparkles,
  Hooks: Anchor,
  Superpowers: Shield,
  'Auto Mode': Zap,
  'MCP Servers': Server,
  Subagents: Users,
};

export default function BigPictureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {BIG_PICTURE.map((item) => {
        const Icon = ICONS[item.layer] ?? Sparkles;
        return (
          <div key={item.layer} className="card flex items-start gap-4">
            <div
              className="p-2 rounded-lg shrink-0"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div>
              <h3
                className="text-[1.125rem] font-medium mb-1"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
              >
                {item.layer}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
