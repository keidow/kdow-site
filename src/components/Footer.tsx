import Link from "next/link";

const links = [
  { href: "/writing-and-work", label: "Writing & Work" },
  { href: "/formed-together", label: "Formed Together" },
  { href: "/about", label: "About" },
  { href: "/images-of-god", label: "Images of God" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-base font-semibold text-[var(--accent-gold)]">
              Keith Dow
            </p>
            <p className="mt-1 text-sm text-[var(--muted)] max-w-xs">
              Theology, disability, and the beauty of human limits.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Keith Dow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
