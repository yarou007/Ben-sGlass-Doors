import { site } from "@/content/site";

export function getSiteUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return new URL(fromEnv);
  // Fallback for local dev / placeholder.
  return new URL("https://example.com");
}

export function formatPhoneDisplay(): string {
  return site.contact.phone;
}

export function formatPhoneTel(): string {
  return site.contact.phoneTel;
}
