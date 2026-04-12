import { RESOURCES, DOWNLOADABLE_SKILLS, DEMO_PROJECTS } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ResourceCard from './ResourceCard';
import CopyButton from './CopyButton';
import ScrollReveal from './ScrollReveal';
import { Download, ExternalLink, Code } from 'lucide-react';

/**
 * Styled link button with an adjacent copy-to-clipboard control.
 * Used for demo project "Live Site" and "Source Code" links.
 */
function LinkButton({ href, label, icon: Icon, accent = false }: {
  href: string;
  label: string;
  icon: typeof ExternalLink;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          color: accent ? 'var(--accent-primary)' : 'var(--text-secondary)',
          border: '1px solid var(--border-primary)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <Icon size={14} />
        {label}
      </a>
      <CopyButton text={href} size={12} />
    </div>
  );
}

/** Resources section: demo projects, downloadable skills, and external resource link cards. */
export default function Resources() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="resources"
          title="Resources"
          subtitle="Keep learning — the essential links."
        />

        {DEMO_PROJECTS.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Demo Projects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {DEMO_PROJECTS.map((project) => (
                <div key={project.title} className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <h4
                      className="text-base font-medium"
                      style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}
                    >
                      {project.title}
                    </h4>
                    <span className="badge-new">DEMO</span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkButton href={project.liveUrl} label="Live Site" icon={ExternalLink} accent />
                    <LinkButton href={project.repoUrl} label="Source Code" icon={Code} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {DOWNLOADABLE_SKILLS.length > 0 && (
          <div className="mb-8">
            <h3
              className="text-[1.125rem] font-medium mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
            >
              Downloadable Skills
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {DOWNLOADABLE_SKILLS.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.href}
                  download={skill.filename}
                  className="card flex items-start gap-4 group/dl"
                >
                  <div
                    className="p-2.5 rounded-lg shrink-0"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <Download
                      size={20}
                      className="transition-transform group-hover/dl:translate-y-0.5"
                      style={{ color: 'var(--accent-tertiary)' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className="text-base font-medium"
                        style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}
                      >
                        {skill.name}
                      </h4>
                      <span className="badge-new">SKILL</span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {skill.description}
                    </p>
                    <span className="text-xs mt-2 inline-block" style={{ color: 'var(--text-tertiary)' }}>
                      {skill.filename}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
