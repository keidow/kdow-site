interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--border)] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {label && (
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium mb-4">
            {label}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--foreground)] max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
