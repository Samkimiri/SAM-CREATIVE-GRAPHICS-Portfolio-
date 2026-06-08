import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sam-creative-graphics.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sam Creative Graphics | Brand Design Agency in Nairobi",
    template: "%s | Sam Creative Graphics",
  },
  description:
    "Sam Creative Graphics is a Nairobi brand design agency for startups, SMEs, corporates, NGOs, and East African businesses.",
  keywords: [
    "Sam Creative Graphics",
    "Brand design Nairobi",
    "Logo design Kenya",
    "Graphic design agency Kenya",
    "Social media design Nairobi",
  ],
  openGraph: {
    title: "Sam Creative Graphics",
    description: "Where Creativity Meets Strategy. Premium brand design, campaigns, print, packaging, UI/UX, and web design.",
    url: siteUrl,
    siteName: "Sam Creative Graphics",
    images: [{ url: "/images/logo.jpg", width: 1080, height: 1080, alt: "Sam Creative Graphics logo" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Creative Graphics",
    description: "Premium brand design agency in Nairobi, Kenya.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
