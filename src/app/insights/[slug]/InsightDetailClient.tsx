'use client';

import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface InsightDetailClientProps {
    insight: BlogPost;
}

const InsightDetailClient = ({ insight }: InsightDetailClientProps) => {
    const formatDate = (date: any) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <article className="bg-[#FBFBFA] min-h-screen pb-24">
            {/* Header / Breadcrumb */}
            <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
                <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors mb-12"
                >
                    <ArrowLeft suppressHydrationWarning size={14} /> Back to Insights
                </Link>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-[var(--primary)] uppercase tracking-[0.2em]">
                        <span>{insight.category}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>Insight</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight">
                        {insight.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-slate-100 mt-8">
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <Calendar suppressHydrationWarning size={14} className="text-slate-400" />
                            <span>{formatDate(insight.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <User suppressHydrationWarning size={14} className="text-slate-400" />
                            <span>{insight.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <Clock suppressHydrationWarning size={14} className="text-slate-400" />
                            <span>{Math.ceil(insight.content.split(' ').length / 200)} min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image Overlay */}
            {insight.featuredImage && (
                <div className="max-w-7xl mx-auto px-4 mb-20">
                    <div className="aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden border border-slate-100 shadow-sm">
                        <img
                            src={insight.featuredImage}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4">
                {/* Excerpt / Lead */}
                <p className="text-xl sm:text-2xl font-serif text-slate-700 italic border-l-4 border-[var(--primary)] pl-8 py-2 mb-16 leading-relaxed">
                    {insight.excerpt}
                </p>

                {/* Main Content */}
                <div
                    className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: insight.content }}
                />

                {/* Footer Actions */}
                <div className="mt-24 pt-12 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">
                            <Share2 suppressHydrationWarning size={14} /> Share Analysis
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {['Political Science', 'Institutional Theory', 'Praxis'].map(tag => (
                            <span key={tag} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest px-2 py-1 border border-slate-100 rounded-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Editorial Notice */}
                <div className="mt-16 p-8 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white border border-slate-100 rounded-sm text-slate-400">
                            <Tag suppressHydrationWarning size={20} />
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2">Editorial Note</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Insights are analytical reflections intended to foster public discourse. They represent the specialized intellect of AIPP contributors and are distinct from formal institutional policy briefs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default InsightDetailClient;
