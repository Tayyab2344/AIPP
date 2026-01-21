'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');

    return (
        <>
            {!isAdminPage && <Navbar />}
            <main className={`flex-grow overflow-x-hidden ${!isAdminPage ? 'pt-20' : ''}`}>
                {children}
            </main>
            {!isAdminPage && <Footer />}
            {!isAdminPage && <ScrollToTop />}
        </>
    );
}
