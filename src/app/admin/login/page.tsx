'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ShieldAlert, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/admin/dashboard');
        } catch (err: any) {
            setError('Invalid credentials or unauthorized access. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex bg-white">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
                <img
                    src="/images/strategic_learning_hijab.png"
                    alt="Athena Institute"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-transparent"></div>

                {/* Overlay Content */}
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
                            Strategic Intellect.<br />
                            Political Praxis.
                        </h2>
                        <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                            The administrative gateway to advancing women's leadership in global governance.
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm">
                        © 2024 Athena Institute for Political Praxis
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-xl mb-4">
                            <Building2 size={32} />
                        </div>
                        <h1 className="text-xl font-serif text-slate-900">Athena Institute for Political Praxis</h1>
                    </div>

                    {/* Desktop Title */}
                    <div className="hidden lg:block mb-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-xl mb-6">
                            <Building2 size={28} />
                        </div>
                        <h1 className="text-2xl font-serif text-slate-900">Athena Institute for Political Praxis</h1>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white border border-slate-200 p-8 rounded-sm">
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] text-center mb-8 pb-4 border-b border-slate-100">
                            Administrator Access
                        </h2>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                    placeholder="e.g. Connect.aipp@gmail.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                        Password
                                    </label>
                                    <button type="button" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                                        Forgot password?
                                    </button>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-4 pr-12 bg-slate-50 border border-slate-200 focus:border-slate-400 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        placeholder="Enter your credentials"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="flex items-start gap-3 p-4 bg-rose-50 text-rose-700 text-sm font-medium">
                                    <ShieldAlert size={18} className="shrink-0 mt-0.5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-slate-900 text-white py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all disabled:opacity-50"
                            >
                                {loading ? 'Authenticating...' : 'Login to Portal'}
                            </button>
                        </form>

                        {/* Security Notice */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
                            <ShieldAlert size={16} className="text-slate-400 shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-500 leading-relaxed">
                                This is a restricted administrative portal of the Athena Institute. Unauthorized access attempts are automatically logged and monitored by AIPP security protocols.
                            </p>
                        </div>
                    </div>

                    {/* Footer for mobile */}
                    <p className="lg:hidden text-center mt-8 text-xs text-slate-400">
                        © 2024 Athena Institute for Political Praxis
                    </p>
                </div>
            </div>
        </div>
    );
}
