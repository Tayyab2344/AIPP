'use client';

import { useState, useEffect } from 'react';
import { blogService } from '@/lib/services/blogService';
import { BlogPost } from '@/types';
import { Button } from '@/components/ui/Button';
import { Plus, Search, MoreVertical, Edit2, Trash2, Globe, FileText, BookOpen } from 'lucide-react';

export default function BlogsAdmin() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const data = await blogService.getAll();
            setBlogs(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Blog Management</h1>
                    <p className="text-slate-500 mt-1">Manage articles, awareness posts, and news updates.</p>
                </div>
                <Button className="space-x-2">
                    <Plus size={18} />
                    <span>New Article</span>
                </Button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filter:</span>
                        <select className="bg-slate-50 border-none text-xs font-bold text-slate-600 rounded-xl px-4 py-2 focus:ring-0">
                            <option>All Posts</option>
                            <option>Published</option>
                            <option>Drafts</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">
                                <th className="px-8 py-5">Article</th>
                                <th className="px-8 py-5">Status</th>
                                <th className="px-8 py-5">Date</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-slate-400 text-sm">Loading your articles...</td>
                                </tr>
                            ) : blogs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center max-w-xs mx-auto">
                                            <div className="p-4 bg-slate-50 text-slate-300 rounded-3xl mb-4">
                                                <BookOpen size={48} />
                                            </div>
                                            <p className="font-bold text-slate-900 mb-1">No articles found</p>
                                            <p className="text-sm text-slate-500 mb-6">Start by creating your first blog post to share stories with your community.</p>
                                            <Button variant="outline" size="sm">Create First Post</Button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-slate-100 rounded-xl shrink-0" />
                                                <div>
                                                    <p className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-tight">{blog.title}</p>
                                                    <p className="text-xs text-slate-400 mt-1">By Sarah Johnson</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                Published
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-slate-500 tabular-nums">
                                            Jan 12, 2026
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end space-x-1">
                                                <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all" title="Edit">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Delete">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
