SEO-first commercial services website built with [Next.js](https://nextjs.org) + Tailwind.

## Getting Started

Node.js: this project is set up to work on Node 18.

Install deps and run dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Edit content / SEO / backlinks

Single source of truth:

- `src/content/site.ts`
	- Business name/tagline
	- Phone number (`703-244-0559`)
	- Service areas (DC, NY, Washington Metro, Philadelphia)
	- Services + per-service keywords
	- `partnerLinks` (a safe place to add outbound partner/resource links)

Notes:

- For true **backlinks**, other websites must link to your site. This repo gives you a clean spot to manage **outbound partner links** and your **target keywords**.

## SEO files

- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- JSON-LD LocalBusiness is injected from `src/lib/seo.ts`

## Optional tracking (SEA)

Set any of these environment variables:

- `NEXT_PUBLIC_SITE_URL` (recommended in production, e.g. `https://yourdomain.com`)
- `NEXT_PUBLIC_GA4_ID` (Google Analytics 4, e.g. `G-XXXXXXX`)
- `NEXT_PUBLIC_GTM_ID` (Google Tag Manager, e.g. `GTM-XXXXXXX`)
- `NEXT_PUBLIC_GOOGLE_ADS_ID` (Google Ads, e.g. `AW-XXXXXXXXX`)

## Build

```bash
npm run build
npm run start
```

## Deploy

Works well on Vercel. Make sure to set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings.
