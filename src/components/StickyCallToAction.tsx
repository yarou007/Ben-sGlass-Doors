"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { formatPhoneTel } from "@/lib/siteUrl";

export function StickyCallToAction() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <a
          href={`tel:${formatPhoneTel()}`}
          className="inline-flex flex-1 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          aria-label={`Call now ${site.contact.phone}`}
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-md border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black/5"
          aria-label="Get a free estimate"
        >
          Get Free Estimate
        </Link>
      </div>
      <div className="px-4 pb-3 text-center text-[12px] leading-4 text-gray-600">
        24/7 emergency board-up • Typical response under 45 minutes
      </div>
    </div>
  );
}
