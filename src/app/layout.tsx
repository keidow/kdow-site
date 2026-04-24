import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://keithdow.com";
const defaultDescription =
  "Keith Dow, PhD, is a Canadian theologian, researcher, writer, and accessibility consultant working at the intersection of Christian theology, disability, caregiving, spirituality, and belonging.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Keith Dow | Theology, Disability, and the Beauty of Human Limits",
    template: "%s | Keith Dow",
  },
  description: defaultDescription,
  authors: [{ name: "Keith Dow", url: siteUrl }],
  creator: "Keith Dow",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Keith Dow",
    title: "Keith Dow | Theology, Disability, and the Beauty of Human Limits",
    description: defaultDescription,
    url: siteUrl,
    images: [{ url: "/images/keith-dow-og-image-watercolour.png", alt: "Keith Dow — Theology, Disability, and the Beauty of Human Limits" }],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Dow | Theology, Disability, and the Beauty of Human Limits",
    description: defaultDescription,
    images: ["/images/keith-dow-og-image-watercolour.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
