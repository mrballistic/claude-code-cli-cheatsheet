import { PERMISSION_MODES, AUTO_MODE } from '@/lib/constants';
import SectionHeading from './SectionHeading';
import ModeCard from './ModeCard';
import ModeCycler from './ModeCycler';
import ScrollReveal from './ScrollReveal';
import { Shield } from 'lucide-react';

export default function PermissionModes() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="permission-modes"
          title="Layer 2: Permission Modes"
          subtitle="Control how much autonomy Claude has."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {PERMISSION_MODES.map((mode) => (
            <ModeCard key={mode.mode} mode={mode} />
          ))}
        </div>

        <ModeCycler />

        <div className="mt-8 card" style={{ borderColor: 'var(--accent-secondary)' }}>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} style={{ color: 'var(--accent-secondary)' }} />
            <h3
              className="text-[1.125rem] font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)' }}
            >
              {AUTO_MODE.title}
            </h3>
          </div>
          <p
            className="text-sm italic mb-4"
            style={{ color: 'var(--accent-warn)' }}
          >
            {AUTO_MODE.subtitle}
          </p>
          <div className="space-y-4">
            {AUTO_MODE.details.map((detail) => (
              <div key={detail.title}>
                <h4
                  className="text-sm font-medium mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {detail.title}
                </h4>
                <p className="text-sm whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
