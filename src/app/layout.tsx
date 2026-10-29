import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const siteUrl = "https://www.sbllawfirm.my.id"; // Sesuaikan dengan domain resmi Anda

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SBL Law Firm | Kantor Advokat & Konsultan Hukum SCBD Jakarta",
    template: "%s | SBL Law Firm Jakarta",
  },
  description:
    "Firma hukum korporasi dan litigasi terkemuka di Jakarta SCBD. Spesialisasi penanganan sengketa perdata bisnis, pembelaan pidana korporasi, kepailitan & PKPU, dan audit hukum.",
  keywords: [
    "advokat jakarta",
    "kantor hukum scbd",
    "pengacara perdata bisnis",
    "litigasi pidana korporasi",
    "pengacara kepailitan pkpu",
    "law firm jakarta",
    "konsultan hukum perusahaan",
    "legal due diligence indonesia",
  ],
  authors: [{ name: "SBL Law Firm" }],
  creator: "SBL Law Firm",
  publisher: "SBL Law Firm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "SBL Law Firm | Kantor Advokat & Konsultan Hukum SCBD Jakarta",
    description:
      "Mitra yuridis tepercaya untuk sengketa litigasi kompleks, restrukturisasi bisnis, dan kepatuhan korporasi di Indonesia.",
    url: siteUrl,
    siteName: "SBL Law Firm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SBL Law Firm Jakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "SBL Law Firm",
    image: `${siteUrl}/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+622152897700",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Menara Sudirman Lt. 18, Jl. Jend. Sudirman Kav. 60, SCBD",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12190",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2297298,
      longitude: 106.8042453,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body className="antialiased bg-[#121316] text-[#1E232A]">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}