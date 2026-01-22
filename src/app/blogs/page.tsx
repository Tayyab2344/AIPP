'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, Loader2, FileText } from 'lucide-react';
import { blogService } from '@/lib/services/blogService';
import { BlogPost } from '@/types';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await blogService.getAll();
                // Filter for published posts on the public page
                setBlogs(data.filter(post => post.status === 'published' && post.category !== 'Political Thought'));
                // Note: InsightsPage usually handles 'Political Thought', Blogs handles others.
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const formatDate = (date: any) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                        Voices of <span className="text-violet-600">Change</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Stories, updates, and expert perspectives from our global community of advocates and researchers.
                    </p>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center space-y-4">
                        <Loader2 suppressHydrationWarning className="animate-spin text-violet-600" size={32} />
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Retrieving Voices...</p>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog) => (
                            <article key={blog.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-200/20 transition-all flex flex-col group">
                                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-extrabold text-violet-600 uppercase tracking-widest">
                                            {blog.category}
                                        </span>
                                    </div>
                                    {blog.featuredImage ? (
                                        <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center opacity-20">
                                            <FileText suppressHydrationWarning size={48} className="text-slate-400" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 font-bold uppercase tracking-tighter">
                                        <div className="flex items-center space-x-1">
                                            <Clock suppressHydrationWarning size={14} />
                                            <span>{formatDate(blog.publishDate)}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <User suppressHydrationWarning size={14} />
                                            <span>{blog.author}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-violet-600 transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <Link href={`/insights/${blog.slug}`} className="inline-flex items-center space-x-2 text-violet-600 font-bold text-sm group/link">
                                        <span>Read Article</span>
                                        <ArrowRight suppressHydrationWarning size={16} className="translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-slate-400 italic">
                        No articles currently available in this section.
                    </div>
                )}
            </section>
        </div>
    );
};

export default BlogsPage;
