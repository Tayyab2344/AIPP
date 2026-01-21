import Link from 'next/link';
import { SITE_CONFIG, BRAND_COLORS } from '@/lib/constants';
import { Mail, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

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
                        <div className="flex flex-wrap gap-5 text-stone-400">
                            <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors" title="LinkedIn">
                                <Linkedin suppressHydrationWarning size={20} />
                            </a>
                            <a href={SITE_CONFIG.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors" title="X (Twitter)">
                                <Twitter suppressHydrationWarning size={20} />
                            </a>
                            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors" title="Instagram">
                                <Instagram suppressHydrationWarning size={20} />
                            </a>
                            <a href={SITE_CONFIG.social.discord} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors" title="Discord">
                                <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.751 11.751 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.006 14.006 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                                </svg>
                            </a>
                            <a href={SITE_CONFIG.social.substack} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors" title="Substack">
                                <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                                </svg>
                            </a>
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
                                <Mail suppressHydrationWarning size={16} className="text-[var(--primary)]" />
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.email}</a>
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
