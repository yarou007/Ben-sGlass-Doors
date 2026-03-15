import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-lg border border-black/5 bg-white hover:border-black/10"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <div className="text-base font-semibold text-gray-900">{service.title}</div>
        <p className="mt-2 text-sm text-gray-600">{service.short}</p>
      </div>
    </Link>
  );
}
