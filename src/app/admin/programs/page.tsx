'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Plus,
    Search,
    ChevronDown,
    Loader2,
    Trash2,
    Info,
    Pencil,
} from 'lucide-react';
import { programService } from '@/lib/services/programService';
import { Program } from '@/types';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';
import Toast, { ToastType } from '@/components/ui/Toast';

const coreOfferings: Array<Program['coreOffering'] | 'All'> = ['All', 'RPI', 'SAS', 'CPA'];
const statusOptions = ['All', 'PUBLISHED', 'DRAFT', 'ARCHIVED'];

export default function ProgramsPage() {
    const router = useRouter();
    const [programs, setPrograms] = useState<Program[]>([]);
    const [loading, setLoading] = useState(true);
    const [coreOfferingFilter, setCoreOfferingFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // UI States
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        setLoading(true);
        try {
            const data = await programService.getAll();
            setPrograms(data);
        } catch (error) {
            console.error("Error fetching programs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation(); // Prevent row click
        setItemToDelete(id);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (!itemToDelete) return;
        setIsDeleting(true);
        try {
            await programService.delete(itemToDelete);
            await fetchPrograms(); // Refresh list
            setToast({ message: "Program deleted successfully", type: "success" });
            setShowDeleteModal(false);
            setItemToDelete(null);
        } catch (error) {
            console.error("Error deleting program:", error);
            setToast({ message: "Failed to delete program", type: "error" });
        } finally {
            setIsDeleting(false);
        }
    };

    const filteredPrograms = programs.filter(p => {
        const matchesOffering = coreOfferingFilter === 'All' || p.coreOffering === coreOfferingFilter;
        const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesOffering && matchesStatus && matchesSearch;
    });

    const formatDate = (date: any) => {
        if (!date) return '—';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleDateString();
    };

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            PUBLISHED: 'bg-emerald-100 text-emerald-700',
            DRAFT: 'bg-amber-100 text-amber-700',
            ARCHIVED: 'bg-slate-100 text-slate-500',
        };
        return styles[status] || styles.DRAFT;
    };

    return (
        <div className="flex h-[calc(100vh-73px)]">
            {/* Main Content */}
            <div className="flex-grow overflow-auto p-8">
                {/* Header */}
                <div className="mb-6">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                        ADMIN / PROGRAMS & SUB-PROGRAMS
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 font-serif">Programs Management</h1>
                            <p className="text-slate-500 mt-1 text-sm max-w-xl">
                                Structure institutional offerings for the Athena Institute. Ensure alignment with praxis guidelines.
                            </p>
                        </div>
                        <Link
                            href="/admin/programs/create"
                            className="flex items-center space-x-2 bg-[#2F4F4F] text-white px-5 py-3 rounded-lg hover:bg-[#1F3F3F] transition-colors font-medium"
                        >
                            <Plus suppressHydrationWarning size={18} />
                            <span>Create Program</span>
                        </Link>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                        <select
                            value={coreOfferingFilter}
                            onChange={(e) => setCoreOfferingFilter(e.target.value as any)}
                            className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F] cursor-pointer"
                        >
                            {coreOfferings.map((offering) => (
                                <option key={offering} value={offering}>
                                    Core Offering: {offering}
                                </option>
                            ))}
                        </select>
                        <ChevronDown suppressHydrationWarning size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>

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
                        <Search suppressHydrationWarning size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search ID or title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F]"
                        />
                    </div>
                </div>

                {/* Programs Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    {loading ? (
                        <div className="p-12 flex flex-col items-center justify-center space-y-4">
                            <Loader2 suppressHydrationWarning className="animate-spin text-slate-300" size={32} />
                            <p className="text-slate-400 text-sm font-serif italic uppercase tracking-widest">Accessing Offerings...</p>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Program Title</th>
                                    <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Core Offering</th>
                                    <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                    <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Log Date</th>
                                    <th className="text-right px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredPrograms.length > 0 ? filteredPrograms.map((program) => (
                                    <tr
                                        key={program.id}
                                        onClick={() => router.push(`/admin/programs/edit/${program.id}`)}
                                        className="cursor-pointer transition-colors hover:bg-slate-50/50"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-800">{program.title}</div>
                                            <div className="text-[10px] font-mono text-slate-400 mt-0.5 uppercase">ID: {program.id}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-bold text-slate-600">{program.coreOffering}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${getStatusBadge(program.status)}`}>
                                                {program.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-500 font-mono">
                                            {formatDate(program.createdDate)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); router.push(`/admin/programs/edit/${program.id}`); }}
                                                    className="p-1.5 text-slate-300 hover:text-[#B19B4C] hover:bg-amber-50 rounded-lg transition-all"
                                                    title="Edit Program"
                                                >
                                                    <Pencil suppressHydrationWarning size={18} />
                                                </button>
                                                <button
                                                    onClick={(e) => handleDeleteClick(e, program.id)}
                                                    className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                                                    title="Delete Program"
                                                >
                                                    <Trash2 suppressHydrationWarning size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic text-sm">
                                            No programmatic entries found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Institutional Guidance */}
                <div className="mt-6 bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[#2F4F4F] flex items-center justify-center text-white shrink-0">
                        <Info suppressHydrationWarning size={16} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Institutional Guidance</h4>
                        <p className="text-sm text-slate-500 leading-relaxed italic">
                            "All programmatic entries must undergo a secondary ethics review if they involve cross-border political praxis. Maintain academic neutrality and adhere to the AIPP Style Guide for internal documentation."
                        </p>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Program"
                message="Are you sure you want to permanently remove this program? This will delete all associated data and cannot be undone."
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
    );
}
