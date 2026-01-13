"use client";

import { ArrowRight, ChevronRight, Download, Mail, Users, BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';

const InsightDetailPage = () => {
    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Breadcrumbs & Header */}
            <header className="pt-24 sm:pt-32 pb-12 bg-[#FBFBFA] border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/insights" className="hover:text-slate-900 transition-colors">Geopolitical Strategy</Link>
                        <ChevronRight size={10} />
                        <span className="text-slate-900">Detail Page</span>
                    </nav>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight max-w-5xl mb-10">
                        The Strategic Necessity of Gender Parity in Transatlantic Diplomatic Missions
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <span>OCTOBER 14, 2023</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                            <span>GEOPOLITICAL STRATEGY</span>
                        </div>
                        <span>ATHENA INSTITUTE</span>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <section className="relative w-full aspect-[21/9] bg-slate-200 overflow-hidden">
                <div className="w-full h-full bg-slate-400 grayscale contrast-125 brightness-75 relative">
                    {/* Placeholder for skyline image */}
                    <img
                        src="/images/insights/detail_hero.jpg"
                        alt="Diplomatic Mission"
                        className="w-full h-full object-cover invisible"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
                </div>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 uppercase tracking-widest italic opacity-60">
                    Figure 1.1: Institutional architecture as a representation of statecraft legacy.
                </p>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Article Content */}
                    <article className="lg:col-span-8 space-y-12">
                        <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-2 border-[var(--primary)] pl-8 py-2">
                            The evolution of transatlantic relations necessitates a reconfiguration of diplomatic frameworks. To address the complexities of 21st-century statecraft, the Athena Institute posits that gender parity is not merely a social mandate but a strategic imperative.
                        </p>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-serif text-slate-900 italic">Historical Precedents in Statecraft</h2>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Historically, the architecture of diplomacy has been designed within a narrow demographic corridor. While the Westphalian system emphasized sovereign boundaries and monolithic power structures, modern global challenges—ranging from cyber-security to climate migration—require a pluralistic analytical lens. Examining the diplomatic missions of the mid-20th century reveals a systemic exclusion that truncated the cognitive diversity available to decision-makers.
                            </p>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                The integration of women into high-level diplomatic roles has historically correlated with increased stability in treaty negotiations. Our research suggests that diverse delegations are 20% more likely to reach durable peace agreements. This is not attributed to inherent gender traits, but rather to the disruption of institutional "groupthink" that occurs when non-traditional intellectual perspectives are introduced into high-stakes environments.
                            </p>
                        </section>

                        <div className="bg-[#F8FAFC] p-12 border-l-2 border-[var(--primary)] text-center italic">
                            <p className="text-xl font-serif text-slate-700 leading-relaxed">
                                "Diplomatic efficacy is directly proportional to the breadth of strategic intelligence utilized during pre-negotiation phases."
                            </p>
                        </div>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-serif text-slate-900 italic">The Cognitive Advantage of Diverse Missions</h2>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Cognitive diversity in leadership roles enhances crisis management. In the context of transatlantic security, the ability to synthesize disparate data points into a cohesive strategy is the hallmark of effective governance. AIPP's recent findings indicate that gender-balanced missions demonstrate a superior capacity for risk assessment in non-linear conflict scenarios.
                            </p>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Furthermore, the symbolic value of parity in missions abroad cannot be understated. As democratic institutions face mounting pressure globally, the visible commitment to equitable representation serves as a powerful testament to the resilience and modernization of Western political praxis. It reinforces the normative strength of transatlantic alliances in an era of shifting geopolitical alignments.
                            </p>
                        </section>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-8 py-12 border-y border-slate-100">
                            <div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">20%</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Stability Increase</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">14+</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Missions Analyzed</p>
                            </div>
                        </div>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-serif text-slate-900 italic">Future-Proofing the Diplomatic Corps</h2>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Moving forward, the Athena Institute recommends a systemic overhaul of recruitment and promotion tracks within State Departments. By prioritizing women's strategic intellect, institutions can ensure they are not merely reacting to the world as it was, but actively shaping the world as it will be. This requires a departure from traditional "pipelines" and an embrace of rigorous, merit-based analytical frameworks that recognize diverse leadership styles.
                            </p>
                        </section>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 pt-12">
                            {['GEOPOLITICS', 'GENDER PARITY', 'TRANSATLANTIC RELATIONS', 'STATECRAFT'].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase tracking-widest border border-slate-100">
                                    #{tag.replace(/\s+/g, '')}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-16">
                        {/* Strategic Resources */}
                        <div className="space-y-8">
                            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strategic Resources</h2>
                            <div className="space-y-6">
                                <Link href="#" className="group block bg-white border border-slate-100 p-8 hover:shadow-xl transition-all">
                                    <FileText className="text-[var(--primary)] mb-4" size={20} />
                                    <h3 className="text-sm font-bold text-slate-900 mb-2">Women in Statecraft: A Policy Brief</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed mb-6">Executive summary of the 2023 legislative recommendations for diplomatic reform.</p>
                                    <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-widest border-b border-[var(--primary)] pb-1">Download PDF</span>
                                </Link>
                                <Link href="#" className="group block bg-white border border-slate-100 p-8 hover:shadow-xl transition-all">
                                    <Users className="text-[var(--primary)] mb-4" size={20} />
                                    <h3 className="text-sm font-bold text-slate-900 mb-2">The Athena Framework 2.0</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed mb-6">An integrated research methodology for political praxis transformation.</p>
                                    <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-widest border-b border-[var(--primary)] pb-1">Explore Research</span>
                                </Link>
                            </div>
                        </div>

                        {/* Upcoming Labs */}
                        <div className="space-y-8 bg-[#F8FAFC] p-8">
                            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upcoming Labs</h2>
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <p className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-widest">NOV 12, 2023</p>
                                    <h3 className="text-sm font-bold text-slate-900">Diplomatic Resilience Leadership Lab</h3>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Intensive seminar for senior diplomats focusing on non-linear conflict strategies.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-widest">DEC 05, 2023</p>
                                    <h3 className="text-sm font-bold text-slate-900">Foundations of Strategic Intel</h3>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Web-based practicum for emerging political analysts.</p>
                                </div>
                                <button className="w-full py-4 border border-slate-200 text-[9px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">
                                    Register for a Lab
                                </button>
                            </div>
                        </div>

                        {/* Institutional Briefings */}
                        <div className="space-y-6">
                            <h2 className="text-sm font-serif text-slate-900">Institutional Briefings</h2>
                            <p className="text-xs text-slate-500 leading-relaxed">Receive bi-monthly analytical updates from our research fellows directly to your inbox.</p>
                            <input
                                type="email"
                                placeholder="Professional Email"
                                className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-medium outline-none"
                            />
                            <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                                Subscribe
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Institute Footer */}
            <footer className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-2">
                            <div className="w-6 h-6 bg-slate-900 rounded-sm" /> Athena Institute
                        </Link>
                        <p className="text-sm text-slate-500 max-w-md leading-relaxed font-medium">
                            Advancing the strategic intellect of women to lead political transformation. AIPP provides rigorous research, policy briefs, and leadership labs for the modern global landscape.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">The Institute</h3>
                        <ul className="space-y-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <li><Link href="/about" className="hover:text-slate-900">Governance & Charter</Link></li>
                            <li><Link href="/framework" className="hover:text-slate-900">Research Fellows</Link></li>
                            <li><Link href="/publications" className="hover:text-slate-900">Annual Reports</Link></li>
                            <li><Link href="#" className="hover:text-slate-900">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Contact</h3>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            1200 Academic Plaza<br />Washington, D.C. 20005
                        </p>
                        <Link href="mailto:contact@aipp.org" className="text-[11px] font-black text-[var(--primary)] uppercase tracking-wider border-b border-[var(--primary)] pb-1">
                            contact@aipp.org
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default InsightDetailPage;
