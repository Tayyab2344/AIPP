'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Plus,
    Search,
    ChevronDown,
    Trash2,
    FileText,
    Info,
    Download,
    Loader2,
    Pencil,
} from 'lucide-react';
import { blogService } from '@/lib/services/blogService';
import { subscriberService } from '@/lib/services/subscriberService';
import { BlogPost } from '@/types';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';
import Toast, { ToastType } from '@/components/ui/Toast';

const statusOptions = ['All', 'Published', 'Draft', 'Archived'];

export default function InsightsAdmin() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // UI States
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

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

    const handleDeleteClick = (id: string) => {
        setItemToDelete(id);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (!itemToDelete) return;
        setIsDeleting(true);
        try {
            await blogService.delete(itemToDelete);
            await fetchBlogs();
            setToast({ message: "Article deleted successfully", type: "success" });
            setShowDeleteModal(false);
            setItemToDelete(null);
        } catch (error) {
            console.error("Error deleting blog:", error);
            setToast({ message: "Failed to delete article", type: "error" });
        } finally {
            setIsDeleting(false);
        }
    };

    const handleExportSubscribers = async () => {
        try {
            const subscribers = await subscriberService.getSubscribers();
            if (subscribers.length === 0) {
                setToast({ message: "No subscribers found to export", type: "error" });
                return;
            }

            const headers = "Email,Subscribed Date,Status\n";
            const rows = subscribers.map(subData => {
                const sub = subData as any;
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
            setToast({ message: "Subscribers exported successfully", type: "success" });
        } catch (error) {
            console.error("Error exporting subscribers:", error);
            setToast({ message: "Failed to export subscribers", type: "error" });
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
        <div className="max-w-7xl mx-auto pb-12 px-2 sm:px-0">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Institutional Repository
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif leading-tight">Articles & Insights</h1>
                    <p className="text-slate-500 mt-2 text-sm max-w-xl italic">
                        A centralized management system for editorial content.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={handleExportSubscribers}
                        className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors font-bold text-[10px] uppercase tracking-widest"
                    >
                        <Download suppressHydrationWarning size={14} />
                        <span>Export CSV</span>
                    </button>
                    <button
                        onClick={() => router.push('/admin/insights/new')}
                        className="flex items-center justify-center gap-2 bg-[#2F4F4F] text-white px-5 py-3 rounded-lg hover:bg-[#1F3F3F] transition-all font-bold text-[10px] uppercase tracking-widest shadow-sm"
                    >
                        <Plus suppressHydrationWarning size={14} />
                        <span>Compose Insight</span>
                    </button>
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Filters Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 gap-4">
                    <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4">
                        <div className="relative flex-grow sm:flex-grow-0">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[#2F4F4F] cursor-pointer pr-10"
                            >
                                {statusOptions.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown suppressHydrationWarning size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>

                        <div className="relative flex-grow sm:w-64">
                            <Search suppressHydrationWarning size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search repository..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#2F4F4F]"
                            />
                        </div>
                    </div>

                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden lg:block">
                        {filteredBlogs.length} Total Articles
                    </div>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="p-20 flex flex-col items-center justify-center space-y-4">
                            <Loader2 suppressHydrationWarning className="animate-spin text-[#2F4F4F]" size={40} />
                            <p className="text-slate-400 text-xs font-serif italic uppercase tracking-widest">Accessing Archive...</p>
                        </div>
                    ) : (
                        <table className="w-full text-left min-w-[900px]">
                            <thead>
                                <tr className="bg-slate-50/30">
                                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Manuscript Details</th>
                                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Publication State</th>
                                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Log Date</th>
                                    <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">Administrative Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm">
                                {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                                    <tr
                                        key={blog.id}
                                        onClick={() => router.push(`/admin/insights/${blog.id}`)}
                                        className="group hover:bg-slate-50/50 cursor-pointer transition-colors"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                                                    {blog.featuredImage ? (
                                                        <img src={blog.featuredImage} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-300">
                                                            <FileText suppressHydrationWarning size={20} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-serif font-bold text-slate-800 text-lg group-hover:text-[#2F4F4F] transition-colors leading-snug line-clamp-1">{blog.title}</div>
                                                    <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                                                        <span>{blog.author}</span>
                                                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                                        <span>{blog.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider ${getStatusBadge(blog.status)}`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-slate-500 font-mono text-xs">
                                            {formatDate(blog.publishDate)}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        router.push(`/admin/insights/${blog.id}`);
                                                    }}
                                                    className="p-2.5 text-slate-400 hover:text-[#2F4F4F] hover:bg-slate-50 rounded-lg transition-all"
                                                    title="Edit Article"
                                                >
                                                    <Pencil suppressHydrationWarning size={18} />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteClick(blog.id);
                                                    }}
                                                    className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                                                    title="Delete Manuscript"
                                                >
                                                    <Trash2 suppressHydrationWarning size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center space-y-3">
                                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                                                    <Search size={24} />
                                                </div>
                                                <p className="text-slate-400 italic text-sm font-serif">Empty Repository. No records found.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}

                    {/* Footer Info */}
                    <div className="bg-slate-50/50 p-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#2F4F4F] flex items-center justify-center text-white">
                                <Info suppressHydrationWarning size={16} />
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Administrative Note: Changes to "Published" manuscripts will reflect in the public domain immediately upon submission.
                            </p>
                        </div>
                    </div>
                </div>

                <DeleteConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleConfirmDelete}
                    title="Delete Manuscript"
                    message="Are you sure you want to delete this article? This action cannot be undone."
                    isDeleting={isDeleting}
                />

                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}
            </div>
        </div>
    );
}
