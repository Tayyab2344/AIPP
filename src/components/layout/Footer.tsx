import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    <p suppressHydrationWarning>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
                    <div className="flex space-x-10">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
