import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { blogPosts } from "@/content/blog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Commercial Glass & Door Resources",
  description:
    "Backlink-friendly guides on emergency board-up, storefront glass repair costs, commercial vs residential glass, and door hardware issues.",
  path: "/blog",
  keywords: [
    "emergency board up DC",
    "storefront glass repair cost",
    "commercial glass replacement near me",
    "commercial door repair",
  ],
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Guides for property managers & business owners
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          Practical checklists and cost guides designed to help you act fast on broken glass, board-up emergencies, and door hardware problems.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-lg border border-black/5 bg-white p-5 hover:border-black/10"
            >
              <div className="text-base font-semibold text-gray-900">{p.title}</div>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <div className="mt-3 text-xs text-gray-500">{new Date(p.dateISO).toLocaleDateString()}</div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
