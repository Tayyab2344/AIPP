'use client';

import { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    ChevronDown,
    X,
    Bold,
    Italic,
    List,
    Link as LinkIcon,
    Edit3,
    Trash2,
    Eye,
    Globe,
    FileText,
    Info,
    MoreVertical,
    Download,
    Loader2,
} from 'lucide-react';
import { blogService } from '@/lib/services/blogService';
import { subscriberService } from '@/lib/services/subscriberService';
import { BlogPost } from '@/types';

const statusOptions = ['All', 'Published', 'Draft', 'Archived'];
const categoryOptions = ['All', 'Political Thought', 'Governance', 'Women & Leadership', 'Praxis & Strategy'];

export default function BlogsAdmin() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
    const [showDetails, setShowDetails] = useState(false);
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const data = await blogService.getAll();
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateNew = () => {
        const newBlog: Partial<BlogPost> = {
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            category: 'Political Thought',
            status: 'draft',
            author: 'Dr. Alistair Vance', // Default author
        };
        setSelectedBlog(newBlog as BlogPost);
        setShowDetails(true);
    };

    const handleSave = async () => {
        if (!selectedBlog) return;
        if (!selectedBlog.title || !selectedBlog.content) {
            alert("Title and Content are required.");
            return;
        }

        setIsSaving(true);
        try {
            // Generate slug if empty
            if (!selectedBlog.slug) {
                selectedBlog.slug = selectedBlog.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
            }

            if (selectedBlog.id) {
                await blogService.update(selectedBlog.id, selectedBlog);
            } else {
                await blogService.create(selectedBlog as Omit<BlogPost, 'id'>);
            }
            await fetchBlogs();
            setShowDetails(false);
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save article.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this article? This action cannot be undone.")) return;
        try {
            await blogService.delete(id);
            await fetchBlogs();
            if (selectedBlog?.id === id) setShowDetails(false);
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const handleExportSubscribers = async () => {
        try {
            const subscribers = await subscriberService.getSubscribers();
            if (subscribers.length === 0) {
                alert("No subscribers found to export.");
                return;
            }

            // Simple CSV generation
            const headers = "Email,Subscribed Date,Status\n";
            const rows = subscribers.map(subData => {
                const sub = subData as any; // Cast to access properties safely
                const date = sub.subscribedDate?.toDate?.() || new Date(sub.subscribedDate);
                return `${sub.email},${date.toLocaleDateString()},${sub.status}`;
            }).join("\n");

            const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `aipp_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error exporting subscribers:", error);
            alert("Failed to export subscribers.");
        }
    };

    const filteredBlogs = blogs.filter(blog => {
        const matchesStatus = statusFilter === 'All' || blog.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            published: 'bg-emerald-100 text-emerald-700',
            draft: 'bg-amber-100 text-amber-700',
            archived: 'bg-slate-100 text-slate-500',
        };
        return styles[status.toLowerCase()] || 'bg-slate-100 text-slate-500';
    };

    const formatDate = (date: any) => {
        if (!date) return '—';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleDateString();
    };

    return (
        <div className="flex h-[calc(100vh-73px)]">
            {/* Main Content */}
            <div className={`flex-grow overflow-auto p-8 ${showDetails ? 'pr-0' : ''}`}>
                {/* Header */}
                <div className="mb-6">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                        ADMIN / BLOG MANAGEMENT
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 font-serif">Articles & Insights</h1>
                            <p className="text-slate-500 mt-1 text-sm max-w-xl">
                                Manage editorial content, research summaries, and awareness posts.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handleExportSubscribers}
                                className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
                            >
                                <Download size={18} />
                                <span>Export List</span>
                            </button>
                            <button
                                onClick={handleCreateNew}
                                className="flex items-center space-x-2 bg-[#2F4F4F] text-white px-5 py-3 rounded-lg hover:bg-[#1F3F3F] transition-colors font-medium"
                            >
                                <Plus size={18} />
                                <span>New Article</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F] cursor-pointer"
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>
                                    Status: {status}
                                </option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>

                    <div className="relative flex-grow max-w-xs">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F]"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    {loading ? (
                        <div className="p-12 flex flex-col items-center justify-center space-y-4">
                            <Loader2 className="animate-spin text-slate-300" size={32} />
                            <p className="text-slate-400 text-sm font-serif italic">Loading Archive...</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Article</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                                    <tr
                                        key={blog.id}
                                        onClick={() => {
                                            setSelectedBlog(blog);
                                            setShowDetails(true);
                                        }}
                                        className={`border-b border-slate-50 cursor-pointer transition-colors ${selectedBlog?.id === blog.id
                                            ? 'bg-slate-50'
                                            : 'hover:bg-slate-50/50'
                                            }`}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                                                    {blog.featuredImage ? (
                                                        <img src={blog.featuredImage} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                                            <FileText size={16} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-800 line-clamp-1">{blog.title}</div>
                                                    <div className="text-xs text-slate-400 mt-0.5">By {blog.author}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusBadge(blog.status)}`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            {formatDate(blog.publishDate)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(blog.id);
                                                }}
                                                className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-slate-400 italic">
                                            No articles found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Info Box */}
                <div className="mt-6 bg-slate-50 rounded-xl p-5 flex items-start space-x-4 border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-[#2F4F4F] flex items-center justify-center text-white shrink-0">
                        <Info size={16} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Editorial Protocol</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            "Ensure all articles represent the institute's commitment to strategic intellect. Verify all cross-referenced publications before publishing to the public domain."
                        </p>
                    </div>
                </div>
            </div>

            {/* Side Panel (Editor) */}
            {showDetails && selectedBlog && (
                <div className="w-[500px] border-l border-slate-200 bg-white flex flex-col shrink-0 shadow-2xl relative z-20">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                        <h2 className="font-bold text-slate-800 uppercase tracking-wider text-sm">
                            {selectedBlog.id ? 'Edit Insight' : 'New Insight Creation'}
                        </h2>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-grow overflow-auto p-6 space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Article Title
                            </label>
                            <textarea
                                value={selectedBlog.title}
                                onChange={(e) => setSelectedBlog({ ...selectedBlog, title: e.target.value })}
                                rows={2}
                                placeholder="e.g., The Strategic Pivot: Women in Post-Conflict Governance"
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-[#2F4F4F] transition-all resize-none"
                            />
                        </div>

                        {/* Status & Date */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    Status
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedBlog.status}
                                        onChange={(e) => setSelectedBlog({ ...selectedBlog, status: e.target.value as any })}
                                        className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F]"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                        <option value="archived">Archived</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedBlog.category}
                                        onChange={(e) => setSelectedBlog({ ...selectedBlog, category: e.target.value })}
                                        className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F]"
                                    >
                                        {categoryOptions.filter(c => c !== 'All').map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Institutional Summary (Excerpt)
                            </label>
                            <textarea
                                value={selectedBlog.excerpt}
                                onChange={(e) => setSelectedBlog({ ...selectedBlog, excerpt: e.target.value })}
                                rows={3}
                                placeholder="A brief analytical overview for previews..."
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F] transition-all resize-none leading-relaxed"
                            />
                        </div>

                        {/* Editor Mockup */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Analytical Content
                            </label>
                            <div className="border border-slate-200 rounded-lg overflow-hidden">
                                <div className="flex items-center space-x-1 px-3 py-2 border-b border-slate-100 bg-slate-50">
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <Bold size={14} />
                                    </button>
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <Italic size={14} />
                                    </button>
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <List size={14} />
                                    </button>
                                    <div className="flex-grow" />
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <LinkIcon size={14} />
                                    </button>
                                </div>
                                <textarea
                                    value={selectedBlog.content}
                                    onChange={(e) => setSelectedBlog({ ...selectedBlog, content: e.target.value })}
                                    rows={12}
                                    placeholder="Begin analytical discourse..."
                                    className="w-full px-4 py-3 text-sm focus:outline-none resize-none leading-relaxed font-sans"
                                />
                            </div>
                        </div>

                        {/* Metadata Info */}
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="flex items-center space-x-2 text-slate-400 mb-2">
                                <Eye size={14} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Publication Info</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Author</span>
                                    <span className="text-slate-600 font-medium">{selectedBlog.author}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Published Date</span>
                                    <span className="text-slate-600 font-medium">{formatDate(selectedBlog.publishDate)}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Word Count</span>
                                    <span className="text-slate-600 font-medium">
                                        {selectedBlog.content.split(/\s+/).filter(w => w.length > 0).length} words
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-slate-100 flex items-center space-x-3 bg-white sticky bottom-0">
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex-grow bg-[#B19B4C] text-white py-3 rounded-lg font-bold text-sm tracking-wide hover:bg-[#98873E] transition-colors uppercase flex items-center justify-center space-x-2 disabled:opacity-50"
                        >
                            {isSaving && <Loader2 size={16} className="animate-spin" />}
                            <span>{selectedBlog.status === 'published' ? 'Push to Domain' : 'Save as Draft'}</span>
                        </button>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="px-6 py-3 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors uppercase"
                        >
                            Discard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
