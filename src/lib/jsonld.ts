const siteUrl = "https://keithdow.com";
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const ogImage = `${siteUrl}/images/keith-dow-og-image-watercolour.png`;

// ─── Shared entity stubs ────────────────────────────────────────────────────

const personStub = {
  "@type": "Person",
  "@id": personId,
  name: "Keith Dow",
  givenName: "Keith",
  familyName: "Dow",
  honorificSuffix: "PhD",
  url: siteUrl,
  image: ogImage,
  description:
    "Keith Dow, PhD, is a Canadian theologian, researcher, writer, and accessibility consultant working at the intersection of Christian theology, disability, intellectual and developmental disability, caregiving, spirituality, and belonging.",
  jobTitle: ["Theologian", "Researcher", "Writer", "Accessibility Consultant"],
  worksFor: {
    "@type": "Organization",
    name: "Karis Disability Services",
    url: "https://www.karis.org/",
  },
  knowsAbout: [
    "Disability theology",
    "Christian theology",
    "Intellectual disability",
    "Developmental disability",
    "Christian caregiving",
    "Care ethics",
    "Spirituality",
    "Belonging",
    "Accessibility",
    "Practical theology",
    "Kierkegaard",
    "Disability ministry",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Vrije Universiteit Amsterdam",
      url: "https://vu.nl",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "PhD in Theology",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/keithdow/",
    "https://keithdow.substack.com/",
    "https://imagesofgod.ca",
    "https://crosstrainingpsychologyandtheology.com/",
  ],
};

const websiteStub = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Keith Dow",
  description:
    "The official website of Keith Dow, PhD: Canadian theologian, researcher, writer, and accessibility consultant working at the intersection of Christian theology, disability, caregiving, spirituality, and belonging.",
  inLanguage: "en-CA",
  publisher: { "@id": personId },
};

const formedTogetherBook = {
  "@type": "Book",
  "@id": `${siteUrl}/formed-together#book`,
  name: "Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving",
  url: `${siteUrl}/formed-together`,
  isbn: "9781481313216",
  author: { "@id": personId },
  publisher: {
    "@type": "Organization",
    name: "Baylor University Press",
    url: "https://www.baylorpress.com",
  },
  datePublished: "2021",
  inLanguage: "en",
  genre: ["Theology", "Disability theology", "Christian ethics"],
  about: [
    "Christian caregiving",
    "Disability theology",
    "Intellectual disability",
    "Christian community",
    "Virtue ethics",
    "Care ethics",
  ],
  description:
    "A theological account of Christian caregiving as mutual formation, rooted in lived experience with people with intellectual disabilities.",
};

const imagesOfGodWork = {
  "@type": "CreativeWork",
  "@id": `${siteUrl}/images-of-god#creativework`,
  name: "Images of God: Through the Lens of Disability",
  url: `${siteUrl}/images-of-god`,
  sameAs: "https://imagesofgod.ca",
  creator: { "@id": personId },
  funder: {
    "@type": "Organization",
    name: "John Templeton Foundation",
    url: "https://www.templeton.org/",
  },
  inLanguage: "en-CA",
  about: [
    "Disability theology",
    "Intellectual disability",
    "Christian spirituality",
    "Arts-based research",
    "Image of God",
    "God representation",
    "Self representation",
  ],
  description:
    "An arts-based research project exploring how Christian adults with intellectual disabilities understand God and themselves.",
};

// ─── Page-level JSON-LD ─────────────────────────────────────────────────────

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteStub,
    {
      ...personStub,
      mainEntityOfPage: { "@id": `${siteUrl}/#webpage` },
    },
    formedTogetherBook,
    imagesOfGodWork,
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Keith Dow | Theology, Disability, and the Beauty of Human Limits",
      description:
        "Scholarship, leadership, and public engagement at the intersection of Christian faith, intellectual disability, and the ethics of care.",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
      inLanguage: "en-CA",
    },
  ],
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/about#webpage`,
      url: `${siteUrl}/about`,
      name: "About Keith Dow | Theology, Disability, and Care",
      description:
        "About Keith Dow, PhD, Canadian theologian, researcher, writer, and accessibility consultant.",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en-CA",
    },
    personStub,
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/about#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
      ],
    },
  ],
};

