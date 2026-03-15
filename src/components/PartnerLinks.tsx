import { site } from "@/content/site";

export function PartnerLinks() {
  if (!site.partnerLinks.length) return null;

  return (
    <section className="rounded-lg border border-black/5 bg-white p-6">
      <h2 className="text-lg font-semibold text-gray-900">Partner links</h2>
      <p className="mt-1 text-sm text-gray-600">
        Add/remove these in <code className="font-mono">src/content/site.ts</code>.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {site.partnerLinks.map((l) => (
          <li key={l.url}>
            <a
              className="text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
              href={l.url}
              target="_blank"
              rel={l.rel ?? "noopener noreferrer"}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
