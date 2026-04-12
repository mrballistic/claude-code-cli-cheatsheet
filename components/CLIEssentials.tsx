import { SLASH_COMMANDS, KEYBOARD_SHORTCUTS, POWERUP_CALLOUT } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CommandTable from './CommandTable';
import ScrollReveal from './ScrollReveal';
import { Zap } from 'lucide-react';

/** Layer 1 section: slash commands table, keyboard shortcuts, and /powerup callout. */
export default function CLIEssentials() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="cli-essentials"
          title="Layer 1: CLI Essentials"
          subtitle="The commands you'll use every day."
        />

        <div className="space-y-8">
          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Slash Commands
            </h3>
            <CommandTable commands={SLASH_COMMANDS} />
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Keyboard Shortcuts
            </h3>
            <CommandTable commands={KEYBOARD_SHORTCUTS.map((s) => ({ command: s.keys, description: s.description }))} />
          </div>

          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--accent-primary)',
              boxShadow: '0 0 20px var(--border-glow)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap size={20} style={{ color: 'var(--accent-primary)' }} />
              <code
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
              >
                {POWERUP_CALLOUT.command}
              </code>
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
              {POWERUP_CALLOUT.text}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {POWERUP_CALLOUT.description}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
