import type { Metadata, Viewport } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/header";
import Footer from "@/components/footer";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Metadata (Healthcare SEO Optimized)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.drsonamtyagi.com"), // 🔥 replace with actual domain

  title: {
    default:
      "Dr. Sonam Tyagi | General & Bariatric Surgeon in Delhi",
    template: "%s | Dr. Sonam Tyagi",
  },

  description:
    "Dr. Sonam Tyagi is a highly skilled General and Bariatric Surgeon in Delhi, currently consulting at The Clinics, G32. विशेषज्ञ वजन घटाने और सर्जिकल उपचार के लिए भरोसेमंद नाम।",

  keywords: [
    "Dr Sonam Tyagi",
    "Bariatric Surgeon Delhi",
    "Weight Loss Surgery Delhi",
    "General Surgeon Delhi",
    "Best Bariatric Surgeon in Delhi",
    "The Clinics G32 Delhi",
    "Obesity Surgery Delhi",
  ],

  authors: [{ name: "Dr. Sonam Tyagi" }],
  creator: "Dr. Sonam Tyagi",
  publisher: "Dr. Sonam Tyagi",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Dr. Sonam Tyagi | Expert Bariatric Surgeon in Delhi",
    description:
      "Consult Dr. Sonam Tyagi at The Clinics, G32, New Delhi for advanced bariatric and general surgical care.",
    url: "https://www.drsonamtyagi.com",
    siteName: "Dr. Sonam Tyagi Clinic",
    images: [
      {
        url: "/og-doctor.jpg", // 🔥 add doctor image
        width: 1200,
        height: 630,
        alt: "Dr. Sonam Tyagi - Bariatric Surgeon Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Sonam Tyagi | Bariatric Surgeon Delhi",
    description:
      "Advanced weight loss and general surgery by Dr. Sonam Tyagi at The Clinics, G32, New Delhi.",
    images: ["/og-doctor.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Dr. Sonam Tyagi Clinic",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${raleway.variable} antialiased bg-white text-gray-900`}
      >
        {/* Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-black text-white px-4 py-2 z-50"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />

        {/* Structured Data (Schema.org for Doctor SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Sonam Tyagi",
              medicalSpecialty: "Bariatric Surgery",
              description:
                "Experienced General and Bariatric Surgeon in Delhi specializing in weight loss surgery.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Delhi",
                addressCountry: "India",
              },
              worksFor: {
                "@type": "MedicalOrganization",
                name: "The Clinics",
              },
              url: "https://www.drsonamtyagi.com",
            }),
          }}
        />
      </body>
    </html>
  );
}