import { HOOKS, SUBAGENTS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import CommandTable from './CommandTable';
import ScrollReveal from './ScrollReveal';

export default function HooksSubagents() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="hooks-subagents"
          title="Hooks & Subagents"
          subtitle="Automated guardrails and parallel specialists."
        />

        <div className="space-y-10">
          {/* Hooks */}
          <div className="space-y-6">
            <h3
              className="text-[1.125rem] font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              {HOOKS.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {HOOKS.description}
            </p>

            <div>
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Lifecycle Events
              </p>
              <CommandTable commands={HOOKS.events.map((e) => ({ command: e.event, description: e.description }))} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HOOKS.examples.map((example) => (
                <div key={example.title}>
                  <h4 className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    {example.title}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {example.description}
                  </p>
                  <CodeBlock code={example.code} language="json" />
                </div>
              ))}
            </div>
          </div>

          {/* Subagents */}
          <div className="space-y-6">
            <h3
              className="text-[1.125rem] font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              {SUBAGENTS.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {SUBAGENTS.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SUBAGENTS.builtInTypes.map((type) => (
                <div key={type.name} className="card">
                  <h4
                    className="text-sm font-medium mb-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
                  >
                    {type.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              {SUBAGENTS.customPath}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
