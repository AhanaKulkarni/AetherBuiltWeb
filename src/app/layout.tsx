import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F9F8F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.heroSubheadline,
  keywords: [
    "AetherBuilt OS",
    "AetherBuilt",
    "Manufacturing Operating System",
    "Factory OS",
    "Smart Factory Software",
    "AI Manufacturing",
    "Industrial Operations Platform",
    "Shop Floor Management",
    "Machine Telemetry",
    "Preventative Maintenance",
    "Production Tracking",
    "Aetheron.AI Technologies",
  ],
  authors: [{ name: SITE_CONFIG.company.legalName }],
  creator: SITE_CONFIG.company.legalName,
  publisher: SITE_CONFIG.company.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.heroSubheadline,
    images: [
      {
        url: "/images/products/aetherbuilt-dashboard-clean.jpg",
        width: 1200,
        height: 630,
        alt: "AetherBuilt OS - Unified Manufacturing Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.heroSubheadline,
    images: ["/images/products/aetherbuilt-dashboard-clean.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AetherBuilt OS",
    operatingSystem: "Cloud / Web / Tablet",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description: SITE_CONFIG.heroSubheadline,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.company.legalName,
      url: SITE_CONFIG.aetheronUrl,
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F9F8F4] text-[#252B33] antialiased selection:bg-[#FED7AA] selection:text-[#1F2937]">
        <Navbar />
        <main id="main-content" className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
