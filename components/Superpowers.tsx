import { SUPERPOWERS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import WorkflowPipeline from './WorkflowPipeline';
import ScrollReveal from './ScrollReveal';
import { Sparkles } from 'lucide-react';

/** Layer 5 section: Superpowers install, workflow pipeline, key skills, and power combo callout. */
export default function Superpowers() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="superpowers"
          title="Layer 5: Superpowers Plugin"
          subtitle={SUPERPOWERS.subtitle}
        />

        <div className="space-y-8">
          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Install
            </p>
            {SUPERPOWERS.installCommands.map((cmd) => (
              <CodeBlock key={cmd} code={cmd} language="bash" />
            ))}
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              The Workflow
            </h3>
            <WorkflowPipeline />
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Key Skills
            </h3>
            <div className="space-y-2">
              {SUPERPOWERS.keySkills.map((skill) => (
                <div key={skill} className="flex items-start gap-3">
                  <Sparkles size={14} className="mt-1 shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <code style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                      {skill.split(' — ')[0]}
                    </code>
                    {' — '}
                    {skill.split(' — ')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--accent-secondary)',
              boxShadow: '0 0 20px rgba(167, 139, 250, 0.15)',
            }}
          >
            <h4
              className="text-sm font-bold mb-2"
              style={{ color: 'var(--accent-secondary)' }}
            >
              The Power Combo
            </h4>
            <p
              className="text-base font-medium mb-2"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}
            >
              {SUPERPOWERS.powerCombo.text}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {SUPERPOWERS.powerCombo.description}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
