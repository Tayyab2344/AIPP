"use client";

import { useState } from 'react';
import { FileText, Download, BookOpen, ChevronRight, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const PublicationsPage = () => {
    const [activeFilter, setActiveFilter] = useState('Newest');

    const publicationTypes = [
        { label: 'Research Papers', count: 24 },
        { label: 'Policy Briefs', count: 12 },
        { label: 'Analytical Reports', count: 8 },
        { label: 'Monographs', count: 3 },
    ];

    const publications = [
        {
            type: 'RESEARCH PAPER',
            date: 'OCTOBER 2023',
            title: 'Technocratic Feminism and the Bureaucratic State: A Strategic Analysis',
            abstract: 'An examination of the integration of gender-responsive mechanisms within the administrative structures of contemporary African states, evaluating the tension between radical transformation and bureaucratic inertia.',
            author: 'Dr. Elena Kante',
            readTime: '12 min read'
        },
        {
            type: 'POLICY BRIEF',
            date: 'AUGUST 2023',
            title: 'Structural Quotas vs. Organic Inclusion: Assessing Long-term Political Efficacy',
            abstract: 'Comparative research into the sustainability of legislative quotas in Nordic and East African contexts, focusing on the quality of participation over descriptive representation.',
            author: 'Prof. Sarah Miller',
            readTime: '8 min read'
        },
        {
            type: 'ANALYTICAL REPORT',
            date: 'JULY 2023',
            title: "Digital Praxis: The Impact of Networked Activism on Institutional Change",
            abstract: 'How decentralized digital movements are reshaping formal political agendas and the risks of technological capture by institutional elites.',
            author: 'Marcus Thorne',
            readTime: '22 min read'
        }
    ];

    return (
        <div className="bg-[#FBFBFA] min-h-screen pb-24">
            {/* Hero Section */}
            <section className="bg-white border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">Institutional Research</p>
                            <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight mb-8">
                                The Architecture <br /> of Praxis
                            </h1>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-10">
                                Formal research outputs shaping political thought and strategic intellect for women's political transformation. AIPP's repository serves as a nexus for rigorous evidence-based inquiry.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-[#1A5261] text-white px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#14414d] transition-all">
                                    Browse Archive
                                </button>
                                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                                    Submission Guidelines
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative hidden lg:block">
                            <div className="aspect-square bg-slate-50 rounded-full flex items-center justify-center overflow-hidden">
                                {/* Abstract Graphic placeholder using CSS gradients/lines if image not available */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1A5261 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                                <div className="z-10 w-full h-full bg-gradient-to-br from-transparent to-slate-200/50 flex items-center justify-center p-12">
                                    <FileText size={120} className="text-slate-200" strokeWidth={0.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar */}
                    <aside className="lg:col-span-3 space-y-12">
                        <div>
                            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Publication Types</h2>
                            <ul className="space-y-4">
                                {publicationTypes.map((type) => (
                                    <li key={type.label} className="flex justify-between items-center group cursor-pointer">
                                        <span className="text-sm font-bold text-slate-600 group-hover:text-[var(--primary)] transition-colors">{type.label}</span>
                                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-sm">{type.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border border-slate-100 p-8 rounded-sm">
                            <h2 className="text-base font-serif text-slate-900 mb-4">Intellectual Integrity</h2>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                All AIPP publications undergo a rigorous double-blind peer-review process and adhere to the highest standards of evidence-based political analysis.
                            </p>
                            <Link href="#" className="flex items-center gap-2 text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest group">
                                <CheckCircle2 size={14} /> View Review Standards
                            </Link>
                        </div>

                        <div>
                            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Archive</h2>
                            <div className="relative">
                                <select className="w-full bg-slate-100 border-none text-xs font-bold text-slate-600 py-3 px-4 appearance-none cursor-pointer outline-none">
                                    <option>Select Year</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <ChevronRight size={14} className="rotate-90" />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9 space-y-16">

                        {/* Thematic Focus Areas */}
                        <div>
                            <h2 className="text-xl font-serif text-slate-900 mb-8 italic">Thematic Focus Areas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                                <div className="bg-white p-8 group cursor-pointer hover:bg-slate-50 transition-all">
                                    <BookOpen className="text-[var(--primary)] mb-6 opacity-40" size={24} />
                                    <h3 className="text-lg font-serif text-slate-900 mb-3 italic">Gender-Responsive Governance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Inquiry into institutional re-engineering and policy frameworks for balanced representation.</p>
                                </div>
                                <div className="bg-white p-8 group cursor-pointer hover:bg-slate-50 transition-all">
                                    <TrendingUp className="text-[var(--primary)] mb-6 opacity-40" size={24} />
                                    <h3 className="text-lg font-serif text-slate-900 mb-3 italic">Political Strategy</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Analytical frameworks for navigating complex political ecosystems and leadership transitions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Publications Feed */}
                        <div>
                            <div className="flex justify-between items-baseline mb-10 border-b border-slate-100 pb-4">
                                <h2 className="text-xl font-serif text-slate-900 italic">Recent Publications</h2>
                                <div className="flex gap-6 text-[10px] font-bold tracking-widest uppercase">
                                    {['Newest', 'A-Z', 'Most Cited'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setActiveFilter(filter)}
                                            className={`${activeFilter === filter ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-colors`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-12">
                                {publications.map((pub, i) => (
                                    <article key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100 last:border-0">
                                        <div className="md:col-span-9 space-y-4">
                                            <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest">
                                                {pub.type} • {pub.date}
                                            </p>
                                            <h3 className="text-2xl font-serif text-slate-900 leading-tight group-hover:text-[var(--primary)] transition-colors">
                                                {pub.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                                {pub.abstract}
                                            </p>
                                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                <div className="w-6 h-6 bg-slate-200 rounded-full" />
                                                <span>{pub.author}</span>
                                                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                                <span>{pub.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="md:col-span-3 flex flex-col gap-3 justify-center">
                                            <button className="flex items-center justify-between px-4 py-3 bg-[#1A5261] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#14414d] transition-all">
                                                PDF <Download size={14} />
                                            </button>
                                            <button className="flex items-center justify-between px-4 py-3 border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
                                                Read <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-12">
                                <button className="w-full py-4 bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:bg-slate-200 transition-all">
                                    Load More Records
                                </button>
                            </div>
                        </div>

                    </main>
                </div>
            </div>

            {/* Collaborative act footer */}
            <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 p-12 sm:p-20 text-center rounded-sm">
                    <blockquote className="text-3xl sm:text-4xl font-serif text-slate-900 mb-8 italic">
                        "Research is a collaborative act of political imagination."
                    </blockquote>
                    <p className="text-base text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
                        AIPP invites scholars, practitioners, and strategic thinkers to contribute to our upcoming journal volume on Institutional Re-engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
                        <Link href="#" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                            Call for Papers 2024 <ArrowRight size={14} className="text-[var(--primary)]" />
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                            Connect for Peer Exchange <ArrowRight size={14} className="text-[var(--primary)]" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublicationsPage;
