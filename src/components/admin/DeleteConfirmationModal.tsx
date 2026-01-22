'use client';

import { AlertTriangle, Loader2 } from 'lucide-react';

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
    isDeleting?: boolean;
}

export default function DeleteConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title = "Delete Item",
    message = "Are you sure you want to delete this item? This action cannot be undone.",
    isDeleting = false
}: DeleteConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100">
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500 shadow-sm">
                        <AlertTriangle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8 px-4">
                        {message}
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={onClose}
                            disabled={isDeleting}
                            className="flex-1 py-3.5 px-4 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={isDeleting}
                            className="flex-1 py-3.5 px-4 bg-rose-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20"
                        >
                            {isDeleting ? <Loader2 size={14} className="animate-spin" /> : null}
                            <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
