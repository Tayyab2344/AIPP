'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ArrowLeft, CheckCircle2, ShieldAlert, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            await sendPasswordResetEmail(auth, email);
            setStatus('success');
            setMessage('Password reset link has been sent to your email.');
        } catch (err: any) {
            setStatus('error');
            setMessage('Failed to send reset email. Please verify the address.');
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex bg-white">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
                <Image
                    src="/images/hero_hijab_niqab.png"
                    alt="Athena Institute"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-transparent"></div>

                <div className="relative z-10 flex flex-col justify-between p-12 h-full">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/aipp-logo.png"
                                alt="AIPP Logo"
                                className="h-12 w-12 object-contain"
                            />
                            <span className="text-white font-bold text-lg">AIPP</span>
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif text-white leading-tight">
                            Security &<br />
                            Account Recovery
                        </h2>
                        <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                            Securely restore access to the administrative gateway.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm">
                        © 2024 Athena Institute for Political Praxis
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-xl mb-4">
                            <Building2 size={32} />
                        </div>
                        <h1 className="text-xl font-serif text-slate-900">Athena Institute</h1>
                    </div>

                    <div className="bg-white border border-slate-200 p-8 rounded-sm">
                        <Link href="/admin/login" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest mb-6 transition-colors">
                            <ArrowLeft size={14} /> Back to Login
                        </Link>

                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] text-center mb-8 pb-4 border-b border-slate-100">
                            Reset Password
                        </h2>

                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Check your email</h3>
                                <p className="text-slate-500 text-sm mb-6">
                                    We have sent password recovery instructions to <br />
                                    <span className="font-semibold text-slate-700">{email}</span>
                                </p>
                                <Link href="/admin/login" className="inline-block bg-slate-900 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest rounded hover:bg-slate-800 transition-all">
                                    Return to Login
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleReset} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                        Registered Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        placeholder="e.g. admin@aipp.org"
                                    />
                                    <p className="text-[10px] text-slate-400 leading-relaxed">
                                        Enter the email address associated with your administrative account.
                                    </p>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-start gap-3 p-4 bg-rose-50 text-rose-700 text-sm font-medium">
                                        <ShieldAlert size={18} className="shrink-0 mt-0.5" />
                                        <span>{message}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-slate-900 text-white py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Sending Link...' : 'Send Recovery Link'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
