import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Commercial storefront, window, and door & hardware services. Call 703-244-0559 to schedule.",
  path: "/services",
  keywords: ["commercial glass services", "storefront services"],
});

export default function ServicesPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Commercial services
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Built for retail and commercial properties: clean installs, reliable
          hardware, and durable glass.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
            href="/service-areas"
          >
            View service areas
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
            href="/blog"
          >
            Read guides
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </div>
  );
}
