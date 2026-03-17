import Link from "next/link";
import { site } from "@/content/site";
import { formatPhoneTel } from "@/lib/siteUrl";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="font-semibold text-gray-900">{site.brand.name}</div>
          <p className="mt-2 text-sm text-gray-600">{site.brand.tagline}</p>
          <p className="mt-4 text-sm text-gray-600">
            Phone:{" "}
            <a className="font-medium text-gray-900" href={`tel:${formatPhoneTel()}`}>
              {site.contact.phone}
            </a>
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-900">Pages</div>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <Link className="hover:text-gray-900" href="/services">
              Services
            </Link>
            <Link className="hover:text-gray-900" href="/locations">
              Locations
            </Link>
            <Link className="hover:text-gray-900" href="/service-areas">
              Service areas
            </Link>
            <Link className="hover:text-gray-900" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-gray-900" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-900">Service areas</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {site.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500 sm:px-6">
          © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
