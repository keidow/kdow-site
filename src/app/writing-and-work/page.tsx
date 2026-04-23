"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

type Category = "all" | "book" | "articles" | "podcasts" | "videos" | "other";

interface Item {
  category: Exclude<Category, "all">;
  label: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  access?: "Open Access" | "Limited Access";
  image?: string;
}

const items: Item[] = [
  // Book & Chapters
  {
    category: "book",
    label: "Book",
    title: "Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving",
    description:
      "Explores how experiences of caregiving reveal the mystery of shared human limits and the divine image. An invitation to encounter caregiving as a formative practice of love, humility, and courageous belonging — not a set of skills to master.",
    meta: "Baylor University Press · 2021",
    href: "https://www.baylorpress.com/9781481313216/formed-together/",
    image: "/images/formed-together-cover.png",
  },
  {
    category: "book",
    label: "Book Chapter",
    title: "\"Against Living Saints\" in The Betrayal of Witness",
    description:
      "Takes an unflinching look at several factors that enabled Jean Vanier to perpetuate harm, and considers what steps must be taken to prevent similar religious abuses in communities serving people with disabilities.",
    meta: "Wipf and Stock · Ed. Stanley Hauerwas & Hans Reinders · 2024",
    href: "https://wipfandstock.com/9781666772302/the-betrayal-of-witness/",
    image: "/images/betrayal-of-witness-cover.jpeg",
  },

  // Journal Articles
  {
    category: "articles",
    label: "Journal Article",
    title: "Thousands of Glittering Shards: Spirituality as Resonance in the Lives of People with Intellectual Disabilities",
    description:
      "Proposes \"resonance\" as a framework for recognizing diverse spiritual expressions — artistic, non-verbal, and embodied — often overlooked in traditional therapeutic and religious settings.",
    meta: "Religions · July 2023",
    href: "https://www.mdpi.com/2077-1444/14/7/886",
    access: "Open Access",
  },
  {
    category: "articles",
    label: "Journal Article",
    title: "\"Marked\" Bodies, Medical Intervention, and Courageous Humility",
    description:
      "Uses Hawthorne's The Birthmark to explore stigma, identity, and spirituality, arguing that healing practices must adopt courageous humility to promote the flourishing of all people.",
    meta: "Journal on Medicine & Philosophy · November 2022",
    href: "https://www.tandfonline.com/doi/full/10.1080/23312521.2021.1881023",
    access: "Limited Access",
  },
  {
    category: "articles",
    label: "Journal Article",
    title: "Toward Accessible Faith & Flourishing: Reconsidering Greek Intellectualism in Western Christian Theology",
    description:
      "Examines how Greek philosophical traditions shape Western Christian theology's view of human flourishing, calling churches to resist forces that undermine the witness of people with disabilities.",
    meta: "Journal of Disability and Religion · 2021",
    href: "https://www.tandfonline.com/doi/full/10.1080/23312521.2021.1901638",
    access: "Open Access",
  },
  {
    category: "articles",
    label: "Journal Article",
    title: "Simplicity, Purity of Heart, and the Gift of Limits",
    description:
      "Drawing on Anabaptist values and Kierkegaard's \"Purity of Heart is to Will One Thing,\" highlights the unique virtue and contribution of people with intellectual disabilities in Christian community.",
    meta: "Conrad Grebel Review · 2020",
    href: "https://uwaterloo.ca/grebel/cgr-vol-38-no-2-spring-2020",
    access: "Open Access",
  },
  {
    category: "articles",
    label: "Journal Article",
    title: "Suspending the Ethical: Autonomy, Disability, and Shalom",
    description:
      "Argues that modern Western culture's approach to persons with disabilities reflects death-making treatment, and asks what response peacemaking must offer.",
    meta: "Peace Studies Journal · Vol. 6, Issue 4 · 2013",
    href: "http://peacestudiesjournal.org/volume-6-issue-4-2013/",
    access: "Open Access",
  },
  {
    category: "articles",
    label: "Book Review",
    title: "Book Review: Disciples and Friends",
    description:
      "Reviews how this festschrift honouring John Swinton advances critical conversations in disability theology through themes of friendship, vulnerability, and belonging.",
    meta: "Studies in Christian Ethics · August 2024",
    href: "https://doi.org/10.1177/09539468241261193b",
    access: "Limited Access",
  },

  // Podcasts — Hosted
  {
    category: "podcasts",
    label: "Hosted Podcast",
    title: "Disability and the Canadian Church",
    description:
      "Weekly conversations on the intersections of disability and the Christian faith in Canada and beyond. Co-hosted with Jasmine Duckworth.",
    meta: "Spring 2023",
    href: "https://www.newleafnetwork.ca/disabilitychurchpodcast",
    image: "/images/disability-canadian-church-podcast.webp",
  },
  {
    category: "podcasts",
    label: "Hosted Podcast",
    title: "Renew Course: Caring for you as you care for others",
    description:
      "A three-hour course in nine podcast sessions exploring resilient care practices and combating compassion fatigue in caregiving.",
    meta: "Apple Podcasts · Spotify · SoundCloud",
    href: "https://podcasts.apple.com/ca/podcast/renew-caring-for-you-as-you-care-for-others/id1508594360",
    image: "/images/renew-podcast.jpg",
  },

  // Podcasts — Appearances
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "Limits, Personhood, Formation & Ministry",
    description: "A conversation on personhood, human limits, and pastoral formation.",
    meta: "The Personalist Manifesto Podcast · February 2025",
    href: "https://personalistmanifestos.substack.com/p/limits-personhood-formation-and-ministry",
  },
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "Serving Alongside People With Disabilities",
    description: "On what it looks like for churches and communities to genuinely serve alongside people with disabilities.",
    meta: "The Sowers Podcast · September 2024",
    href: "https://creators.spotify.com/pod/show/the-sowers-pod/episodes/46---Keith-Dow-on-Serving-Alongside-People-With-Disabilities-e2u2j28/a-abogv7n",
  },
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "Virtue, Agency, & Christian Caregiving",
    description: "A theological conversation on virtue, moral agency, and the ethics of care.",
    meta: "The Two Cities Podcast · April 2023",
    href: "https://www.thetwocities.com/culture/virtue-agency-christian-caregiving-with-dr-keith-dow-podcast/",
  },
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "Toward Accessible Faith and Flourishing",
    description: "On Greek intellectualism in Western theology and what it means for disability and the church.",
    meta: "Faith Today Podcast with Karen Stiller · March 2022",
    href: "https://www.faithtoday.ca/Audio-Video/Podcasts/Toward-accessible-faith-and-flourishing,-with-Keit",
  },
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "Christian Wholeness",
    description: "A conversation on spirituality, health, and what it means to pursue Christian wholeness.",
    meta: "The Healthy Spirituality Podcast · 2020",
    href: "https://podcasts.apple.com/us/podcast/the-healthy-spirituality-podcast-finding-god-in-all-of-life/id1539045688",
  },
  {
    category: "podcasts",
    label: "Podcast Appearance",
    title: "At the Intersection of Theology and Disability",
    description: "An early conversation on Keith's research and the relationship between theology and disability.",
    meta: "A Podcast of Discipleship · 2018",
    href: "http://www.stephenjbedard.com/2018/08/23/at-the-intersection-of-theology-and-disability/",
  },

  // Videos
  {
    category: "videos",
    label: "Video",
    title: "Letting Go & Learning Anew",
    description: "A presentation exploring what it means to move from presence to participation in disability ministry.",
    meta: "From Presence to Participation Webinar · March 2022",
    href: "https://youtu.be/T7t_ihSLaPw",
  },
  {
    category: "videos",
    label: "Video",
    title: "Mutual Book Interview with Brian Brock",
    description: "A conversation on Formed Together with theologian Brian Brock.",
    meta: "Institute on Theology and Disability · September 2021",
    href: "https://youtu.be/Gfm7uI6nc8U",
  },
  {
    category: "videos",
    label: "Video",
    title: "Overview of PhD Work",
    description: "A TED-style overview of Keith's doctoral research on loving neighbours with intellectual disabilities.",
    meta: "Institute on Theology and Disability · 2019",
    href: "https://youtu.be/RvQJiVxKyYM?t=541",
  },
  {
    category: "videos",
    label: "Video",
    title: "Every Church Can be Incarnational",
    description: "On what it looks like for local congregations to embody incarnational ministry.",
    meta: "Inclusion Fusion Conference · 2018",
    href: "https://vimeo.com/266402722",
  },

  // Other Writing
  {
    category: "other",
    label: "Writing Platform",
    title: "Disability and Faith Forum",
    description: "Essays and reflections at the intersection of Christian faith and disability.",
    meta: "Author page",
    href: "https://disabilityandfaith.org/author/kdow/",
  },
  {
    category: "other",
    label: "Writing Platform",
    title: "Convivium Magazine",
    description: "Public essays on faith, culture, and common life in Canada.",
    meta: "Author page",
    href: "https://www.convivium.ca/writers/bio/kdow/",
  },
  {
    category: "other",
    label: "Writing Platform",
    title: "Tamarack Institute",
    description: "Writing on community, inclusion, and social change.",
    meta: "Author page",
    href: "https://www.tamarackcommunity.ca/latest/author/keith-dow",
  },
  {
    category: "other",
    label: "PhD Dissertation",
    title: "Call, Encounter, and Response: Loving my neighbour with intellectual disabilities",
    description: "Doctoral dissertation completed at Vrije Universiteit Amsterdam.",
    meta: "Vrije Universiteit Amsterdam · 2019",
    href: "https://research.vu.nl/en/publications/call-encounter-and-response-loving-my-neighbour-with-intellectual",
    access: "Open Access",
  },
  {
    category: "other",
    label: "MA Thesis",
    title: "Kierkegaard's Ethic: The Other by Faith",
    description: "Thesis completed toward the MA in Philosophy at Dominican University College Ottawa.",
    meta: "Dominican University College Ottawa · 2009",
    href: "https://www.academia.edu/8889806/Kierkegaards_Ethic_The_Other_by_Faith",
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "book", label: "Book & Chapters" },
  { id: "articles", label: "Journal Articles" },
  { id: "podcasts", label: "Podcasts" },
  { id: "videos", label: "Videos" },
  { id: "other", label: "Other Writing" },
];

