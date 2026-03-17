import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { formatPhoneTel } from "@/lib/siteUrl";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return buildPageMetadata({ title: "Blog" });

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [...post.keywords, ...site.seo.siteKeywords],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-xs text-gray-500">
            {new Date(post.dateISO).toLocaleDateString()}
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
            {post.title}
          </h1>
          <p className="mt-3 text-gray-600">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              href={`tel:${formatPhoneTel()}`}
            >
              Call Now
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
              href="/contact"
            >
              Get Free Estimate
            </Link>
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  {s.h2}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-3 text-gray-700">
                    {p}
                  </p>
                ))}
                {s.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-black/5 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">Related services</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.relatedServiceSlugs.map((slug) => {
                const svc = site.services.find((s) => s.slug === slug);
                if (!svc) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  >
                    {svc.title}
                  </Link>
                );
              })}
            </div>

            <h3 className="mt-6 text-sm font-semibold text-gray-900">
              Locations
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.relatedLocationSlugs.map((slug) => {
                const loc = site.locations.find((l) => l.slug === slug);
                if (!loc) return null;
                return (
                  <Link
                    key={slug}
                    href={`/locations/${slug}`}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5"
                  >
                    {loc.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {!!post.authorityLinks.length && (
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">Authority references</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                {post.authorityLinks.map((l) => (
                  <li key={l.url}>
                    <a
                      className="text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <Link
              className="text-sm font-medium text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
              href="/blog"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
