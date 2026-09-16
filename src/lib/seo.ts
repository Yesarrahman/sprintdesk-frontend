import type { Metadata } from "next";

export const siteConfig = {
  name: "SprintDesk",
  tagline: "Where Personal Focus Meets Team Velocity",
  description:
    "SprintDesk bridges personal task management and team sprint execution in one unified workspace. Capture ideas instantly, eliminate context switching, and calculate realistic finish times.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sprintdesk.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.sprintdesk.com",
  ogImage: "/sd-logo.png",
  links: {
    twitter: "https://twitter.com/sprintdesk",
    github: "https://github.com/sprintdesk",
  },
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const finalUrl = canonicalUrl
    ? `${siteConfig.url}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`
    : siteConfig.url;

  return {
    title: finalTitle,
    description,
    keywords: [
      "task management",
      "sprint management",
      "personal productivity",
      "team velocity",
      "kanban board",
      "estimated finish time",
      "async project management",
      "workflow automation",
      "scrum sprint planner",
      "focus workspace",
    ],
    authors: [{ name: "SprintDesk Team" }],
    creator: "SprintDesk",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: finalUrl,
      title: finalTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [image],
      creator: "@sprintdesk",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SprintDesk",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    description: siteConfig.description,
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SprintDesk",
    operatingSystem: "Web, macOS, Windows",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "280",
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
