import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

import { SITE_CONFIG } from "@/lib/constants";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aipp.org.pk'),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Political Praxis",
    "Women's Political Leadership",
    "Strategic Intellect",
    "Gender-Responsive Governance",
    "Athena Institute for Political Praxis",
    "Political Transformation",
    "Think Tank Pakistan",
    "AIPP Pakistan",
    "Women in Politics",
    "Policy Innovation",
    "Political Strategy"
  ],
  authors: [{ name: 'Athena Institute for Political Praxis' }],
  creator: 'Athena Institute',
  publisher: 'Athena Institute',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: 'https://www.aipp.org.pk',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/hero_hijab_niqab.png',
        width: 1200,
        height: 630,
        alt: 'AIPP Strategic Leadership - Advancing Women\'s Strategic Intellect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: '@aipp_institute',
    images: ['/images/hero_hijab_niqab.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.aipp.org.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://www.aipp.org.pk/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Publications",
        "item": "https://www.aipp.org.pk/publications"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
