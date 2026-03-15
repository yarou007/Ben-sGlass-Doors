import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { formatPhoneTel } from "@/lib/siteUrl";

export function generateStaticParams() {
  return site.locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const location = site.locations.find((l) => l.slug === params.slug);
  if (!location) return buildPageMetadata({ title: "Location" });

  return buildPageMetadata({
    title: `Commercial glass & doors in ${location.name}`,
    description: `Commercial storefront, window glass, and doors & hardware service in ${location.name}. Call ${site.contact.phone}.`,
    path: `/locations/${location.slug}`,
    keywords: [...location.keywords, ...site.seo.siteKeywords],
  });
}

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const location = site.locations.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          {location.name}
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          Commercial storefront, window glass, and doors & hardware service for
          retail spaces, offices, and building entrances.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            href={`tel:${formatPhoneTel()}`}
          >
            Call {site.contact.phone}
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <h2 className="mt-12 text-lg font-semibold text-gray-900">
          Services in {location.name}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </div>
  );
}
