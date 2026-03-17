import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { buildLocationJsonLd, buildPageMetadata } from "@/lib/seo";
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
    description: `Storefront glass repair, emergency board-up service, and commercial doors & hardware in ${location.name}. Call ${site.contact.phone}.`,
    path: `/locations/${location.slug}`,
    keywords: [...location.keywords, ...location.localKeywords, ...site.seo.siteKeywords],
  });
}

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const location = site.locations.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  const jsonLd = buildLocationJsonLd(location.slug);

  return (
    <div className="py-12">
      {jsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Commercial glass repair in {location.name}
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          {location.intro}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {location.localKeywords.slice(0, 3).map((k) => (
            <span
              key={k}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            href={`tel:${formatPhoneTel()}`}
          >
            Call Now
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
            href="/contact"
          >
            Get Free Estimate
          </Link>
        </div>

        <div className="mt-4 text-xs text-gray-600">
          24/7 emergency board-up available • Typical response under 45 minutes (metro area)
        </div>

        <h2 className="mt-12 text-lg font-semibold text-gray-900">
          Services in {location.name}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-black/5 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Fast help for broken glass in {location.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            If your storefront is damaged, call now to secure the opening and plan the right replacement. Share photos for the fastest estimate.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              href={`tel:${formatPhoneTel()}`}
            >
              Call Now
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
              href="/services/emergency-board-up"
            >
              Emergency board-up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
