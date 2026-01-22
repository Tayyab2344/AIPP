'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Database, Users, TrendingUp, Globe, BookOpen, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { publicationService } from '@/lib/services/publicationService';
import { Publication } from '@/types';

const FrameworkPage = () => {
    const [outputs, setOutputs] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecent = async () => {
            try {
                const data = await publicationService.getPublished();
                setOutputs(data.slice(0, 2));
            } catch (error) {
                console.error("Error fetching framework outputs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecent();
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-slate-100 bg-[#FBFBFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-[10px] sm:text-xs font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-6">Institute Overview</p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
                            Research & Policy at the <br /> Athena Institute
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mb-10">
                            Advancing women's strategic intellect to transform global political praxis through rigorous, interdisciplinary, and evidence-based inquiry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#domains" className="bg-[#1A5261] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#14414d] transition-all text-center">
                                Explore Our Areas
                            </Link>
                            <Link href="/publications" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all text-center">
                                Access Repository
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-8 leading-tight">
                                The AIPP Framework: Analytical Depth meets Strategic Foresight
                            </h2>
                            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                                Our approach is not merely reactive; we synthesize insights from political science, economics, and sociology to identify emerging trends and provide proactive solutions for future governance models.
                            </p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                            <div className="bg-white p-10 space-y-4">
                                <Database suppressHydrationWarning className="text-[var(--primary)] w-6 h-6" />
                                <h3 className="text-xl font-serif text-slate-900">Evidence-Based</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Rigorous data collections and quantitative analysis form the basis of our policy recommendations.</p>
                            </div>
                            <div className="bg-white p-10 space-y-4">
                                <Globe suppressHydrationWarning className="text-[var(--primary)] w-6 h-6" />
                                <h3 className="text-xl font-serif text-slate-900">Interdisciplinary</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Crossing traditional academic silos to understand the interconnected causality of power dynamics.</p>
                            </div>
                            <div className="bg-white p-10 space-y-4">
                                <TrendingUp suppressHydrationWarning className="text-[var(--primary)] w-6 h-6" />
                                <h3 className="text-xl font-serif text-slate-900">Forward-Looking</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Identifying tomorrow's institutional challenges through predictive modeling and strategic foresight.</p>
                            </div>
                            <div className="bg-[#1A5261] p-10 space-y-4 text-white">
                                <Users suppressHydrationWarning className="text-white/60 w-6 h-6" />
                                <h3 className="text-xl font-serif">Institutional Discourse</h3>
                                <p className="text-sm text-white/80 leading-relaxed">Translating complex research into the language of statesmanship and actionable legislative frameworks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section id="domains" className="py-24 bg-[#FBFBFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-baseline mb-16 gap-4">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Thematic Domains</p>
                            <h2 className="text-4xl font-serif text-slate-900 italic leading-tight">Key Research Areas</h2>
                        </div>
                        <Link href="/publications" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                            View All Clusters <ArrowRight suppressHydrationWarning size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Women and Political Leadership",
                                desc: "Analyzing barriers and strategies for women's transition to executive political roles globally.",
                                img: "/images/pillar_rpi_hijab.png"
                            },
                            {
                                title: "Gender-Responsive Governance",
                                desc: "Frameworks for auditing institutional transparency through a lens of gender equity and impact.",
                                img: "/images/pillar_sas_niqab.png"
                            },
                            {
                                title: "Public Policy Innovation",
                                desc: "Reimagining technology and strategic intelligence to bridge public service delivery gaps.",
                                img: "/images/pillar_cpa_niqab.png"
                            }
                        ].map((area, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-slate-200 relative">
                                    <img src={area.img} alt={area.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-[var(--primary)] transition-colors italic">{area.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Outputs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-serif text-slate-900 mb-16 relative inline-block">
                        Latest Outputs
                        <span className="absolute -left-12 top-1/2 w-8 h-px bg-slate-300" />
                    </h2>

                    {loading ? (
                        <div className="py-12 flex justify-center">
                            <Loader2 suppressHydrationWarning size={32} className="animate-spin text-slate-200" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {outputs.length > 0 ? outputs.map((out) => (
                                <div key={out.id} className="flex gap-8 p-8 border border-slate-100 hover:shadow-lg transition-all items-start bg-[#FBFBFA] group">
                                    <div className="w-24 h-32 bg-slate-100 flex-shrink-0 flex flex-col items-center justify-center p-4 text-center group-hover:bg-slate-200 transition-colors">
                                        <FileText suppressHydrationWarning className="text-slate-300 mb-2" size={32} />
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{out.category}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-2">{out.year} • {out.category}</p>
                                        <h3 className="text-xl font-serif text-slate-900 mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors line-clamp-2">{out.title}</h3>
                                        <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3 italic">{out.summary}</p>
                                        <Link href="/publications" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                            Access Report <ArrowRight suppressHydrationWarning size={12} className="text-[var(--primary)]" />
                                        </Link>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full py-12 text-center text-slate-400 italic font-serif">
                                    No strategic outputs currently available.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Link href="/publications" className="inline-block border border-slate-900 px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                            Full Publications Archive
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-[#1A1F2B] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl sm:text-4xl font-serif mb-8 leading-tight">Community & Global Impact</h2>
                        <p className="text-lg text-white/70 font-medium leading-relaxed">
                            AIPP is a collective endeavor. We partner with universities, global think tanks, and passionate individuals to co-create knowledge. From research fellows to grassroots volunteers, every contributor helps shape our impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 relative">
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-4xl font-serif mb-2">12+</p>
                            <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Academic Partners</p>
                        </div>
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-4xl font-serif mb-2">45</p>
                            <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Visiting Scholars</p>
                        </div>
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-4xl font-serif mb-2">18</p>
                            <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Patents & Registered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shape the Discourse */}
            <section className="py-24 bg-[#FBFBFA]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <BookOpen suppressHydrationWarning size={48} className="mx-auto text-[var(--primary)] mb-8 opacity-50" />
                    <h2 className="text-4xl font-serif text-slate-900 mb-8 italic">Shape the Discourse</h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                        Join our global network of scholars, practitioners, and activists. We invite you to volunteer, partner, or contribute to our ongoing research and advocacy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/collaborate" className="bg-[#1A5261] text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#14414d] transition-all">
                            Join Our Mission
                        </Link>
                        <button className="text-slate-900 border-b-2 border-slate-900 pb-2 font-bold uppercase tracking-widest text-[10px] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all">
                            Sign up for Briefings
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrameworkPage;
