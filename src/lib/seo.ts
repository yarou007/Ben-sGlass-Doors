import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { areaPages } from "@/content/areas";
import { blogPosts } from "@/content/blog";
import { getSiteUrl } from "@/lib/siteUrl";

function expandKeywords(input: string[]): string[] {
  const base = input
    .map((k) => k.trim())
    .filter(Boolean);

  const cities = site.serviceAreas;
  const out = new Set<string>();

  for (const k of base) {
    out.add(k);

    // Simple semantic variations for intent.
    if (!k.toLowerCase().includes("near me")) out.add(`${k} near me`);
    if (!k.toLowerCase().includes("24/7") && k.toLowerCase().includes("emergency")) {
      out.add(`24/7 ${k}`);
    }

    // Light geo modifiers.
    for (const city of cities) {
      if (!k.toLowerCase().includes(city.toLowerCase())) {
        out.add(`${k} ${city}`);
      }
    }
  }

  return Array.from(out);
}

export function buildRootMetadata(): Metadata {
  const url = getSiteUrl();
  const ogImage = new URL("/images/storefront.jpeg", url);

  return {
    metadataBase: url,
    title: {
      default: site.seo.defaultTitle,
      template: `%s | ${site.brand.name}`,
    },
    description: site.seo.defaultDescription,
    keywords: expandKeywords([...site.seo.siteKeywords, ...site.serviceAreas]),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: site.seo.defaultTitle,
      description: site.seo.defaultDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Commercial storefront glass and doors",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.defaultTitle,
      description: site.seo.defaultDescription,
      images: [ogImage.toString()],
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
  const ogImage = new URL("/images/storefront.jpeg", url);

  return {
    title: params.title,
    description: params.description ?? site.seo.defaultDescription,
    keywords: expandKeywords([
      ...(params.keywords ?? []),
      ...site.seo.siteKeywords,
      ...site.serviceAreas,
    ]),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: params.title,
      description: params.description ?? site.seo.defaultDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Commercial storefront glass and doors",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description ?? site.seo.defaultDescription,
      images: [ogImage.toString()],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  const url = getSiteUrl();
  const base = url.toString();

  const serviceItems = site.services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      url: new URL(`/services/${s.slug}`, url).toString(),
    },
  }));

  const served = site.locations.map((l) => ({
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: l.addressLocality,
      addressRegion: l.addressRegion,
      addressCountry: l.addressCountry,
    },
    name: l.name,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        url: base,
        name: site.brand.name,
      },
      {
        "@type": "Organization",
        "@id": `${base}#organization`,
        name: site.brand.name,
        url: base,
        telephone: site.contact.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.contact.phone,
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["en"],
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "Glazier"],
        "@id": `${base}#localbusiness`,
        name: site.brand.name,
        url: base,
        telephone: site.contact.phone,
        description: site.seo.defaultDescription,
        areaServed: served,
        knowsAbout: site.seo.siteKeywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Commercial Glass & Door Services",
          itemListElement: serviceItems,
        },
      },
    ],
  };
}

export function buildLocationJsonLd(locationSlug: string) {
  const url = getSiteUrl();
  const base = url.toString();
  const location = site.locations.find((l) => l.slug === locationSlug);
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Glazier"],
    name: `${site.brand.name} – ${location.name}`,
    url: new URL(`/locations/${location.slug}`, url).toString(),
    telephone: site.contact.phone,
    description: location.intro,
    parentOrganization: {
      "@id": `${base}#organization`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      addressCountry: location.addressCountry,
    },
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    knowsAbout: [...location.localKeywords, ...site.seo.siteKeywords],
  };
}

export function buildServiceJsonLd(serviceSlug: string) {
  const url = getSiteUrl();
  const service = site.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: site.serviceAreas,
    provider: {
      "@type": ["LocalBusiness", "Glazier"],
      name: site.brand.name,
      telephone: site.contact.phone,
      url: url.toString(),
    },
    url: new URL(`/services/${service.slug}`, url).toString(),
  };
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  const staticPages = ["/", "/services", "/locations", "/service-areas", "/blog", "/contact"].map(
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

  const areaServicePages = areaPages.map((a) => ({
    url: new URL(`/service-areas/${a.slug}`, url).toString(),
    lastModified: now,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: new URL(`/blog/${p.slug}`, url).toString(),
    lastModified: now,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...areaServicePages, ...blogPages];
}
