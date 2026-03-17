import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { LocationCard } from "@/components/LocationCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Locations",
  description:
    "We serve commercial properties across Washington DC, New York, Virginia, and Philadelphia. Call 703-244-0559.",
  path: "/locations",
  keywords: ["commercial glass near me", "storefront repair near me"],
});

export default function LocationsPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Locations we serve
            </h1>
            <p className="mt-3 max-w-2xl text-gray-600">
              Commercial service coverage for storefront glass repair, emergency
              board-up, and doors & hardware. If you manage multiple sites,
              we’ll help you standardize repairs and scheduling across locations.
            </p>

            <div className="mt-6 rounded-lg border border-black/5 bg-white p-5">
              <div className="text-sm font-semibold text-gray-900">
                Service areas
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Serving {site.serviceAreas.join(", ")}. Ask about availability
                for nearby commercial corridors.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/service-areas"
                >
                  Neighborhood pages
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/blog"
                >
                  Guides
                </Link>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/5 bg-white">
            <Image
              src="/images/storefront.jpeg"
              alt="Commercial storefront service area coverage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.locations.map((l) => (
            <LocationCard key={l.slug} location={l} />
          ))}
        </div>
      </Container>
    </div>
  );
}
