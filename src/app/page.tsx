import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";

const areas = [
  {
    label: "Writing & Work",
    title: "Scholarship & Publications",
    description:
      "Peer-reviewed articles, book chapters, podcast hosting, and public writing at the intersection of theology, disability, and the ethics of care.",
    href: "/writing-and-work",
  },
  {
    label: "Book",
    title: "Formed Together",
    description:
      "Mystery, Narrative, and Virtue in Christian Caregiving — published by Baylor University Press. A vision of Christian caregiving as mutual transformation, not mere service.",
    href: "/formed-together",
  },
  {
    label: "About",
    title: "Keith Dow",
    description:
      "Canadian theologian, researcher, and writer exploring the beauty and complexity of human limits, care, and community.",
    href: "/about",
  },
  {
    label: "Research Project",
    title: "Images of God",
    description:
      "A John Templeton Foundation–supported project exploring the God and Self Representation of people with intellectual/developmental disabilities.",
    href: "https://www.imagesofgod.ca",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-[var(--border)] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left: text */}
          <div className="py-16 md:py-24 px-6 lg:px-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-6">
              Keith Dow
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] text-[var(--foreground)]"
            >
              Theology, Disability,
              <br className="hidden sm:block" /> and the Beauty of{" "}
              <em className="not-italic text-[var(--accent)]">Human Limits</em>
            </h1>
            <p className="mt-7 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-[380px]">
              Scholarship, leadership, and public engagement at the intersection
              of Christian faith, intellectual disability, and the ethics of care.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/writing-and-work"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
              >
                Explore my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium text-[var(--foreground)] px-5 py-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                About Keith
              </Link>
            </div>
          </div>

          {/* Right: artwork — background matches site colour, no fading needed */}
          <div className="relative hidden md:block" style={{ minHeight: "320px" }} aria-hidden="true">
            <Image
              src="/images/graphic elements/pattern1b.png"
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.82 }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Areas of focus */}
      <section aria-labelledby="areas-heading" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2
            id="areas-heading"
            className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10"
          >
            Areas of Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area) => {
              const isExternal = area.href.startsWith("http");
              return (
                <Card
                  key={area.href}
                  label={area.label}
                  title={area.title}
                  description={area.description}
                  href={area.href}
                  external={isExternal}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Formed Together feature */}
      <section
        aria-label="Formed Together"
        className="border-t border-[var(--border)] bg-[var(--accent-light)] py-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium mb-4">
              Book — Baylor University Press, 2021
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[var(--foreground)] leading-snug mb-5">
              Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed mb-6">
              An invitation to encounter caregiving not as a set of skills to master, but as a
              formative practice of love, humility, and courageous belonging — shaped by the
              mystery of God&apos;s love already given. Rooted in lived experiences with people
              with intellectual disabilities, <em>Formed Together</em> offers a reflective yet
              accessible vision of Christian caregiving as mutual transformation, not mere service.
            </p>
            <Link
              href="/formed-together"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
            >
              Learn more
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bio intro */}
      <section aria-labelledby="intro-heading" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2
                id="intro-heading"
                className="font-serif text-2xl md:text-3xl font-semibold text-[var(--foreground)] leading-snug"
              >
                About Keith
              </h2>
            </div>
            <div className="space-y-5 text-[var(--muted)] text-base leading-relaxed">
              <p>
                Keith Dow, PhD, is a Canadian theologian, researcher, and writer exploring the
                beauty and complexity of human limits, care, and community. He works with Karis
                Disability Services and completed a fellowship with the Psychology Cross-Training
                for Theologians program through the University of Birmingham and Martin Luther
                University College.
              </p>
              <p>
                His research explores theology, disability, and the ethics of care, emphasizing
                the beauty and limits of human life in community.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4 transition-all"
              >
                Read more
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative strip above footer */}
      <div aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Image
            src="/images/graphic elements/longhoriz2.png"
            alt=""
            width={1453}
            height={255}
            className="w-full h-auto"
            style={{ opacity: 0.85 }}
          />
        </div>
      </div>
    </>
  );
}
