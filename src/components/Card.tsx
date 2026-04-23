import Link from "next/link";

interface CardProps {
  label?: string;
  title: string;
  description: string;
  meta?: string;
  href?: string;
  external?: boolean;
}

export default function Card({ label, title, description, meta, href, external }: CardProps) {
  const inner = (
    <div className="group border border-[var(--border)] rounded-lg p-6 bg-[var(--background)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all duration-200">
      {label && (
        <p className="text-xs uppercase tracking-[0.12em] text-[var(--accent)] font-medium mb-3">
          {label}
        </p>
      )}
      <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors flex items-start gap-2">
        {title}
        {external && (
          <svg className="shrink-0 mt-1 opacity-50" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-label="(opens in new tab)">
            <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
        {description}
      </p>
      {meta && (
        <p className="mt-4 text-xs text-[var(--muted)] opacity-70">{meta}</p>
      )}
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    );
  }

  return inner;
}
