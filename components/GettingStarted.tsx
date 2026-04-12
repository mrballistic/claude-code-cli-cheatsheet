import { GETTING_STARTED } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import ScrollReveal from './ScrollReveal';

/** Getting Started section: install command, launch commands, and version check. */
export default function GettingStarted() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="getting-started"
          title="Getting Started"
          subtitle={GETTING_STARTED.requirement}
        />

        <div className="space-y-6">
          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Install
            </p>
            <CodeBlock code={GETTING_STARTED.installCommand} language="bash" />
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Launch Commands
            </p>
            <div className="space-y-2">
              {GETTING_STARTED.launchCommands.map((cmd) => (
                <div key={cmd.command} className="flex items-start gap-4">
                  <CodeBlock code={cmd.command} />
                  <p className="text-sm pt-3 shrink-0 hidden md:block" style={{ color: 'var(--text-secondary)' }}>
                    {cmd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Version Check
            </p>
            <CodeBlock code={GETTING_STARTED.versionCheck} language="bash" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
