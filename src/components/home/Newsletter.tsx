'use client';
import { useState } from 'react';
import { subscriberService } from '@/lib/services/subscriberService';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await subscriberService.subscribe(email);
            setStatus('success');
            setMessage('Thank you for joining our intellectual network!');
            setEmail('');
        } catch (err: any) {
            setStatus('error');
            setMessage(err.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                    Receive Updates from AIPP
                </h2>
                <p className="text-lg text-slate-500 mb-10 font-medium">
                    Join our mailing list for updates on our research, events, and publications. We respect your privacy and are committed to ethical communication.
                </p>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-0 border border-slate-200 rounded-sm overflow-hidden">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-6 py-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none text-lg"
                            suppressHydrationWarning
                        />
                        <button
                            disabled={status === 'loading'}
                            className="px-10 py-4 bg-[#1A5261] text-white font-bold hover:bg-[#14414d] transition-all disabled:opacity-50 text-lg uppercase tracking-widest"
                            suppressHydrationWarning
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </div>

                    {message && (
                        <div className={`mt-6 text-sm font-bold uppercase tracking-widest ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
