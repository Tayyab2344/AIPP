'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, Download, Trash2, Mail, Loader2 } from 'lucide-react';
import { subscriberService } from '@/lib/services/subscriberService';
import { Subscriber } from '@/types';
import DeleteConfirmationModal from '@/components/admin/DeleteConfirmationModal';
import Toast, { ToastType } from '@/components/ui/Toast';

export default function SubscribersAdmin() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // UI States
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        setLoading(true);
        try {
            const data = await subscriberService.getSubscribers();
            setSubscribers(data as Subscriber[]);
        } catch (error) {
            console.error("Error fetching subscribers:", error);
            setToast({ message: "Failed to load subscribers", type: "error" });
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
            await subscriberService.deleteSubscriber(itemToDelete);
            await fetchSubscribers();
            setToast({ message: "Subscriber removed successfully", type: "success" });
        } catch (error) {
            console.error("Error deleting subscriber:", error);
            setToast({ message: "Failed to remove subscriber", type: "error" });
        } finally {
            setIsDeleting(false);
            setShowDeleteModal(false);
            setItemToDelete(null);
        }
    };

    const filteredSubscribers = subscribers.filter(sub =>
        sub.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatDate = (date: any) => {
        if (!date) return '—';
        const d = date?.toDate ? date.toDate() : new Date(date);
        return d.toLocaleDateString();
    };
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Email Subscribers</h1>
                    <p className="text-slate-500 mt-1">View and manage your community mailing list.</p>
                </div>
                <Button className="space-x-2 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20">
                    <Download suppressHydrationWarning size={18} />
                    <span>Export CSV</span>
                </Button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative max-w-md">
                        <Search suppressHydrationWarning className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="p-16 flex flex-col items-center justify-center space-y-4">
                            <Loader2 suppressHydrationWarning className="animate-spin text-emerald-500" size={32} />
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Synchronizing Network...</p>
                        </div>
                    ) : filteredSubscribers.length > 0 ? (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">
                                    <th className="px-8 py-5">Subscriber</th>
                                    <th className="px-8 py-5">Subscribed Date</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredSubscribers.map((sub: Subscriber) => (
                                    <tr key={sub.id} className="hover:bg-slate-50/50 transition-all group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                                    <Mail suppressHydrationWarning size={20} />
                                                </div>
                                                <p className="font-bold text-slate-900 leading-tight">{sub.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-slate-500 font-mono">
                                            {formatDate(sub.subscribedDate)}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end space-x-1">
                                                <Button
                                                    onClick={() => handleDeleteClick(sub.id)}
                                                    variant="ghost"
                                                    size="sm"
                                                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 suppressHydrationWarning size={18} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="p-16 text-center text-slate-400 italic text-sm">
                            {searchQuery ? 'No subscribers found matching your search.' : 'Your intellectual network is currently empty.'}
                        </div>
                    )}
                </div>
            </div>

            <DeleteConfirmationModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                title="Remove Subscriber"
                message="Are you sure you want to remove this subscriber from the network? This action cannot be undone."
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
