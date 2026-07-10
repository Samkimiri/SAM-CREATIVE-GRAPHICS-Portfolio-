import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Branding & Graphic Design Agency Nairobi | SAM CREATIVE GRAPHICS BRAND AGENCY",
    template: "%s | SAM CREATIVE GRAPHICS BRAND AGENCY",
  },
  description:
    "SAM CREATIVE GRAPHICS BRAND AGENCY is a Nairobi design agency creating brand identities, campaign graphics, packaging, print materials and websites for businesses across Kenya and East Africa.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "SAM CREATIVE GRAPHICS BRAND AGENCY",
    "Brand design Nairobi",
    "Logo design Kenya",
    "Graphic design agency Kenya",
    "Social media design Nairobi",
  ],
  openGraph: {
    title: "SAM CREATIVE GRAPHICS BRAND AGENCY",
    description:
      "Nairobi brand design agency creating brand identities, campaign graphics, packaging, print materials and websites.",
    url: siteUrl,
    siteName: "SAM CREATIVE GRAPHICS BRAND AGENCY",
    images: [{ url: "/images/logo.jpg", width: 1080, height: 1080, alt: "SAM CREATIVE GRAPHICS BRAND AGENCY logo" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Graphic Design Agency Nairobi | SAM CREATIVE GRAPHICS BRAND AGENCY",
    description: "Premium brand design agency in Nairobi, Kenya.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
