"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { formatPhoneTel } from "@/lib/siteUrl";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-black/5 sm:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <Link
            href="/"
            className="font-semibold tracking-tight text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            {site.brand.name}
          </Link>
        </div>

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

      <div
        id="mobile-nav"
        className={
          isOpen
            ? "border-t border-black/5 bg-white sm:hidden"
            : "hidden sm:hidden"
        }
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <Link className="hover:text-gray-900" href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link className="hover:text-gray-900" href="/locations" onClick={() => setIsOpen(false)}>
              Locations
            </Link>
            <Link className="hover:text-gray-900" href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
