export type PartnerLink = {
  label: string;
  url: string;
  rel?: string;
};

export type AuthorityLink = {
  label: string;
  url: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  keywords: string[];
  h1: string;
  heroSubheading: string;
  typicalRequests: string[];
  whatWeHandle: string[];
  faqs: Faq[];
  authorityLinks: AuthorityLink[];
  image: {
    src: string;
    alt: string;
  };
};

export type Location = {
  slug: string;
  name: string;
  keywords: string[];
  addressLocality: string;
  addressRegion: string;
  addressCountry: "US";
  intro: string;
  localKeywords: string[];
};

export const site = {
  brand: {
    name: "Commercial Glass & Storefront",
    tagline: "Storefront glass repair, emergency board-up, doors & hardware",
  },
  contact: {
    phone: "703-244-0559",
    phoneTel: "+17032440559",
  },
  serviceAreas: ["Washington, DC", "New York, NY", "Virginia", "Philadelphia, PA"],

  // Edit these to target different search terms.
  seo: {
    siteKeywords: [
      "commercial glass repair",
      "commercial glass repair DC",
      "storefront glass",
      "storefront glass repair Washington DC",
      "commercial door repair",
      "emergency board up service",
      "glass door repair",
      "storefront door hardware",
      "emergency glass replacement",
      "commercial glass replacement near me",
    ],
    // Optional: set NEXT_PUBLIC_SITE_URL in production.
    defaultTitle: "Commercial Glass Repair & Storefront Service (DC, NY, VA) | 703-244-0559",
    defaultDescription:
      "Commercial glass repair, storefront glass repair in Washington DC, emergency board-up service, and commercial doors & hardware. Typical response under 45 minutes. Call 703-244-0559.",
  },

  // These are outbound “partner/resources” links. For true backlinks, others must link to you.
  // Add/remove freely.
  partnerLinks: [
    {
      label: "International Code Council (IBC reference)",
      url: "https://www.iccsafe.org/",
    },
    {
      label: "ADA Standards for Accessible Design (door compliance)",
      url: "https://www.ada.gov/law-and-regs/design-standards/",
    },
    {
      label: "OSHA – Walking-Working Surfaces & safety guidance", 
      url: "https://www.osha.gov/walking-working-surfaces",
    },
    {
      label: "National Glass Association (industry resources)",
      url: "https://www.glass.org/",
    },
  ] as PartnerLink[],

  services: [
    {
      slug: "commercial-storefront",
      title: "Storefront Glass Repair",
      h1: "Storefront glass repair for commercial buildings",
      heroSubheading:
        "Fast storefront glass repair and replacement for retail entrances, strip centers, and multi-tenant buildings.",
      short: "Storefront glass repair & replacement for retail and commercial entrances.",
      description:
        "We handle commercial storefront glass repair and replacement with clean installs, accurate measurements, and hardware-ready coordination for property managers.",
      keywords: [
        "storefront glass repair Washington DC",
        "storefront glass repair",
        "commercial storefront glass",
        "commercial glass repair DC",
        "storefront glass replacement",
        "aluminum storefront",
        "commercial glass replacement near me",
      ],
      typicalRequests: [
        "Shattered storefront glass (same-day board-up + replacement plan)",
        "Cracked tempered glass near entrances", 
        "Loose glazing, rattling panes, and drafty storefronts",
        "Storefront glass replacement after impact damage",
      ],
      whatWeHandle: [
        "On-site assessment & accurate measurements",
        "Tempered/laminated glass coordination based on storefront requirements",
        "Cleanup-focused installs and safe work areas",
        "Documentation-ready communication for property managers",
      ],
      faqs: [
        {
          q: "Do you handle emergency storefront glass repair?",
          a: "Yes. For break-ins or shattered glass, we can secure the opening (board-up if needed) and schedule the correct replacement glass as fast as possible.",
        },
        {
          q: "Can you match existing storefront glass thickness and tint?",
          a: "In most cases, yes. Share photos and any prior paperwork; we’ll measure on-site and confirm the correct make-up before ordering.",
        },
      ],
      authorityLinks: [
        { label: "National Glass Association resources", url: "https://www.glass.org/" },
        { label: "ICC building code guidance", url: "https://www.iccsafe.org/" },
      ],
      image: {
        src: "/images/storefront.jpeg",
        alt: "Commercial storefront door and glass",
      },
    },
    {
      slug: "emergency-board-up",
      title: "Emergency Board-Up",
      h1: "Emergency board-up service for commercial glass damage",
      heroSubheading:
        "Secure broken storefronts and windows fast after break-ins, storms, or vandalism—then plan the permanent glass replacement.",
      short: "24/7 emergency board-up service for break-ins and shattered glass.",
      description:
        "Emergency board-up service to secure your business after shattered glass, break-ins, or storm damage. We focus on fast arrival, safe cleanup, and a clear path to permanent replacement.",
      keywords: [
        "emergency board up service",
        "commercial board up",
        "storefront board up Washington DC",
        "commercial glass repair DC",
        "emergency glass replacement",
      ],
      typicalRequests: [
        "Break-in damage: secure storefront opening immediately",
        "Storm damage and dangerous glass cleanup",
        "Temporary boarding to keep businesses compliant and secure",
        "After-hours emergency calls for retail entrances",
      ],
      whatWeHandle: [
        "Board-up to secure openings and reduce liability",
        "Basic debris control & safety-first site handling",
        "Measurement and documentation for replacement ordering",
        "Scheduling the follow-up install once glass is ready",
      ],
      faqs: [
        {
          q: "How fast can you respond?",
          a: "For emergencies in the metro area, response is typically under 45 minutes depending on traffic and call volume.",
        },
        {
          q: "Do you replace the glass after the board-up?",
          a: "Yes. We can measure during the emergency visit and schedule the permanent replacement as soon as the correct glass is available.",
        },
      ],
      authorityLinks: [
        { label: "OSHA safety guidance", url: "https://www.osha.gov/walking-working-surfaces" },
        { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
      ],
      image: {
        src: "/images/window-crack.jpeg",
        alt: "Emergency board-up for broken commercial glass",
      },
    },
    {
      slug: "commercial-window-repair",
      title: "Commercial Window Repair",
      h1: "Commercial window glass repair and replacement",
      heroSubheading:
        "From cracked panes to failed seals, we restore visibility and safety with commercial-grade glass work.",
      short: "Commercial window glass repair, failed seals, and replacement installs.",
      description:
        "Commercial window glass repair for cracked panes, failed seals, and replacement installs. Expect accurate measurements, clean finishes, and minimal disruption to your tenants.",
      keywords: [
        "commercial glass replacement near me",
        "commercial window glass repair",
        "commercial window replacement",
        "commercial glass repair",
      ],
      typicalRequests: [
        "Cracked commercial window panes",
        "Foggy insulated glass units (failed seals)",
        "Glass replacement after impact damage",
        "Drafts and loose glazing around frames",
      ],
      whatWeHandle: [
        "On-site assessment & measurements",
        "Insulated glass unit evaluation (seal failure)",
        "Commercial-grade materials selection",
        "Clean installs with safety-first staging",
      ],
      faqs: [
        {
          q: "Can you replace just the glass instead of the whole window?",
          a: "Often, yes—if the frame is in good shape. We’ll inspect the system and recommend the most cost-effective path.",
        },
        {
          q: "Do you service multi-tenant buildings?",
          a: "Yes. We coordinate access and scheduling with property managers to minimize disruption.",
        },
      ],
      authorityLinks: [
        { label: "National Glass Association resources", url: "https://www.glass.org/" },
      ],
      image: {
        src: "/images/window-crack.jpeg",
        alt: "Cracked commercial window glass",
      },
    },
    {
      slug: "commercial-glass-replacement",
      title: "Commercial Glass Replacement",
      h1: "Commercial glass replacement (fast, code-aware installs)",
      heroSubheading:
        "Replace broken, outdated, or unsafe commercial glass with the right make-up for your building and usage.",
      short: "Emergency and scheduled commercial glass replacement for businesses.",
      description:
        "Commercial glass replacement for storefronts, windows, and entry doors. We focus on correct glass selection, clean installs, and clear timelines.",
      keywords: [
        "commercial glass replacement near me",
        "commercial glass replacement",
        "emergency glass replacement",
        "commercial glass repair",
      ],
      typicalRequests: [
        "Replace broken glass after a break-in",
        "Upgrade to safer glass make-ups where needed",
        "Recurring replacements across multiple sites",
        "Schedule replacements around business hours",
      ],
      whatWeHandle: [
        "Measurement and ordering coordination",
        "Tempered/laminated glass planning based on application",
        "Jobsite protection and cleanup",
        "Property-manager-friendly updates and documentation",
      ],
      faqs: [
        {
          q: "Do you offer temporary security if glass must be ordered?",
          a: "Yes. If replacement glass isn’t immediately available, we can secure the opening and return for the final install.",
        },
        {
          q: "Can you work after-hours?",
          a: "Often, yes. Tell us your business hours and access constraints—we’ll schedule to reduce downtime.",
        },
      ],
      authorityLinks: [
        { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
        { label: "National Glass Association resources", url: "https://www.glass.org/" },
      ],
      image: {
        src: "/images/storefront.jpeg",
        alt: "Commercial glass replacement for storefronts",
      },
    },
    {
      slug: "commercial-doors-hardware",
      title: "Commercial Doors & Hardware",
      h1: "Commercial door repair, closers & panic hardware",
      heroSubheading:
        "Fix hard-to-close doors, failing closers, and worn hardware with commercial-grade parts and proper adjustments.",
      short: "Door closers, panic bars, hinges, locks, and alignment adjustments.",
      description:
        "Commercial door and hardware service: alignment, closer replacement, panic devices, hinges, strike adjustments, and operational fixes that keep entrances secure and smooth.",
      keywords: [
        "commercial doors",
        "door hardware",
        "door closer",
        "panic bar",
        "commercial door repair",
        "commercial door hardware repair",
      ],
      typicalRequests: [
        "Door won’t latch or rubs the frame",
        "Closer leaking or slamming doors",
        "Panic bar adjustments and hardware replacement",
        "Hinge/strike alignment for smoother operation",
      ],
      whatWeHandle: [
        "Hardware troubleshooting and fit adjustments",
        "Closer replacement and tuning",
        "Panic device service (alignment, function checks)",
        "Communication suitable for facility teams",
      ],
      faqs: [
        {
          q: "Do you help with ADA-related door operation issues?",
          a: "We can address common operational problems (closing speed, latch issues, alignment). For compliance specifics, we recommend reviewing the ADA standards.",
        },
        {
          q: "Can you service multiple locations for a chain?",
          a: "Yes. We can standardize parts and scheduling across multiple commercial sites.",
        },
      ],
      authorityLinks: [
        { label: "ADA design standards", url: "https://www.ada.gov/law-and-regs/design-standards/" },
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
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
      intro:
        "Commercial glass repair and storefront glass repair for businesses across Washington DC—ideal for property managers, retail operators, and facility teams that need fast turnaround.",
      localKeywords: [
        "commercial glass repair DC",
        "storefront glass repair Washington DC",
        "emergency board up Washington DC",
      ],
    },
    {
      slug: "ny",
      name: "New York, NY",
      keywords: ["commercial glass NYC", "storefront glass New York"],
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
      intro:
        "Commercial storefront and glass replacement support for New York businesses—coordinated scheduling, clean installs, and reliable communication for busy sites.",
      localKeywords: [
        "commercial glass replacement New York",
        "storefront glass repair New York",
        "emergency board up NYC",
      ],
    },
    {
      slug: "virginia",
      name: "Virginia",
      keywords: ["commercial glass Virginia", "storefront repair Virginia"],
      addressLocality: "Northern Virginia",
      addressRegion: "VA",
      addressCountry: "US",
      intro:
        "Commercial glass and door service across Virginia with a focus on fast response for broken glass, storefront repairs, and door hardware issues.",
      localKeywords: [
        "commercial glass repair Virginia",
        "commercial glass replacement Virginia",
        "emergency board up Virginia",
      ],
    },
    {
      slug: "philadelphia",
      name: "Philadelphia, PA",
      keywords: ["commercial glass Philadelphia", "storefront repair Philadelphia"],
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      addressCountry: "US",
      intro:
        "Commercial storefront glass repair and door hardware service for Philadelphia businesses—clear estimates, clean installs, and minimal disruption.",
      localKeywords: [
        "commercial glass replacement Philadelphia",
        "storefront glass repair Philadelphia",
        "emergency board up Philadelphia",
      ],
    },
  ] as Location[],
} as const;
