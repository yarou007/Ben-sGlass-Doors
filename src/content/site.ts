export type PartnerLink = {
  label: string;
  url: string;
  rel?: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  keywords: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Location = {
  slug: string;
  name: string;
  keywords: string[];
};

export const site = {
  brand: {
    name: "Commercial Glass & Storefront",
    tagline: "Commercial storefront, windows, doors & hardware",
  },
  contact: {
    phone: "703-244-0559",
    phoneTel: "+17032440559",
  },
  serviceAreas: ["Washington, DC", "New York, NY", "Washington (Metro)", "Philadelphia, PA"],

  // Edit these to target different search terms.
  seo: {
    siteKeywords: [
      "commercial glass repair",
      "storefront glass",
      "commercial door repair",
      "commercial window glass",
      "glass door repair",
      "storefront door hardware",
      "emergency glass replacement",
    ],
    // Optional: set NEXT_PUBLIC_SITE_URL in production.
    defaultTitle: "Commercial Glass & Storefront | 703-244-0559",
    defaultDescription:
      "Commercial storefront glass, windows, and doors & hardware. Fast scheduling, clean installs, and clear communication. Call 703-244-0559.",
  },

  // These are outbound “partner/resources” links. For true backlinks, others must link to you.
  // Add/remove freely.
  partnerLinks: [] as PartnerLink[],

  services: [
    {
      slug: "commercial-storefront",
      title: "Commercial Storefront",
      short: "Storefront glass & entry systems for retail and commercial buildings.",
      description:
        "Repair and replacement for storefront glass, frames, and entry components. We prioritize clean work, safe job sites, and durable commercial-grade materials.",
      keywords: [
        "commercial storefront",
        "storefront glass replacement",
        "storefront door repair",
        "aluminum storefront",
      ],
      image: {
        src: "/images/storefront.jpeg",
        alt: "Commercial storefront door and glass",
      },
    },
    {
      slug: "commercial-window",
      title: "Commercial Window",
      short: "Commercial window glass repair and replacement.",
      description:
        "We service commercial window glass including cracked panes, failed seals, and replacement installs. Expect accurate measurements and professional finishes.",
      keywords: [
        "commercial window",
        "window glass replacement",
        "commercial glass replacement",
      ],
      image: {
        src: "/images/window-crack.jpeg",
        alt: "Cracked commercial window glass",
      },
    },
    {
      slug: "commercial-doors-hardware",
      title: "Commercial Doors & Hardware",
      short: "Door closers, panic bars, hinges, locks, and adjustments.",
      description:
        "Service for commercial doors and hardware: alignment, closer replacement, panic devices, hinges, strike adjustments, and general door operation fixes.",
      keywords: [
        "commercial doors",
        "door hardware",
        "door closer",
        "panic bar",
        "commercial door repair",
      ],
      image: {
        src: "/images/door-hardware.jpeg",
        alt: "Commercial door and hardware",
      },
    },
  ] as Service[],

  locations: [
    {
      slug: "dc",
      name: "Washington, DC",
      keywords: ["commercial glass DC", "storefront repair DC"],
    },
    {
      slug: "ny",
      name: "New York, NY",
      keywords: ["commercial glass NYC", "storefront glass New York"],
    },
    {
      slug: "washington",
      name: "Washington (Metro)",
      keywords: ["commercial glass Washington", "storefront repair Washington"],
    },
    {
      slug: "philadelphia",
      name: "Philadelphia, PA",
      keywords: ["commercial glass Philadelphia", "storefront repair Philadelphia"],
    },
  ] as Location[],
} as const;
