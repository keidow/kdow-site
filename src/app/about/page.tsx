import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Keith Dow, PhD, is a Canadian theologian, researcher, and writer exploring the beauty and complexity of human limits, care, and community.",
};

const credentials = [
  {
    title: "PhD Dissertation",
    detail: "Call, Encounter, and Response: Loving my neighbour with intellectual disabilities",
    institution: "Vrije Universiteit, Amsterdam",
    year: "2019",
  },
  {
    title: "MA Thesis",
    detail: "Kierkegaard\u2019s Ethic: The Other by Faith",
    institution: "Dominican University College, Ottawa",
    year: "2009",
  },
];

const affiliations = [
  {
    name: "Karis Disability Services",
    note: "Formerly Christian Horizons",
  },
  {
    name: "Psychology Cross-Training for Theologians",
    note: "Fellowship \u2014 University of Birmingham & Martin Luther University College",
  },
  {
    name: "John Templeton Foundation",
    note: "Images of God research project (grant recipient)",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="Keith Dow, PhD"
        description="Canadian theologian, researcher, and writer exploring the beauty and complexity of human limits, care, and community."
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Bio */}
        <section
          aria-labelledby="bio-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Image
                src="/images/keith-headshot.jpeg"
                alt="Keith Dow"
                width={600}
                height={720}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
            <div className="space-y-5 text-[var(--muted)] text-base leading-relaxed">
              <h2
                id="bio-heading"
                className="font-serif text-2xl font-semibold text-[var(--foreground)] leading-snug"
              >
                Background
              </h2>
              <p>
                Keith Dow, PhD, is a Canadian theologian, researcher, and writer exploring the
                beauty and complexity of human limits, care, and community. He works with Karis
                Disability Services (formerly Christian Horizons) and completed a fellowship with
                the Psychology Cross-Training for Theologians program through the University of
                Birmingham and Martin Luther University College.
              </p>
              <p>
                His research explores theology, disability, and the ethics of care, emphasizing
                the beauty and limits of human life in community.
              </p>
              <p>
                Keith is the author of{" "}
                <Link href="/formed-together" className="italic underline underline-offset-4 hover:text-[var(--accent)] transition-colors">
                  Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving
                </Link>{" "}
                (Baylor University Press, 2021) and leads the{" "}
                <a
                  href="https://www.imagesofgod.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                >
                  Images of God
                </a>{" "}
                research project, supported by the John Templeton Foundation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="mailto:keidow@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Email Keith
                </a>
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Substack
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section
          aria-labelledby="affiliations-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <h2
            id="affiliations-heading"
            className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10"
          >
            Affiliations
          </h2>
          <ul className="space-y-0">
            {affiliations.map((a) => (
              <li
                key={a.name}
                className="py-5 border-b border-[var(--border)] last:border-0"
              >
                <p className="font-serif text-base font-semibold text-[var(--foreground)]">{a.name}</p>
                <p className="text-sm text-[var(--muted)] mt-0.5">{a.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Academic credentials */}
        <section
          aria-labelledby="credentials-heading"
          className="py-16 md:py-20"
        >
          <h2
            id="credentials-heading"
            className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10"
          >
            Academic Credentials
          </h2>
          <ul className="space-y-0">
            {credentials.map((c) => (
              <li
                key={c.title}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-5 border-b border-[var(--border)] last:border-0 gap-1"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--accent)] font-medium mb-1">{c.title}</p>
                  <p className="font-serif text-base font-semibold text-[var(--foreground)]">
                    <em>{c.detail}</em>
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-0.5">{c.institution}</p>
                </div>
                <p className="text-xs text-[var(--muted)] shrink-0">{c.year}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
