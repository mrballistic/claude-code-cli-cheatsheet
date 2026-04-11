import { HERO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-[3rem] font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {HERO.title}
          <span className="cursor-blink" style={{ color: 'var(--accent-primary)' }}>
            _
          </span>
        </h1>
        <p className="text-xl mb-4" style={{ color: 'var(--text-secondary)' }}>
          {HERO.subtitle}
        </p>
        <p
          className="text-base italic mb-10"
          style={{ color: 'var(--accent-secondary)' }}
        >
          &ldquo;{HERO.insight}&rdquo;
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {HERO.quickJumps.map((jump) => (
            <a
              key={jump.href}
              href={jump.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--accent-primary)',
                border: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {jump.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