const accessColors: Record<string, string> = {
  "Open Access": "text-[var(--accent)] bg-[var(--accent-light)]",
  "Limited Access": "text-[var(--muted)] bg-[var(--border)]",
};

export default function WritingAndWork() {
  const [active, setActive] = useState<Category>("all");
  const visible = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHeader
        label="Writing & Work"
        title="Scholarship, Essays & Public Engagement"
        description="Peer-reviewed articles, book chapters, podcast hosting, and public writing at the intersection of theology, disability, and the ethics of care."
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-16">

        {/* Filter pills */}
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                active === f.id
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-[var(--muted)] mb-8">
          {visible.length} {visible.length === 1 ? "item" : "items"}
        </p>

        {/* List */}
        <ul className="space-y-0">
          {visible.map((item) => (
            <li key={item.title} className="border-b border-[var(--border)] last:border-0">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-6 hover:bg-[var(--accent-light)] -mx-4 px-4 rounded-lg transition-colors"
              >
                {/* Left: thumbnail (if present) or label */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    width={56}
                    height={72}
                    className="shrink-0 rounded object-cover w-14 h-[4.5rem]"
                  />
                ) : (
                  <span className="shrink-0 text-xs uppercase tracking-[0.1em] text-[var(--accent)] font-medium sm:w-32 pt-0.5">
                    {item.label}
                  </span>
                )}

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-base font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                    <svg
                      className="inline-block ml-1.5 mb-0.5 opacity-40 group-hover:opacity-70 transition-opacity"
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      aria-hidden="true"
                    >
                      <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {item.meta}
                    {item.access && (
                      <span className={`ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${accessColors[item.access]}`}>
                        {item.access}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Speaking CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--border)]">
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-2">
            Speaking & Collaboration
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg mb-5">
            Keith is available for speaking engagements, podcasts, and other collaborative
            opportunities related to theology, disability, and Christian community.
          </p>
          <a
            href="mailto:keidow@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
          >
            Get in touch
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
