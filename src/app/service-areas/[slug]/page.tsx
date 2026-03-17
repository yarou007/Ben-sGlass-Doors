import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { areaPages } from "@/content/areas";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { formatPhoneTel } from "@/lib/siteUrl";

export function generateStaticParams() {
  return areaPages.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) return buildPageMetadata({ title: "Service area" });

  return buildPageMetadata({
    title: area.h1,
    description: area.intro,
    path: `/service-areas/${area.slug}`,
    keywords: [...area.keywords, ...site.seo.siteKeywords],
  });
}

export default function ServiceAreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = areaPages.find((a) => a.slug === params.slug);
  if (!area) return notFound();

  const location = site.locations.find((l) => l.slug === area.citySlug);

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            {area.h1}
          </h1>
          <p className="mt-3 text-gray-600">{area.intro}</p>

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

          <h2 className="mt-10 text-lg font-semibold text-gray-900">
            What we help with in {area.areaName}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {area.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-gray-900">
            Recommended services
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {area.serviceSlugs.map((slug) => {
              const s = site.services.find((svc) => svc.slug === slug);
              if (!s) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                >
                  {s.title}
                </Link>
              );
            })}
          </div>

          {location && (
            <div className="mt-10 rounded-lg border border-black/5 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Serving {location.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{location.intro}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href={`/locations/${location.slug}`}
                >
                  View {location.name} page
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/services"
                >
                  Browse all services
                </Link>
              </div>
            </div>
          )}

          {!!area.authorityLinks.length && (
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">Helpful resources</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                {area.authorityLinks.map((l) => (
                  <li key={l.url}>
                    <a
                      className="text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
