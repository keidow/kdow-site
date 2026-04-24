import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { writingJsonLd } from "@/lib/jsonld";

const siteUrl = "https://keithdow.com";

export const metadata: Metadata = {
  title: { absolute: "Writing & Work | Keith Dow" },
  description:
    "Books, chapters, journal articles, podcasts, videos, and public writing by Keith Dow on disability theology, Christian caregiving, spirituality, accessibility, and belonging.",
  alternates: { canonical: `${siteUrl}/writing-and-work` },
  openGraph: {
    title: "Writing & Work | Keith Dow",
    description:
      "Books, chapters, journal articles, podcasts, videos, and public writing by Keith Dow on disability theology, Christian caregiving, spirituality, accessibility, and belonging.",
    url: `${siteUrl}/writing-and-work`,
    type: "website",
  },
  twitter: {
    title: "Writing & Work | Keith Dow",
    description:
      "Books, chapters, journal articles, podcasts, videos, and public writing by Keith Dow on disability theology, Christian caregiving, spirituality, accessibility, and belonging.",
  },
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={writingJsonLd} />
      {children}
    </>
  );
}
