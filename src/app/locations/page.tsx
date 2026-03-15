import type { Metadata } from "next";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { LocationCard } from "@/components/LocationCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Locations",
  description:
    "We serve commercial properties across DC, NY, Washington Metro, and Philadelphia. Call 703-244-0559.",
  path: "/locations",
  keywords: ["commercial glass near me", "storefront repair near me"],
});

export default function LocationsPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Locations we serve
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          We focus on commercial storefront, windows, and doors & hardware.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.locations.map((l) => (
            <LocationCard key={l.slug} location={l} />
          ))}
        </div>
      </Container>
    </div>
  );
}
