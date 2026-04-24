import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Formed Together",
  description:
    "Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving — published by Baylor University Press.",
};

const reviews = [
  { reviewer: "Charles Camosy", publication: "Studies in Christian Ethics", href: "https://journals.sagepub.com/doi/abs/10.1177/09539468221122374g" },
  { reviewer: "Jesse Kane", publication: "Faith Today", href: "https://www.faithtoday.ca/Magazines/2022-May-Jun/Formed-Together-Mystery,-Narrative-and-Virtue-in" },
  { reviewer: "Michael Bonikowsky", publication: "Disability and Faith Forum", href: "https://disabilityandfaith.org/book-review-formed-together/" },
  { reviewer: "J. Tyler Campbell", publication: "Journal of Disability and Religion", href: "https://www.tandfonline.com/doi/full/10.1080/23312521.2021.2016549" },
  { reviewer: "Frances Young", publication: "Theology", href: "https://journals.sagepub.com/doi/10.1177/0040571X211056801f" },
];

const purchaseLinks = [
  { label: "Baylor University Press", href: "https://www.baylorpress.com/9781481313216/formed-together/" },
  { label: "Amazon Canada", href: "https://www.amazon.ca/dp/1481313215/" },
  { label: "Amazon USA", href: "https://www.amazon.com/dp/1481313215/" },
  { label: "Barnes & Noble", href: "http://www.barnesandnoble.com/w/formed-together-keith-dow/1137379370" },
  { label: "Project MUSE", href: "https://muse.jhu.edu/book/83395" },
];

export default function FormedTogether() {
  return (
    <>
      <PageHeader
        label="Book — Baylor University Press, 2021"
        title="Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving"
        description="Part of the Baylor University Press Studies on Religion, Theology and Disability series."
        artworkSrc="/images/graphic elements/variants-p2.png"
        artworkWidth={487}
        artworkHeight={492}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* About the book */}
        <section
          aria-labelledby="book-desc-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Image
                src="/images/formed-together-cover.png"
                alt="Formed Together book cover"
                width={420}
                height={600}
                className="w-full max-w-xs h-auto rounded shadow-sm"
                priority
              />
            </div>
            <div className="space-y-5 text-[var(--muted)] text-base leading-relaxed">
              <h2
                id="book-desc-heading"
                className="font-serif text-2xl font-semibold text-[var(--foreground)] leading-snug"
              >
                About the book
              </h2>
              <p>
                <em>Formed Together</em> is a culmination of many years&apos; work and personal
                experience — beautiful and intermingled with profound delight and heartbreaking loss.
              </p>
              <p>
                The book explores how our experiences of caregiving reveal the mystery of our shared
                human limits and the divine image in one another. Drawing from theology, philosophy,
                and personal stories, Dr. Dow challenges professional and cultural assumptions about
                ability, virtue, and transparency.
              </p>
              <p>
                He invites readers to encounter caregiving not as a set of skills to master, but as
                a formative practice of love, humility, and courageous belonging, shaped by the
                mystery of God&apos;s love already given. Rooted in lived experiences with people
                with intellectual disabilities, <em>Formed Together</em> offers a reflective yet
                accessible vision of Christian caregiving as mutual transformation, not mere service.
              </p>
            </div>
          </div>
        </section>

        {/* Purchase */}
        <section
          aria-labelledby="purchase-heading"
          className="py-16 md:py-20 border-b border-[var(--border)]"
        >
          <h2
            id="purchase-heading"
            className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10"
          >
            Purchase
          </h2>
          <ul className="flex flex-wrap gap-3">
            {purchaseLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium border border-[var(--border)] rounded-md px-4 py-2 text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section
          aria-labelledby="reviews-heading"
          className="py-16 md:py-20"
        >
          <h2
            id="reviews-heading"
            className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10"
          >
            Reviews
          </h2>
          <ul className="space-y-0">
            {reviews.map((r) => (
              <li
                key={r.reviewer}
                className="border-b border-[var(--border)] last:border-0"
              >
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 gap-1 hover:text-[var(--accent)] transition-colors group"
                >
                  <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">{r.reviewer}</p>
                  <p className="text-sm text-[var(--muted)]">{r.publication}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
