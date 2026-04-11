import { SKILLS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import CodeBlock from './CodeBlock';
import CopyButton from './CopyButton';
import ScrollReveal from './ScrollReveal';
import { FolderOpen, ExternalLink } from 'lucide-react';

export default function Skills() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="skills"
          title="Layer 4: Skills"
          subtitle={SKILLS.description}
        />

        <div className="space-y-6">
          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Where They Live
            </h3>
            <div className="space-y-2">
              {SKILLS.locations.map((loc) => (
                <div key={loc.path} className="flex items-center gap-3">
                  <FolderOpen size={16} style={{ color: 'var(--text-tertiary)' }} />
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
              Skill File Format
            </h3>
            <CodeBlock code={SKILLS.skillFormat} language="yaml" />
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Key Concepts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILLS.concepts.map((concept) => (
                <div key={concept.title} className="card">
                  <h4
                    className="text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-tertiary)' }}
                  >
                    {concept.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-[1.125rem] font-medium mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Where to Find Skills
            </h3>
            <div className="space-y-2">
              {SKILLS.resources.map((res) => (
                <div key={res.title} className="flex items-center gap-3">
                  <ExternalLink size={14} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                    {res.title}
                  </span>
                  <code className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    {res.url}
                  </code>
                  <CopyButton text={res.url} size={12} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
