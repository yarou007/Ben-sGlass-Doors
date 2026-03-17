import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";
import { Container } from "@/components/Container";
import { formatPhoneTel } from "@/lib/siteUrl";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = site.services.find((s) => s.slug === params.slug);
  if (!service) return buildPageMetadata({ title: "Service" });

  return buildPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords, ...site.seo.siteKeywords],
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = site.services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const jsonLd = buildServiceJsonLd(service.slug);

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
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              {service.h1 ?? service.title}
            </h1>
            <p className="mt-4 text-gray-600">{service.heroSubheading}</p>
            <p className="mt-3 text-sm text-gray-600">{service.description}</p>

            <div className="mt-6 rounded-lg border border-black/5 bg-white p-6">
              <h2 className="text-sm font-semibold text-gray-900">Common requests</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {service.typicalRequests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                For accurate pricing, share photos, the site address, and any urgency. We’ll confirm next steps and timeline.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/locations"
                >
                  Check coverage
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/contact"
                >
                  Get Free Estimate
                </Link>
              </div>
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

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">Service areas</h2>
              <p className="mt-2 text-sm text-gray-600">
                Available in {site.serviceAreas.join(", ")}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                >
                  Neighborhood pages
                </Link>
              </div>
            </div>

            {!!service.authorityLinks.length && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Relevant standards & resources</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Useful references for commercial glass and door work.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                  {service.authorityLinks.map((l) => (
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

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/5">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-6 rounded-lg border border-black/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">
                What we handle
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {service.whatWeHandle.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-black/5 bg-white p-6">
              <h2 className="text-sm font-semibold text-gray-900">FAQs</h2>
              <div className="mt-4 space-y-4">
                {service.faqs.map((f) => (
                  <div key={f.q}>
                    <div className="text-sm font-medium text-gray-900">{f.q}</div>
                    <p className="mt-1 text-sm text-gray-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
