import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { areaPages } from "@/content/areas";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Areas",
  description:
    "Long-tail coverage pages for neighborhoods and ZIP codes across Washington DC, New York, Virginia, and Philadelphia. Emergency board-up and storefront glass repair.",
  path: "/service-areas",
  keywords: [
    "commercial glass replacement near me",
    "emergency board up service",
    "storefront glass repair Washington DC",
  ],
});

export default function ServiceAreasIndexPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Neighborhood & ZIP service areas
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          These pages are designed to help property managers and business owners find the right commercial service fast: storefront glass repair, emergency board-up, and commercial door hardware.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areaPages.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="rounded-lg border border-black/5 bg-white p-5 hover:border-black/10"
            >
              <div className="text-base font-semibold text-gray-900">{a.areaName}</div>
              <p className="mt-2 text-sm text-gray-600">{a.intro}</p>
              <div className="mt-3 text-xs font-medium text-gray-700">View details →</div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
