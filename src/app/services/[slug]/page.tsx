import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
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

  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              {service.title}
            </h1>
            <p className="mt-4 text-gray-600">{service.description}</p>

            <div className="mt-6 rounded-lg border border-black/5 bg-white p-6">
              <h2 className="text-sm font-semibold text-gray-900">
                Typical work requests
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Broken or cracked glass replacement</li>
                <li>Door alignment, closers, and panic hardware</li>
                <li>Operational adjustments for smooth open/close</li>
                <li>Replace worn seals, handles, or damaged components</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Need help identifying what you have? Send photos via the contact
                page and we’ll guide the next step.
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
                  Request service
                </Link>
              </div>
            </div>

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
                Request service
              </Link>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">Service areas</h2>
              <p className="mt-2 text-sm text-gray-600">
                Available in {site.serviceAreas.join(", ")}.
              </p>
            </div>
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
                <li>On-site assessment & accurate measurements</li>
                <li>Commercial-grade materials and hardware</li>
                <li>Cleanup-focused installs and safe work areas</li>
                <li>Documentation-ready communication for property managers</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
