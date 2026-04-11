import { CLAUDE_MD } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import ScrollReveal from './ScrollReveal';
import { FileText } from 'lucide-react';

export default function ClaudeMd() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="claude-md"
          title="Layer 3: CLAUDE.md"
          subtitle={CLAUDE_MD.description}
        />

        <div className="space-y-6">
          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Where It Goes
            </h3>
            <div className="space-y-2">
              {CLAUDE_MD.locations.map((loc) => (
                <div key={loc.path} className="flex items-center gap-3">
                  <FileText size={16} style={{ color: 'var(--text-tertiary)' }} />
                  <code
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
                  >
                    {loc.path}
                  </code>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    — {loc.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Template
            </h3>
            <CodeBlock code={CLAUDE_MD.template} language="markdown" />
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLAUDE_MD.tips.map((tip) => (
                <div key={tip.title} className="card">
                  <h4
                    className="text-sm font-medium mb-2"
                    style={{ color: 'var(--accent-tertiary)' }}
                  >
                    {tip.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
