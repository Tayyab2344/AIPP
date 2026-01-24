'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, X, Loader2 } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'loading';

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (type !== 'loading') {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(onClose, 300); // Wait for fade-out animation
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose, type]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle2 className="text-emerald-500" size={20} />;
            case 'error':
                return <XCircle className="text-rose-500" size={20} />;
            case 'loading':
                return <Loader2 className="text-violet-500 animate-spin" size={20} />;
        }
    };

    const getBgColor = () => {
        switch (type) {
            case 'success':
                return 'bg-emerald-50 border-emerald-100';
            case 'error':
                return 'bg-rose-50 border-rose-100';
            case 'loading':
                return 'bg-violet-50 border-violet-100';
        }
    };

    return (
        <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border shadow-xl ${getBgColor()}`}>
                {getIcon()}
                <p className="text-sm font-bold text-slate-900 tracking-tight">{message}</p>
                {type !== 'loading' && (
                    <button onClick={() => setIsVisible(false)} className="ml-4 text-slate-400 hover:text-slate-600 transition-colors">
                        <X size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
