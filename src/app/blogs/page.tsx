import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

const blogs = [
    {
        title: '10 Leadership Strategies for First-Time Managers',
        excerpt: 'Navigating the transition from individual contributor to leader requires a shift in mindset and new communication tools.',
        date: 'Jan 10, 2026',
        author: 'Sarah Johnson',
        category: 'Leadership',
        image: '/images/blog1.jpg',
    },
    {
        title: 'How Remote Work is Opening Doors for Global Talent',
        excerpt: 'The digital revolution has flattened the playing field, but structural barriers still remain for many women in emerging markets.',
        date: 'Jan 05, 2026',
        author: 'Elena Rodriguez',
        category: 'Future of Work',
        image: '/images/blog2.jpg',
    },
    {
        title: 'The Power of Mentorship: Personal Stories of Impact',
        excerpt: 'We spoke with five mentors in our community about why they give back and how mentorship has shaped their own careers.',
        date: 'Dec 28, 2025',
        author: 'Amina Kweli',
        category: 'Community',
        image: '/images/blog3.jpg',
    },
];

const BlogsPage = () => {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog, i) => (
                        <article key={i} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-200/20 transition-all flex flex-col group">
                            <div className="aspect-[16/10] bg-slate-200 relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-extrabold text-violet-600 uppercase tracking-widest">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 font-bold uppercase tracking-tighter">
                                    <div className="flex items-center space-x-1">
                                        <Clock size={14} />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <User size={14} />
                                        <span>{blog.author}</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-violet-600 transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <Link href={`/blogs/${i}`} className="inline-flex items-center space-x-2 text-violet-600 font-bold text-sm group/link">
                                    <span>Read Article</span>
                                    <ArrowRight size={16} className="translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;
