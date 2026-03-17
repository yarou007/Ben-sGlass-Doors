import Link from "next/link";
import type { Location } from "@/content/site";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="rounded-lg border border-black/5 bg-white p-5 hover:border-black/10"
    >
      <div className="text-base font-semibold text-gray-900">{location.name}</div>
      <p className="mt-2 text-sm text-gray-600">
        Storefront glass repair, emergency board-up, doors & hardware.
      </p>
    </Link>
  );
}