export const writingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/writing-and-work#webpage`,
      url: `${siteUrl}/writing-and-work`,
      name: "Writing & Work | Keith Dow",
      description:
        "Books, chapters, journal articles, podcasts, videos, and public writing by Keith Dow on disability theology, Christian caregiving, spirituality, accessibility, and belonging.",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": `${siteUrl}/writing-and-work#works` },
      inLanguage: "en-CA",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/writing-and-work#works`,
      name: "Selected works by Keith Dow",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            ...formedTogetherBook,
            mainEntityOfPage: { "@id": `${siteUrl}/formed-together#webpage` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Chapter",
            name: "Against Living Saints",
            author: { "@id": personId },
            url: "https://wipfandstock.com/9781666772302/the-betrayal-of-witness/",
            isPartOf: {
              "@type": "Book",
              name: "The Betrayal of Witness: Reflections on the Downfall of Jean Vanier",
              publisher: {
                "@type": "Organization",
                name: "Wipf and Stock",
                url: "https://wipfandstock.com",
              },
            },
            datePublished: "2024",
            about: ["Jean Vanier", "L'Arche", "Disability theology", "Witness"],
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "ScholarlyArticle",
            name: "Thousands of Glittering Shards: Spirituality as Resonance in the Lives of People with Intellectual Disabilities",
            author: { "@id": personId },
            url: "https://www.mdpi.com/2077-1444/14/7/886",
            datePublished: "2023",
            isPartOf: { "@type": "Periodical", name: "Religions" },
            about: ["Spirituality", "Intellectual disability", "Disability theology"],
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "ScholarlyArticle",
            name: "Toward Accessible Faith & Flourishing: Reconsidering Greek Intellectualism in Western Christian Theology",
            author: { "@id": personId },
            url: "https://www.tandfonline.com/doi/full/10.1080/23312521.2021.1901638",
            datePublished: "2021",
            isPartOf: { "@type": "Periodical", name: "Journal of Disability and Religion" },
            about: ["Accessible faith", "Flourishing", "Disability theology", "Christian theology"],
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Episode",
            name: "Suffering, Identity & Hope: Christian Approaches to Caregiving",
            author: { "@id": personId },
            url: "https://www.buzzsprout.com/1863668/episodes/18495716-suffering-identity-hope-christian-approaches-to-caregiving-ep-252",
            datePublished: "2025-12-03",
            partOfSeries: { "@type": "PodcastSeries", name: "The Faith Today Podcast" },
            about: ["Disability theology", "Care ethics", "Christian caregiving", "Medical Assistance in Dying"],
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "VideoObject",
            name: "Faith, Art, and Intellectual Disability — Karis on 100 Huntley Street",
            description:
              "Keith Dow and Karis Disability Services featured on 100 Huntley Street discussing the Images of God project and how adults with intellectual disabilities experience God through art.",
            url: "https://youtu.be/PkR8YqimCcg",
            embedUrl: "https://www.youtube.com/embed/PkR8YqimCcg",
            thumbnailUrl: `${siteUrl}/images/thumbnails/video-100-huntley.jpg`,
            uploadDate: "2026-03-26T00:00:00+00:00",
            author: { "@id": personId },
            about: ["Intellectual disability", "Disability theology", "Arts-based research", "Images of God"],
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Thesis",
            name: "Call, Encounter, and Response: Loving my neighbour with intellectual disabilities",
            author: { "@id": personId },
            url: "https://research.vu.nl/en/publications/call-encounter-and-response-loving-my-neighbour-with-intellectual",
            datePublished: "2019",
            inSupportOf: "PhD in Theology",
            sourceOrganization: {
              "@type": "CollegeOrUniversity",
              name: "Vrije Universiteit Amsterdam",
              url: "https://vu.nl",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Thesis",
            name: "Kierkegaard's Ethic: The Other by Faith",
            author: { "@id": personId },
            url: "https://www.academia.edu/8889806/Kierkegaards_Ethic_The_Other_by_Faith",
            datePublished: "2009",
            inSupportOf: "MA in Philosophy",
            sourceOrganization: {
              "@type": "CollegeOrUniversity",
              name: "Dominican University College Ottawa",
            },
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/writing-and-work#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Writing & Work", item: `${siteUrl}/writing-and-work` },
      ],
    },
  ],
};

export const formedTogetherJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...formedTogetherBook,
      mainEntityOfPage: { "@id": `${siteUrl}/formed-together#webpage` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/formed-together#webpage`,
      url: `${siteUrl}/formed-together`,
      name: "Formed Together | Keith Dow",
      description:
        "Formed Together: Mystery, Narrative, and Virtue in Christian Caregiving by Keith Dow, published by Baylor University Press.",
      isPartOf: { "@id": websiteId },
      about: { "@id": `${siteUrl}/formed-together#book` },
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/formed-together#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Formed Together", item: `${siteUrl}/formed-together` },
      ],
    },
  ],
};

export const imagesOfGodJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...imagesOfGodWork,
      mainEntityOfPage: { "@id": `${siteUrl}/images-of-god#webpage` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/images-of-god#webpage`,
      url: `${siteUrl}/images-of-god`,
      name: "Images of God | Keith Dow",
      description:
        "Images of God: Through the Lens of Disability is an arts-based research project exploring God and self representation with Christian adults with intellectual disabilities.",
      isPartOf: { "@id": websiteId },
      about: { "@id": `${siteUrl}/images-of-god#creativework` },
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/images-of-god#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Images of God", item: `${siteUrl}/images-of-god` },
      ],
    },
  ],
};
