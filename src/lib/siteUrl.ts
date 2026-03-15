import { site } from "@/content/site";

export function getSiteUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return new URL(fromEnv);

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return new URL(`https://${vercelUrl}`);

  const port = (process.env.PORT ?? "3000").trim();
  return new URL(`http://localhost:${port}`);
}

export function formatPhoneDisplay(): string {
  return site.contact.phone;
}

export function formatPhoneTel(): string {
  return site.contact.phoneTel;
}
