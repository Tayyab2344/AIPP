'use client';

import { useState, useEffect } from 'react';
import {
    Users,
    Search,
    ChevronDown,
    X,
    Loader2,
    Trash2,
    Building2,
    CheckCircle2,
    Clock,
    ArrowRight,
    ExternalLink
} from 'lucide-react';
import { engagementService } from '@/lib/services/engagementService';
import { Collaboration } from '@/types';

export default function AdminCollaborations() {
    const [collaborations, setCollaborations] = useState<Collaboration[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchCollaborations();
    }, []);

    const fetchCollaborations = async () => {
        setLoading(true);
        try {
            const data = await engagementService.getAll();
            setCollaborations(data);
        } catch (error) {
            console.error("Error fetching collaborations:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id: string, status: Collaboration['status']) => {
        try {
            await engagementService.updateStatus(id, status);
            await fetchCollaborations();
            if (selectedCollab?.id === id) setSelectedCollab({ ...selectedCollab, status });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this engagement record?")) return;
        try {
            await engagementService.delete(id);
            await fetchCollaborations();
            if (selectedCollab?.id === id) setSelectedCollab(null);
        } catch (error) {
            console.error("Error deleting record:", error);
        }
    };

    const filtered = collaborations.filter(c =>
        c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.organization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'accepted': return 'bg-emerald-100 text-emerald-700';
            case 'reviewed': return 'bg-blue-100 text-blue-700';
            case 'declined': return 'bg-rose-100 text-rose-700';
            default: return 'bg-amber-100 text-amber-700';
        }
    };

    return (
        <div className="flex h-[calc(100vh-73px)]">
            <div className="flex-grow p-8 overflow-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold font-serif text-slate-900">Mission Engagement</h1>
                    <p className="text-slate-500 mt-1">Review volunteer interests, fellowships, and partnership inquiries.</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="relative w-full max-w-md">
                        <Search suppressHydrationWarning className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, organization, or role..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[var(--primary)]"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="p-20 flex flex-col items-center justify-center space-y-4">
                            <Loader2 suppressHydrationWarning className="animate-spin text-slate-300" size={40} />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Loading Proposals...</p>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="text-left px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Applicant</th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institutional Type</th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                                    <th className="text-right px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filtered.length > 0 ? filtered.map((collab) => (
                                    <tr
                                        key={collab.id}
                                        onClick={() => setSelectedCollab(collab)}
                                        className={`cursor-pointer transition-colors ${selectedCollab?.id === collab.id ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900">{collab.fullName}</div>
                                            <div className="text-xs text-slate-500">{collab.organization || 'Individual'}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded uppercase tracking-widest">
                                                {collab.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${getStatusStyle(collab.status)}`}>
                                                {collab.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[10px] font-bold text-slate-400 font-mono">
                                            {collab.createdAt?.toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDelete(collab.id); }}
                                                className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                                            >
                                                <Trash2 suppressHydrationWarning size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-400 italic">No proposals found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Sidebar Details */}
            {selectedCollab && (
                <div className="w-[450px] border-l border-slate-200 bg-white shadow-2xl overflow-auto flex flex-col">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engagement Review</h2>
                        <button onClick={() => setSelectedCollab(null)} className="p-1 text-slate-400 hover:text-slate-600">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-8 space-y-8 flex-grow">
                        <div>
                            <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-2">{selectedCollab.type}</p>
                            <h3 className="text-2xl font-serif text-slate-900 leading-tight mb-2">{selectedCollab.fullName}</h3>
                            <p className="text-slate-500 font-medium">{selectedCollab.organization || 'Individual Contributor'}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Email Domain</p>
                                <p className="text-sm font-bold text-slate-700 truncate">{selectedCollab.email}</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${selectedCollab.status === 'accepted' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                    <p className="text-[10px] font-bold uppercase tracking-widest">{selectedCollab.status}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 block">Personal Message / Proposal</label>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed italic whitespace-pre-wrap font-serif">
                                "{selectedCollab.proposal}"
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Strategic Actions</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleUpdateStatus(selectedCollab.id, 'accepted')}
                                    className="px-4 py-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all rounded"
                                >
                                    Accept Interest
                                </button>
                                <button
                                    onClick={() => handleUpdateStatus(selectedCollab.id, 'reviewed')}
                                    className="px-4 py-3 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all rounded"
                                >
                                    Mark Reviewed
                                </button>
                                <button
                                    onClick={() => handleUpdateStatus(selectedCollab.id, 'declined')}
                                    className="px-4 py-3 border border-rose-200 text-rose-600 text-[10px] font-bold uppercase tracking-widest hover:bg-rose-50 transition-all rounded"
                                >
                                    Decline Inquiry
                                </button>
                                <a
                                    href={`mailto:${selectedCollab.email}`}
                                    className="px-4 py-3 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded text-center"
                                >
                                    Contact Applicant
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
