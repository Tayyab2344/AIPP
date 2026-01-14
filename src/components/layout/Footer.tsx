import Link from 'next/link';
import { SITE_CONFIG, BRAND_COLORS } from '@/lib/constants';
import { Mail, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#2D241E] text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-8">
                        <Link href="/" className="text-3xl font-serif text-[var(--primary)] tracking-tight">
                            AIPP
                        </Link>
                        <p className="text-stone-400 text-sm leading-relaxed font-medium">
                            A space for research, leadership development, and advocacy that reimagines politics as an inclusive and intellectually grounded pursuit.
                        </p>
                        <div className="flex space-x-6 text-stone-400">
                            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Our Work */}
                    <div>
                        <h4 className="text-[var(--primary)] font-bold uppercase tracking-widest text-[11px] mb-8">Our Work</h4>
                        <ul className="space-y-4 text-sm text-stone-300 font-medium">
                            <li><Link href="/research-policy-innovation" className="hover:text-white transition-colors">Research & Policy (RPI)</Link></li>
                            <li><Link href="/strategic-action-simulation" className="hover:text-white transition-colors">Strategic Action (SAS)</Link></li>
                            <li><Link href="/communications-public-advocacy" className="hover:text-white transition-colors">Public Advocacy (CPA)</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-[var(--primary)] font-bold uppercase tracking-widest text-[11px] mb-8">Resources</h4>
                        <ul className="space-y-4 text-sm text-stone-300 font-medium">
                            <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About AIPP</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-[var(--primary)] font-bold uppercase tracking-widest text-[11px] mb-8">Contact</h4>
                        <div className="space-y-4 text-sm text-stone-300 font-medium">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-[var(--primary)]" />
                                <span>{SITE_CONFIG.contact.email}</span>
                            </div>
                            <div className="pt-4">
                                <Link href="/join" className="inline-block bg-[var(--primary)] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">
                                    Join AIPP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">
                    <p suppressHydrationWarning>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
                    <div className="flex space-x-10">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
