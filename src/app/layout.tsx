import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { headers } from "next/headers";

import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: ["Political Praxis", "Women Leadership", "Research", "Advocacy", "Political Strategy"],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Hide navbar and footer on admin login page
  const isAdminLogin = pathname.includes("/admin/login");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col overflow-x-hidden`}>
        {!isAdminLogin && <Navbar />}
        <main className={`flex-grow overflow-x-hidden ${!isAdminLogin ? 'pt-20' : ''}`}>
          {children}
        </main>
        {!isAdminLogin && <Footer />}
        {!isAdminLogin && <ScrollToTop />}
      </body>
    </html>
  );
}
