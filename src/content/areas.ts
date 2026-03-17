import type { AuthorityLink } from "@/content/site";

export type AreaPage = {
  slug: string;
  citySlug: "dc" | "ny" | "virginia" | "philadelphia";
  areaName: string;
  postalCode?: string;
  h1: string;
  intro: string;
  bullets: string[];
  serviceSlugs: string[];
  keywords: string[];
  authorityLinks: AuthorityLink[];
};

export const areaPages: AreaPage[] = [
  {
    slug: "washington-dc-20001-storefront-glass-repair",
    citySlug: "dc",
    areaName: "Washington, DC 20001 (Shaw / Downtown North)",
    postalCode: "20001",
    h1: "Storefront glass repair in Washington DC 20001",
    intro:
      "If you manage retail or office properties near Shaw and Downtown DC, broken storefront glass can stop foot traffic fast. We prioritize clean emergency board-up and a clear replacement plan.",
    bullets: [
      "Emergency board-up to secure entrances",
      "Storefront glass replacement planned around business hours",
      "Property-manager friendly updates and documentation",
    ],
    serviceSlugs: ["commercial-storefront", "emergency-board-up", "commercial-glass-replacement"],
    keywords: [
      "storefront glass repair Washington DC 20001",
      "commercial glass repair DC 20001",
      "emergency board up Washington DC 20001",
    ],
    authorityLinks: [
      { label: "National Glass Association resources", url: "https://www.glass.org/" },
    ],
  },
  {
    slug: "washington-dc-20002-emergency-board-up",
    citySlug: "dc",
    areaName: "Washington, DC 20002 (Capitol Hill / Near NE)",
    postalCode: "20002",
    h1: "Emergency board-up service in Washington DC 20002",
    intro:
      "Break-ins and storm damage happen at the worst times. Our emergency board-up service helps DC businesses secure openings quickly, then we handle measurements and scheduling for permanent glass replacement.",
    bullets: [
      "24/7 calls for broken storefronts and windows",
      "Safety-first cleanup and liability reduction",
      "Replacement plan with the right glass make-up",
    ],
    serviceSlugs: ["emergency-board-up", "commercial-glass-replacement", "commercial-storefront"],
    keywords: [
      "emergency board up Washington DC 20002",
      "emergency board up service DC",
      "commercial glass replacement DC 20002",
    ],
    authorityLinks: [
      { label: "OSHA safety guidance", url: "https://www.osha.gov/walking-working-surfaces" },
    ],
  },
  {
    slug: "washington-dc-20007-storefront-glass",
    citySlug: "dc",
    areaName: "Washington, DC 20007 (Georgetown)",
    postalCode: "20007",
    h1: "Storefront glass replacement in Georgetown (20007)",
    intro:
      "High-visibility storefronts need clean finishes and minimal disruption. We coordinate access, protect interiors, and schedule around peak hours when possible.",
    bullets: [
      "Clean installs for high-traffic retail entrances",
      "Accurate measurement and ordering coordination",
      "Door hardware coordination during glass replacement",
    ],
    serviceSlugs: ["commercial-storefront", "commercial-doors-hardware", "commercial-glass-replacement"],
    keywords: [
      "storefront glass repair Washington DC 20007",
      "commercial glass replacement Georgetown",
      "commercial door hardware Georgetown",
    ],
    authorityLinks: [
      { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
    ],
  },
  {
    slug: "new-york-ny-10019-storefront-glass-repair",
    citySlug: "ny",
    areaName: "New York, NY 10019 (Midtown West)",
    postalCode: "10019",
    h1: "Storefront glass repair in Midtown Manhattan (10019)",
    intro:
      "In Midtown, downtime is expensive. We help New York businesses secure damaged glass quickly and schedule replacement installs with clear site communication.",
    bullets: [
      "Emergency board-up + follow-up replacement",
      "Coordination for building access and delivery windows",
      "Commercial-grade materials and clean finishes",
    ],
    serviceSlugs: ["commercial-storefront", "emergency-board-up", "commercial-glass-replacement"],
    keywords: [
      "storefront glass repair New York 10019",
      "commercial glass replacement Midtown",
      "emergency board up NYC 10019",
    ],
    authorityLinks: [
      { label: "National Glass Association resources", url: "https://www.glass.org/" },
    ],
  },
  {
    slug: "brooklyn-ny-11211-commercial-glass-replacement",
    citySlug: "ny",
    areaName: "Brooklyn, NY 11211 (Williamsburg)",
    postalCode: "11211",
    h1: "Commercial glass replacement in Williamsburg (11211)",
    intro:
      "From retail entrances to mixed-use buildings, we replace commercial glass with a focus on safety, cleanup, and a smooth handoff for managers.",
    bullets: [
      "Replace broken glass with the right specs",
      "Schedule installs around tenant and store hours",
      "Clear estimates and documentation",
    ],
    serviceSlugs: ["commercial-glass-replacement", "commercial-storefront", "commercial-doors-hardware"],
    keywords: [
      "commercial glass replacement Brooklyn 11211",
      "storefront glass repair Williamsburg",
      "commercial glass repair near me 11211",
    ],
    authorityLinks: [
      { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
    ],
  },
  {
    slug: "philadelphia-pa-19103-storefront-glass-repair",
    citySlug: "philadelphia",
    areaName: "Philadelphia, PA 19103 (Center City)",
    postalCode: "19103",
    h1: "Storefront glass repair in Center City Philadelphia (19103)",
    intro:
      "For Center City storefronts, we prioritize clean work, protected interiors, and scheduling that reduces downtime. Emergency calls are handled with board-up and a clear replacement plan.",
    bullets: [
      "Storefront glass repair and replacement",
      "Emergency board-up to secure entrances",
      "Door hardware coordination for smoother operation",
    ],
    serviceSlugs: ["commercial-storefront", "emergency-board-up", "commercial-doors-hardware"],
    keywords: [
      "storefront glass repair Philadelphia 19103",
      "commercial glass replacement Center City",
      "emergency board up Philadelphia",
    ],
    authorityLinks: [
      { label: "OSHA safety guidance", url: "https://www.osha.gov/walking-working-surfaces" },
    ],
  },
  {
    slug: "philadelphia-pa-19104-commercial-window-repair",
    citySlug: "philadelphia",
    areaName: "Philadelphia, PA 19104 (University City)",
    postalCode: "19104",
    h1: "Commercial window repair in University City (19104)",
    intro:
      "Cracked panes and failed seals can impact tenant comfort and building appearance. We service commercial window glass with accurate measurements and clean replacement installs.",
    bullets: [
      "Cracked glass and IGU seal failure support",
      "Minimal disruption scheduling",
      "Commercial-grade materials",
    ],
    serviceSlugs: ["commercial-window-repair", "commercial-glass-replacement", "commercial-storefront"],
    keywords: [
      "commercial window glass repair Philadelphia 19104",
      "commercial glass replacement University City",
      "commercial glass repair near me 19104",
    ],
    authorityLinks: [
      { label: "National Glass Association resources", url: "https://www.glass.org/" },
    ],
  },
  {
    slug: "arlington-va-22201-commercial-door-repair",
    citySlug: "virginia",
    areaName: "Arlington, VA 22201",
    postalCode: "22201",
    h1: "Commercial door repair and hardware service in Arlington VA (22201)",
    intro:
      "When doors don’t latch, closers fail, or panic hardware is unreliable, entrances become a security and safety issue. We repair commercial doors and hardware with commercial-grade parts.",
    bullets: [
      "Door closer replacement and tuning",
      "Panic device alignment and service",
      "Hinge/strike adjustments for smooth operation",
    ],
    serviceSlugs: ["commercial-doors-hardware", "commercial-glass-replacement", "commercial-storefront"],
    keywords: [
      "commercial door repair Arlington VA 22201",
      "door closer replacement Arlington",
      "storefront door hardware Arlington",
    ],
    authorityLinks: [
      { label: "ADA design standards", url: "https://www.ada.gov/law-and-regs/design-standards/" },
    ],
  },
  {
    slug: "alexandria-va-22314-emergency-board-up",
    citySlug: "virginia",
    areaName: "Alexandria, VA 22314",
    postalCode: "22314",
    h1: "Emergency board-up service in Alexandria VA (22314)",
    intro:
      "For broken glass emergencies near Old Town Alexandria, we can secure your storefront quickly and help you plan the permanent replacement without guesswork.",
    bullets: [
      "Secure openings fast to reduce risk",
      "Photos + measurements for fast replacement ordering",
      "Clear communication for managers and tenants",
    ],
    serviceSlugs: ["emergency-board-up", "commercial-glass-replacement", "commercial-storefront"],
    keywords: [
      "emergency board up Alexandria VA 22314",
      "commercial glass replacement Alexandria",
      "commercial glass repair near me 22314",
    ],
    authorityLinks: [
      { label: "OSHA safety guidance", url: "https://www.osha.gov/walking-working-surfaces" },
    ],
  },
  {
    slug: "tysons-va-22102-commercial-glass-replacement",
    citySlug: "virginia",
    areaName: "Tysons, VA 22102",
    postalCode: "22102",
    h1: "Commercial glass replacement in Tysons VA (22102)",
    intro:
      "For busy commercial corridors in Tysons, we focus on accurate measurements, clean installs, and scheduling that respects tenant operations and building access rules.",
    bullets: [
      "Replace broken commercial glass quickly",
      "Coordinate access and delivery windows",
      "Plan follow-up installs after emergency board-up",
    ],
    serviceSlugs: ["commercial-glass-replacement", "emergency-board-up", "commercial-window-repair"],
    keywords: [
      "commercial glass replacement Tysons VA 22102",
      "commercial glass repair Virginia",
      "emergency board up Tysons",
    ],
    authorityLinks: [
      { label: "ICC building code reference", url: "https://www.iccsafe.org/" },
    ],
  },
];
