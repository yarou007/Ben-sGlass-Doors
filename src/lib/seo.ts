import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

export function buildRootMetadata(): Metadata {
  const url = getSiteUrl();

  return {
    metadataBase: url,
    title: {
      default: site.seo.defaultTitle,
      template: `%s | ${site.brand.name}`,
    },
    description: site.seo.defaultDescription,
    keywords: [...site.seo.siteKeywords, ...site.serviceAreas],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: site.seo.defaultTitle,
      description: site.seo.defaultDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.defaultTitle,
      description: site.seo.defaultDescription,
    },
  };
}

export function buildPageMetadata(params: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = getSiteUrl();
  const canonical = params.path ? new URL(params.path, url) : url;

  return {
    title: params.title,
    description: params.description ?? site.seo.defaultDescription,
    keywords: [
      ...(params.keywords ?? []),
      ...site.seo.siteKeywords,
      ...site.serviceAreas,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: params.title,
      description: params.description ?? site.seo.defaultDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description ?? site.seo.defaultDescription,
    },
  };
}

export function buildLocalBusinessJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.name,
    telephone: site.contact.phone,
    url: url.toString(),
    areaServed: site.serviceAreas,
    knowsAbout: site.seo.siteKeywords,
  };
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  const staticPages = ["/", "/services", "/locations", "/contact"].map(
    (path) => ({
      url: new URL(path, url).toString(),
      lastModified: now,
    }),
  );

  const servicePages = site.services.map((s) => ({
    url: new URL(`/services/${s.slug}`, url).toString(),
    lastModified: now,
  }));

  const locationPages = site.locations.map((l) => ({
    url: new URL(`/locations/${l.slug}`, url).toString(),
    lastModified: now,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
