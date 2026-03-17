import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tracking } from "@/components/Tracking";
import { StickyCallToAction } from "@/components/StickyCallToAction";
import { buildLocalBusinessJsonLd, buildRootMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="en">
      <body className="min-h-screen bg-white pb-20 text-gray-900 antialiased sm:pb-0">
        <Tracking />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallToAction />
      </body>
    </html>
  );
}
