import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Images of God",
  description:
    "An Ontario-based arts research project exploring how Christian adults with intellectual disabilities understand God and themselves. Supported by the John Templeton Foundation.",
};

const participants = [
  "Raee (Hamilton)", "Lise (Wainfleet)", "Frank (Waterloo)", "Judy (Guelph)",
  "Lorie (Kingston)", "Daniela (Bradford)", "Ryan (Orillia)", "Maria (Toronto)",
  "Michelle (Toronto)", "Dirriell (Toronto)", "Patricia (Ottawa)",
];

export default function ImagesOfGod() {
  return (
    <>
      <PageHeader
        label="Research Project"
        title="Images of God: Through the Lens of Disability"
        description="An Ontario-based arts research project exploring how Christian adults with intellectual disabilities understand God and themselves."
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Opening statement */}
        <section
          aria-labelledby="project-overview"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-8">
              <Image
                src="/images/images-of-god-project.png"
                alt="Images of God project logo"
                width={280}
                height={120}
                className="w-40 h-auto"
              />
              <p
                id="project-overview"
                className="font-serif text-2xl md:text-3xl font-semibold text-[var(--foreground)] leading-snug"
              >
                Everybody&rsquo;s theology matters.
              </p>
            </div>
            <div className="space-y-5 text-[var(--muted)] text-base leading-relaxed">
              <p>
                Too often, the perspectives of people with intellectual disabilities are excluded
                from our churches, our theology, and our research. This Ontario-based project
                works to change that through creative, arts-based research and a collaborative
                approach.
              </p>
              <p>
                Rooted in the conviction that all people are made in the image of God
                (<em>Imago Dei</em>), the project explores how participants connect with God
                not only through words but through art, movement, and other expressions that
                open insight beyond spoken language.
              </p>
              <blockquote className="border-l-2 border-[var(--accent)] pl-4 text-[var(--foreground)] font-serif italic">
                &ldquo;Let us make human beings in our image, to be like us.&rdquo;
                <footer className="mt-1 text-sm not-italic text-[var(--muted)]">— Genesis 1:26, NLT</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Fellowship */}
        <section
          aria-labelledby="fellowship-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-6">
              <h2
                id="fellowship-heading"
                className="font-serif text-2xl font-semibold text-[var(--foreground)] leading-snug"
              >
                The fellowship
              </h2>
              <Image
                src="/images/iog-event-1.jpg"
                alt="A participant speaks at the Art & Vespers service, with collage panels visible on the wall behind"
                width={600}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-5 text-[var(--muted)] text-base leading-relaxed">
              <p>
                In 2023, Keith began a fellowship at the University of Birmingham, funded by the
                John Templeton Foundation. The program brought together theologians and
                psychological scientists to explore how social and cognitive psychology could
                deepen theological understanding.
              </p>
              <p>
                For his fellowship project, Dr. Dow collaborated with eleven Ontario-based
                Christian adults with intellectual disabilities. Through photovoice exercises,
                journaling, semi-structured interviews, accessible measures of God-concept and
                self-esteem, and collage-making, participants reflected on how they perceive God
                and themselves.
              </p>
              <p>
                Their reflections offer glimpses into how God&rsquo;s presence is experienced
                in everyday life — in relationships, nature, memories, scripture, and sacred
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Findings + participants */}
        <section
          aria-labelledby="findings-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-6">
              <h2
                id="findings-heading"
                className="font-serif text-2xl font-semibold text-[var(--foreground)] leading-snug"
              >
                What emerged
              </h2>
              <Image
                src="/images/iog-participant-daniela.png"
                alt="Daniela's silhouette collage — a head-shaped cutout filled with magazine images representing faith, friendships, and victory"
                width={600}
                height={450}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-[var(--muted)] text-base leading-relaxed">
              <p>
                Six key themes emerged, reflecting the ways participants experience God and see
                themselves in relation to the divine. Participants connected God with nature,
                friendship, mission, family, sacred ritual, and meaningful moments. Most expressed
                embodied, lived theology grounded in relational trust rather than abstract doctrine.
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--accent)] font-medium mb-3">
                  Participants
                </p>
                <p className="text-sm leading-relaxed">
                  {participants.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Participant quote */}
        <section
          aria-label="Participant reflection"
          className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--accent-light)]"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Image
              src="/images/iog-event-2.jpg"
              alt="Three project participants smiling together at the Art & Vespers service"
              width={600}
              height={450}
              className="rounded-lg w-full h-auto"
            />
            <blockquote>
              <p className="font-serif text-xl md:text-2xl font-medium text-[var(--foreground)] leading-snug">
                &ldquo;I got to share my talents and artwork and I got to talk about God and
                express it in a way that everyone could see it and understand it. And I&rsquo;ve
                been following Jesus since I was a kid and also making artwork since I was a kid.
                And this experience has been really amazing to be near different people.&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic text-sm text-[var(--muted)]">
                  — Maria (Toronto), project participant
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="visit-heading" className="py-16 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2
                id="visit-heading"
                className="font-serif text-xl font-semibold text-[var(--foreground)] mb-1"
              >
                Explore the full project
              </h2>
              <p className="text-[var(--muted)] text-sm">
                Themes, participant art, news coverage, and more at the dedicated project site.
              </p>
            </div>
            <a
              href="https://www.imagesofgod.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Visit imagesofgod.ca
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-xs text-[var(--muted)]">
            All identifying information, images, and quotes appear with the informed consent of
            participants. This study was reviewed and approved by the Wilfrid Laurier University
            Research Ethics Board (REB #8940).
          </p>
        </section>
      </div>
    </>
  );
}
