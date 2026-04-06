import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import LenisProvider from "@/components/providers/LenisProvider";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://skillscout.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SkillScout | AI Chatbots That Access Your Systems",
  description:
    "Deploy AI chatbots on WhatsApp & Telegram that can access files, run terminal commands, and automate your business workflows.",
  keywords: [
    "AI chatbot",
    "automation",
    "WhatsApp bot",
    "Telegram bot",
    "business automation",
  ],
  openGraph: {
    title: "SkillScout | AI Chatbots That Access Your Systems",
    description:
      "Deploy AI chatbots on WhatsApp & Telegram that can access files, run terminal commands, and automate your business workflows.",
    url: BASE_URL,
    siteName: "SkillScout",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillScout | AI Chatbots That Access Your Systems",
    description:
      "Deploy AI chatbots on WhatsApp & Telegram that can access files, run terminal commands, and automate your business workflows.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-muted antialiased">
        <ScrollProgress />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SkillScout",
              description:
                "AI chatbot automation for WhatsApp & Telegram with file access and terminal commands",
              url: BASE_URL,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "199",
                highPrice: "499",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "SkillScout",
                url: BASE_URL,
              },
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
