import Link from "next/link";
import { site } from "@/content/site";
import { formatPhoneTel } from "@/lib/siteUrl";

export function Header() {
  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-gray-900">
          {site.brand.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
          <Link className="hover:text-gray-900" href="/services">
            Services
          </Link>
          <Link className="hover:text-gray-900" href="/locations">
            Locations
          </Link>
          <Link className="hover:text-gray-900" href="/contact">
            Contact
          </Link>
        </nav>

        <a
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href={`tel:${formatPhoneTel()}`}
        >
          Call {site.contact.phone}
        </a>
      </div>
    </header>
  );
}
