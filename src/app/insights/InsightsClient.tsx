'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '@/lib/services/blogService';
import { BlogPost } from '@/types';
import { Reveal, RevealList } from '@/components/ui/Reveal';

const InsightsClient = ({ initialInsights = [] }: { initialInsights?: BlogPost[] }) => {
    const [insights, setInsights] = useState<BlogPost[]>(initialInsights);
    const [loading, setLoading] = useState(initialInsights.length === 0);
    const [activeCategory, setActiveCategory] = useState('All Insights');
    const [categories, setCategories] = useState(['All Insights']);

    useEffect(() => {
        // Derive categories even if data is provided (or if it's empty)
        if (insights.length > 0) {
            const uniqueCats = Array.from(new Set(insights.map(i => i.category))).filter(Boolean);
            setCategories(['All Insights', ...uniqueCats]);
        }

        const fetchInsights = async () => {
            if (initialInsights.length > 0) return; // Skip if server provided data

            try {
                const data = await blogService.getAll();
                // Public page only shows PUBLISHED posts
                const published = data.filter(post => post.status === 'published');
                setInsights(published);

                // Derive unique categories
                const uniqueCats = Array.from(new Set(published.map(i => i.category))).filter(Boolean);
                setCategories(['All Insights', ...uniqueCats]);
            } catch (error) {
                console.error("Error fetching insights:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsights();
    }, [initialInsights, insights.length]);

    const filteredInsights = activeCategory === 'All Insights'
        ? insights
        : insights.filter(i => i.category === activeCategory);

    const formatDate = (date: any) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }).toUpperCase();
    };

    return (
        <div className="bg-[#FBFBFA] min-h-screen pb-24">
            {/* Hero Section */}
            <header className="bg-white border-b border-slate-100 pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Public Reflections</p>
                        <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight mb-8">
                            Insights & Analytical <br /> Commentary
                        </h1>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mb-10">
                            Extending the boundaries of political praxis through rigorous reflection and strategic intellect. Our blog serves as a bridge between formal research and the public discourse.
                        </p>
                        <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest hover:gap-3 transition-all">
                            Our Editorial Commitment <ArrowRight suppressHydrationWarning size={14} />
                        </Link>
                    </Reveal>
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
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="animate-pulse space-y-6">
                                <div className="aspect-[4/3] bg-slate-100 rounded-sm" />
                                <div className="h-4 bg-slate-100 w-1/2" />
                                <div className="h-8 bg-slate-100" />
                                <div className="h-20 bg-slate-100" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredInsights.length > 0 ? filteredInsights.map((insight, idx) => (
                            <article key={insight.id || idx} className="group flex flex-col h-full">
                                <Link href={`/insights/${insight.slug}`} className="block aspect-[4/3] bg-slate-100 rounded-sm overflow-hidden mb-6">
                                    <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-700 relative">
                                        {insight.featuredImage ? (
                                            <Image
                                                src={insight.featuredImage}
                                                alt={insight.title}
                                                fill
                                                suppressHydrationWarning
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                                <FileText suppressHydrationWarning size={48} className="text-slate-400" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                                <div className="space-y-4 flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span>{formatDate(insight.publishDate)}</span>
                                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <span>{Math.ceil(insight.content.split(' ').length / 200)} MIN READ</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-slate-900 leading-snug group-hover:text-[var(--primary)] transition-colors">
                                        <Link href={`/insights/${insight.slug}`}>
                                            {insight.title}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed italic line-clamp-3">
                                        {insight.excerpt}
                                    </p>
                                </div>
                                <Link
                                    href={`/insights/${insight.slug}`}
                                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest group-hover:gap-3 transition-all"
                                >
                                    Read Analysis <ArrowRight suppressHydrationWarning size={14} className="text-[var(--primary)]" />
                                </Link>
                            </article>
                        )) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-slate-400 font-serif italic">No institutional insights found in this category.</p>
                            </div>
                        )}
                    </RevealList>
                )}

                {/* Pagination */}
                {filteredInsights.length > 9 && (
                    <div className="mt-24 pt-8 border-t border-slate-100 flex justify-between items-center">
                        <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                            <ChevronRight className="rotate-180" size={20} />
                        </button>
                        <div className="flex gap-4">
                            {[1].map((num) => (
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
                            <ChevronRight suppressHydrationWarning size={20} />
                        </button>
                    </div>
                )}
            </main>

            {/* Deepen Engagement */}
            <section className="mt-32 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 italic">Deepen your engagement.</h2>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-12">
                    Our blog entries are initial reflections on ongoing institutional projects. For peer-reviewed papers, data sets, and methodology documentation, please visit our Research Labs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/research-policy-innovation" className="bg-[#1A5261] text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#14414d] transition-all flex items-center justify-center">
                        Access Research Archives
                    </Link>
                    <Link href="/publications" className="bg-white text-slate-900 border border-slate-200 px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all flex items-center justify-center">
                        Visit Publication Lab
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default InsightsClient;
