'use client';

import { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    FileText,
    Download,
    Eye,
    Trash2,
    Loader2,
    CheckCircle2,
    History,
    FileDown,
    ArrowUpRight,
    Pencil,
} from 'lucide-react';
import { publicationService } from '@/lib/services/publicationService';
import { Publication } from '@/types';
import Link from 'next/link';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';

export default function AdminPublications() {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Delete Modal State
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchPublications();
    }, []);

    const fetchPublications = async () => {
        try {
            const data = await publicationService.getAll();
            setPublications(data);
        } catch (error) {
            console.error("Error fetching publications:", error);
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
            await publicationService.delete(itemToDelete);
            setPublications(publications.filter(p => p.id !== itemToDelete));
            setShowDeleteModal(false);
            setItemToDelete(null);
        } catch (error) {
            console.error("Error deleting publication:", error);
            alert("Failed to delete publication.");
        } finally {
            setIsDeleting(false);
        }
    };

    const filteredPublications = publications.filter(pub =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#B19B4C] uppercase tracking-[0.2em] mb-2">
                        <History suppressHydrationWarning size={12} /> Institutional Repository
                    </div>
                    <h1 className="text-3xl font-serif text-slate-900 leading-tight">Publications Archive</h1>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Manage formal research, policy briefs, and analytical reports.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:bg-white rounded transition-all border border-slate-200">
                        <FileDown suppressHydrationWarning size={14} /> Export Meta
                    </button>
                    <Link
                        href="/admin/publications/new"
                        className="bg-[#2F4F4F] text-white px-6 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#1F3F3F] transition-all flex items-center gap-2 shadow-lg shadow-[#2F4F4F]/20"
                    >
                        <Plus suppressHydrationWarning size={16} /> New Publication
                    </Link>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                            <CheckCircle2 suppressHydrationWarning size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12% vs LY</span>
                    </div>
                    <div className="text-2xl font-serif text-slate-900">{publications.length}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Records</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-[#FDF8E7] text-[#B19B4C] rounded-lg">
                            <Download suppressHydrationWarning size={20} />
                        </div>
                    </div>
                    <div className="text-2xl font-serif text-slate-900">4.2k</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Downloads</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Eye suppressHydrationWarning size={20} />
                        </div>
                    </div>
                    <div className="text-2xl font-serif text-slate-900">12.8k</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Abstract Views</div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden shadow-slate-200/50">
                <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
                    <div className="relative flex-grow max-w-md">
                        <Search suppressHydrationWarning className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by title, category, or author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#B19B4C] transition-colors"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                            <Filter suppressHydrationWarning size={16} /> Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="py-24 flex flex-col items-center justify-center space-y-4">
                            <Loader2 suppressHydrationWarning className="animate-spin text-[#2F4F4F]" size={40} />
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">Consulting the Archives...</p>
                        </div>
                    ) : filteredPublications.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Publication Detail</th>
                                    <th className="px-8 py-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sphere</th>
                                    <th className="px-8 py-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vintage</th>
                                    <th className="px-8 py-5 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-right text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredPublications.map((pub) => (
                                    <tr key={pub.id} className="group hover:bg-slate-50/80 transition-all cursor-pointer">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-[#2F4F4F] group-hover:text-white transition-all">
                                                    <FileText suppressHydrationWarning size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#B19B4C] transition-colors max-w-sm line-clamp-1">
                                                        {pub.title}
                                                    </div>
                                                    <div className="text-[10px] text-slate-400 font-medium line-clamp-1 mt-1">
                                                        {pub.summary}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 uppercase tracking-widest">
                                                {pub.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-xs font-serif italic text-slate-600">{pub.year}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${pub.publishStatus === 'published' ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-300'}`} />
                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${pub.publishStatus === 'published' ? 'text-emerald-600' : 'text-slate-400'}`}>
                                                    {pub.publishStatus === 'published' ? 'Repository' : 'Draft'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/publications/${pub.id}`}
                                                    className="p-2 text-slate-400 hover:text-[#B19B4C] hover:bg-white rounded-lg transition-all"
                                                    title="Edit Publication"
                                                >
                                                    <Pencil suppressHydrationWarning size={18} />
                                                </Link>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleDeleteClick(pub.id); }}
                                                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-white rounded-lg transition-all"
                                                    title="Delete Publication"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="py-24 flex flex-col items-center justify-center text-center px-4">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                                <FileText size={32} />
                            </div>
                            <h3 className="text-lg font-serif text-slate-900 mb-2 italic">The Archives are Silent</h3>
                            <p className="text-sm text-slate-500 max-w-xs">No publications match your current inquiry. Begin a new scholar's record by clicking the button above.</p>
                        </div>
                    )}
                </div>
            </div>

            <DeleteConfirmationModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                title="Archive Removal"
                message="Are you sure you want to remove this publication from the formal repository? This action is permanent."
                isDeleting={isDeleting}
            />
        </div>
    );
}
