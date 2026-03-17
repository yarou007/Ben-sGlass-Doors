export type BlogSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  dateISO: string;
  excerpt: string;
  keywords: string[];
  sections: BlogSection[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: ("dc" | "ny" | "virginia" | "philadelphia")[];
  authorityLinks: { label: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "emergency-board-up-washington-dc",
    title: "Emergency board-up in Washington DC: what to do after broken storefront glass",
    dateISO: "2026-03-17",
    excerpt:
      "A practical, property-manager friendly checklist for securing your storefront after break-ins, vandalism, or storm damage—plus how to speed up the replacement.",
    keywords: [
      "emergency board up DC",
      "emergency board up service",
      "storefront glass repair Washington DC",
      "commercial glass repair DC",
    ],
    sections: [
      {
        h2: "First 10 minutes: make the site safe",
        paragraphs: [
          "Treat broken storefront glass as a safety and liability event. Keep staff and customers away from the opening and any glass fragments.",
          "If you can, take quick photos for documentation (inside and outside). This helps speed up the right replacement plan.",
        ],
        bullets: [
          "Block off the area and post a temporary warning",
          "Avoid sweeping glass into public walkways",
          "Save any paperwork or previous glass invoices (if available)",
        ],
      },
      {
        h2: "When board-up is the right move",
        paragraphs: [
          "Board-up is used to secure the opening when the correct replacement glass can’t be installed immediately. It reduces risk and helps you reopen safely.",
          "For many DC storefronts, the fastest path is: board-up now, measure/document the same visit, then schedule the permanent glass install when the correct glass is ready.",
        ],
      },
      {
        h2: "How to get a faster estimate",
        paragraphs: [
          "If you want pricing quickly, share the site address, clear photos, and whether it’s an after-hours emergency. If the glass is in a high-traffic area, mention that too.",
        ],
        bullets: [
          "Photo of the full opening (for size context)",
          "Close-up photo of any etching/markings",
          "Notes on business hours and access constraints",
        ],
      },
    ],
    relatedServiceSlugs: ["emergency-board-up", "commercial-storefront", "commercial-glass-replacement"],
    relatedLocationSlugs: ["dc"],
    authorityLinks: [
      { label: "OSHA safety guidance", url: "https://www.osha.gov/walking-working-surfaces" },
    ],
  },
  {
    slug: "storefront-glass-repair-cost-guide",
    title: "Storefront glass repair cost: what affects pricing (DC, NY, VA, Philadelphia)",
    dateISO: "2026-03-17",
    excerpt:
      "A decision-focused cost guide for commercial storefront repairs: what changes the price, what to prepare, and how to avoid delays.",
    keywords: [
      "storefront glass repair cost",
      "commercial glass replacement near me",
      "storefront glass replacement",
    ],
    sections: [
      {
        h2: "Why storefront glass prices vary so much",
        paragraphs: [
          "Two storefronts can look identical but require different glass make-ups, lead times, and handling. That’s why quick estimates need good photos and on-site measurement.",
        ],
        bullets: [
          "Glass type (tempered vs laminated)",
          "Panel size and thickness",
          "Access (loading dock, lifts, after-hours rules)",
          "Emergency vs scheduled work",
        ],
      },
      {
        h2: "How to reduce downtime",
        paragraphs: [
          "If the right replacement glass isn’t available immediately, emergency board-up can keep the business secure while the correct glass is ordered.",
          "For multi-site managers, standardizing glass types and hardware reduces future delays.",
        ],
      },
      {
        h2: "What to share for the fastest quote",
        paragraphs: [
          "Send photos from both sides, confirm the city/location, and tell us if it’s a retail entrance (high traffic) or an interior glazed panel.",
        ],
      },
    ],
    relatedServiceSlugs: ["commercial-storefront", "commercial-glass-replacement", "emergency-board-up"],
    relatedLocationSlugs: ["dc", "ny", "virginia", "philadelphia"],
    authorityLinks: [
      { label: "National Glass Association resources", url: "https://www.glass.org/" },
    ],
  },
  {
    slug: "commercial-glass-vs-residential",
    title: "Commercial glass vs residential glass: what’s different and why it matters",
    dateISO: "2026-03-17",
    excerpt:
      "Commercial glass work is often code-driven, higher-traffic, and more schedule-sensitive. Here’s what changes and how to plan repairs.",
    keywords: [
      "commercial glass repair",
      "commercial glass replacement",
      "storefront glass repair",
    ],
    sections: [
      {
        h2: "Safety and usage drive commercial requirements",
        paragraphs: [
          "Commercial spaces have different traffic patterns, liability exposure, and operational constraints. The right glass selection is about safety and function—not just appearance.",
        ],
      },
      {
        h2: "Scheduling is often the hidden constraint",
        paragraphs: [
          "Commercial repairs frequently need coordination: tenant hours, delivery windows, security rules, and documentation for managers.",
        ],
        bullets: [
          "After-hours installs to reduce downtime",
          "Clear estimates and communication for approvals",
          "Temporary security (board-up) when needed",
        ],
      },
      {
        h2: "Quick checklist for faster commercial repairs",
        paragraphs: [
          "If you want a faster plan, start with photos, the site address, and a note on urgency. We can often identify next steps quickly and confirm on-site.",
        ],
      },
    ],
    relatedServiceSlugs: ["commercial-glass-replacement", "commercial-storefront", "emergency-board-up"],
    relatedLocationSlugs: ["dc", "ny", "virginia", "philadelphia"],
    authorityLinks: [
      { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
    ],
  },
  {
    slug: "when-to-replace-storefront-glass",
    title: "When should you replace storefront glass instead of repairing it?",
    dateISO: "2026-03-17",
    excerpt:
      "A practical replacement decision guide for property managers: risk, safety, appearance, and timeline factors that make replacement the smarter choice.",
    keywords: [
      "when to replace storefront glass",
      "storefront glass replacement",
      "commercial glass replacement near me",
    ],
    sections: [
      {
        h2: "Replace when safety or stability is in question",
        paragraphs: [
          "If glass is shattered, unstable, or in a high-traffic area, replacement is usually the right move. Emergency board-up can secure the opening while replacement is scheduled.",
        ],
        bullets: [
          "Shattered or spider-web cracking",
          "Glass movement in the frame",
          "Repeated breakage in the same opening",
        ],
      },
      {
        h2: "Replace when delays are worse than the cost",
        paragraphs: [
          "If the storefront is customer-facing and downtime hurts revenue, a clear replacement plan (and temporary security if needed) often beats repeated short-term fixes.",
        ],
      },
      {
        h2: "How to plan a clean replacement",
        paragraphs: [
          "Share photos and the city location, then we’ll confirm the right glass make-up and a timeline that fits your operating hours.",
        ],
      },
    ],
    relatedServiceSlugs: ["commercial-storefront", "commercial-glass-replacement", "emergency-board-up"],
    relatedLocationSlugs: ["dc", "ny", "virginia", "philadelphia"],
    authorityLinks: [
      { label: "National Glass Association resources", url: "https://www.glass.org/" },
    ],
  },
  {
    slug: "door-hardware-issues-businesses",
    title: "Door hardware issues in businesses: the 7 problems that cause downtime",
    dateISO: "2026-03-17",
    excerpt:
      "A troubleshooting guide for facility teams: what causes doors to slam, stick, fail to latch, or trigger tenant complaints—and what to fix first.",
    keywords: [
      "commercial door repair",
      "door closer replacement",
      "panic bar repair",
      "storefront door hardware",
    ],
    sections: [
      {
        h2: "The highest-impact door problems",
        paragraphs: [
          "Many door issues look small but cause security risks, tenant frustration, and staff workarounds. Fixing hardware early prevents bigger failures later.",
        ],
        bullets: [
          "Door won’t latch (strike alignment)",
          "Closer leaks or door slams",
          "Panic hardware binds or feels loose",
          "Hinges sag and door rubs the frame",
        ],
      },
      {
        h2: "Why commercial fixes are different",
        paragraphs: [
          "Commercial entrances see heavy daily use and often need code-aware adjustments. We focus on reliable operation and clean scheduling for occupied buildings.",
        ],
      },
      {
        h2: "What to share for a faster service visit",
        paragraphs: [
          "Send photos of the hardware, the hinge side, and any labels/markings. Include the address and whether it’s a public entrance.",
        ],
      },
    ],
    relatedServiceSlugs: ["commercial-doors-hardware"],
    relatedLocationSlugs: ["dc", "ny", "virginia", "philadelphia"],
    authorityLinks: [
      { label: "ADA design standards", url: "https://www.ada.gov/law-and-regs/design-standards/" },
    ],
  },
];
