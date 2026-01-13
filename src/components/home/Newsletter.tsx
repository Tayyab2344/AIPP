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
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[4rem] bg-slate-900 border-8 border-white p-12 md:p-24 shadow-2xl">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-widest mb-6">
                                <span className="w-12 h-[2px] bg-[var(--primary)]" />
                                <span>Newsletter</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                                Join our <br /> <span className="text-[var(--primary)]">Intellectual Network</span>
                            </h2>
                            <p className="text-slate-400 text-xl leading-relaxed font-medium">
                                Get monthly insights on political strategy, gender-responsive governance, and AIPP's latest research.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="relative">
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-8 py-6 rounded-3xl bg-white/5 border-2 border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--primary)] transition-all text-lg font-bold"
                                />
                                <button
                                    disabled={status === 'loading'}
                                    className="px-8 py-6 rounded-3xl bg-[var(--primary)] text-white font-black hover:opacity-90 transition-all disabled:opacity-50 text-xl uppercase tracking-widest shadow-2xl shadow-[var(--primary)]/20"
                                >
                                    {status === 'loading' ? 'Joining...' : 'Subscribe'}
                                </button>
                            </div>

                            {message && (
                                <div className={`mt-6 text-sm font-black uppercase tracking-widest ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
