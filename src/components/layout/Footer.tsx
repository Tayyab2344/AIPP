import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-black text-[var(--primary)] uppercase tracking-tighter mb-8 block">
                            AIPP
                        </Link>
                        <p className="mt-4 text-slate-400 text-lg leading-relaxed font-medium max-w-md">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center space-x-3 text-slate-300">
                                <Mail size={18} className="text-[var(--primary)]" />
                                <span className="font-bold">{SITE_CONFIG.contact.email}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-300">
                                <Globe size={18} className="text-[var(--primary)]" />
                                <Link href={SITE_CONFIG.contact.linktree} className="font-bold hover:text-[var(--primary)] transition-colors underline decoration-[var(--primary)] underline-offset-4">
                                    linktr.ee/aipp_org
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Framework</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-bold">
                            <li><Link href="/framework" className="hover:text-[var(--primary)] transition-colors uppercase">Research & Policy</Link></li>
                            <li><Link href="/framework" className="hover:text-[var(--primary)] transition-colors uppercase">Strategic Action</Link></li>
                            <li><Link href="/framework" className="hover:text-[var(--primary)] transition-colors uppercase">Public Advocacy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Partner Sites</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-bold">
                            <li>
                                <Link href={SITE_CONFIG.contact.wix} target="_blank" className="hover:text-[var(--primary)] transition-colors uppercase flex items-center group">
                                    Wix Site <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors uppercase">About AIPP</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors uppercase">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} {SITE_CONFIG.name}.</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
