interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="text-[1.75rem] font-semibold scroll-mt-20"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
