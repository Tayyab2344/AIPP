"use client";

import { useState } from 'react';
import { ArrowRight, ChevronRight, Search, FileText, Database, Globe } from 'lucide-react';
import Link from 'next/link';

const insights = [
    {
        slug: 'strategic-pivot-women-post-conflict-governance',
        title: 'The Strategic Pivot: Women in Post-Conflict Governance',
        category: 'Political Thought',
        date: 'OCT 12, 2023',
        readTime: '8 MIN READ',
        abstract: 'An exploration of how gendered perspectives reshape stability in transitionary states through redefined institutional praxis and structural equity.',
        image: '/images/insights/pivot.jpg'
    },
    {
        slug: 'redefining-institutional-resilience-through-praxis',
        title: 'Redefining Institutional Resilience through Praxis',
        category: 'Governance',
        date: 'OCT 05, 2023',
        readTime: '12 MIN READ',
        abstract: 'Examining the structural capacity of institutions to adapt to modern geopolitical shifts by applying philosophical rigor to practical policy...',
        image: '/images/insights/resilience.jpg'
    },
    {
        slug: 'analytical-frameworks-for-21st-century-leadership',
        title: 'Analytical Frameworks for 21st Century Leadership',
        category: 'Women & Leadership',
        date: 'SEP 28, 2023',
        readTime: '10 MIN READ',
        abstract: 'New methodologies for assessing leadership impact within complex bureaucratic systems and the digital transformation of state power.',
        image: '/images/insights/leadership.jpg'
    },
    {
        slug: 'the-ethics-of-power-in-strategic-praxis',
        title: 'The Ethics of Power in Strategic Praxis',
        category: 'Praxis & Strategy',
        date: 'SEP 15, 2023',
        readTime: '14 MIN READ',
        abstract: 'Critical reflections on the moral dimensions of political decision-making in an increasingly fragmented global order.',
        image: '/images/insights/ethics.jpg'
    },
    {
        slug: 'global-governance-and-the-gendered-state',
        title: 'Global Governance and the Gendered State',
        category: 'Governance',
        date: 'SEP 08, 2023',
        readTime: '11 MIN READ',
        abstract: 'A comparative study of institutional inclusivity across diverse political landscapes and the role of feminist IR theory.',
        image: '/images/insights/global.jpg'
    },
    {
        slug: 'policy-narratives-in-the-digital-age',
        title: 'Policy Narratives in the Digital Age',
        category: 'Praxis & Strategy',
        date: 'AUG 22, 2023',
        readTime: '9 MIN READ',
        abstract: 'How digital transformation is altering the dissemination of formal research and the construction of political legitimacy.',
        image: '/images/insights/digital.jpg'
    }
];

const InsightsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All Insights');

    const categories = ['All Insights', 'Political Thought', 'Governance', 'Women & Leadership', 'Praxis & Strategy'];

    return (
        <div className="bg-[#FBFBFA] min-h-screen pb-24">
            {/* Hero Section */}
            <header className="bg-white border-b border-slate-100 pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Public Reflections</p>
                    <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight mb-8">
                        Insights & Analytical <br /> Commentary
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mb-10">
                        Extending the boundaries of political praxis through rigorous reflection and strategic intellect. Our blog serves as a bridge between formal research and the public discourse.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest hover:gap-3 transition-all">
                        Our Editorial Commitment <ArrowRight size={14} />
                    </Link>
                </div>
            </header>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Category Filter */}
                <div className="flex border-b border-slate-100 mb-16 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-4 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap border-b-2 transition-all ${activeCategory === cat ? 'border-[var(--primary)] text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Insight Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {insights.map((insight, idx) => (
                        <article key={idx} className="group flex flex-col h-full">
                            <Link href={`/insights/${insight.slug}`} className="block aspect-[4/3] bg-slate-100 rounded-sm overflow-hidden mb-6">
                                <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-700 relative">
                                    {/* Placeholder for real images */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                        <FileText size={48} className="text-slate-400" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Link>
                            <div className="space-y-4 flex-grow">
                                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <span>{insight.date}</span>
                                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                    <span>{insight.readTime}</span>
                                </div>
                                <h3 className="text-xl font-serif text-slate-900 leading-snug group-hover:text-[var(--primary)] transition-colors">
                                    <Link href={`/insights/${insight.slug}`}>
                                        {insight.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed italic line-clamp-3">
                                    {insight.abstract}
                                </p>
                            </div>
                            <Link
                                href={`/insights/${insight.slug}`}
                                className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest group-hover:gap-3 transition-all"
                            >
                                Read Analysis <ArrowRight size={14} className="text-[var(--primary)]" />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-24 pt-8 border-t border-slate-100 flex justify-between items-center">
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                        <ChevronRight className="rotate-180" size={20} />
                    </button>
                    <div className="flex gap-4">
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                className={`w-8 h-8 text-[10px] font-bold flex items-center justify-center rounded-sm transition-all ${num === 1 ? 'bg-[#1A5261] text-white' : 'text-slate-400 hover:bg-slate-100'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>

            {/* Deepen Engagement */}
            <section className="mt-32 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 italic">Deepen your engagement.</h2>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-12">
                    Our blog entries are initial reflections on ongoing institutional projects. For peer-reviewed papers, data sets, and methodology documentation, please visit our Research Labs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#1A5261] text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#14414d] transition-all">
                        Access Research Archives
                    </button>
                    <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                        Visit Publication Lab
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InsightsPage;
