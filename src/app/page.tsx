import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { LocationCard } from "@/components/LocationCard";
import { formatPhoneTel } from "@/lib/siteUrl";

export default function Home() {
  return (
    <>
      <section className="border-b border-black/5 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Commercial glass repair & storefront service in Washington DC, New York & Virginia
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
                Storefront glass repair in Washington DC, emergency board-up service, and commercial doors & hardware.
                Fast, clean work for property managers and business owners across {site.serviceAreas.join(", ")}.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-medium text-gray-900">24/7 Emergency Service</span> for break-ins and shattered storefront glass
                </li>
                <li>
                  <span className="font-medium text-gray-900">Licensed & insured</span> • commercial-grade materials
                </li>
                <li>
                  <span className="font-medium text-gray-900">Typical response under 45 minutes</span> in the metro area
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                  href={`tel:${formatPhoneTel()}`}
                >
                  Call Now
                </a>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/contact"
                >
                  Get Free Estimate
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-black/5"
                  href="/services"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/5 bg-white">
              <Image
                src="/images/storefront.jpeg"
                alt="Commercial storefront glass and doors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Services
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-600">
                Built for commercial properties: quick turnaround, professional
                finish, and reliable hardware.
              </p>
            </div>
            <Link className="text-sm font-medium text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/50" href="/services">
              All services
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/5 bg-gray-50 py-14">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Locations we serve
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Commercial storefront glass, emergency board-up, and door & hardware service.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.locations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-xl border border-black/5 bg-white p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Need emergency board-up or storefront glass repair?
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Call now for same-day availability and a clear estimate.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                href={`tel:${formatPhoneTel()}`}
              >
                Call Now
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
