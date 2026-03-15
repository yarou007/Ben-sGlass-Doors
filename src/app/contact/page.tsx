import type { Metadata } from "next";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { formatPhoneTel } from "@/lib/siteUrl";
import { PartnerLinks } from "@/components/PartnerLinks";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Call 703-244-0559 for commercial storefront, windows, and doors & hardware service in DC, NY, Washington Metro, and Philadelphia.",
  path: "/contact",
  keywords: ["commercial glass phone", "storefront quote"],
});

export default function ContactPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Fast response for commercial storefront, window glass, and doors &
          hardware.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-black/5 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">Call now</h2>
            <p className="mt-2 text-sm text-gray-600">
              Phone: <span className="font-medium text-gray-900">{site.contact.phone}</span>
            </p>
            <a
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 sm:w-auto"
              href={`tel:${formatPhoneTel()}`}
            >
              Call {site.contact.phone}
            </a>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900">Service areas</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {site.serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>

          <PartnerLinks />
        </div>
      </Container>
    </div>
  );
}
