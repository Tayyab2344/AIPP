'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { updateEmail, updatePassword, updateProfile, User } from 'firebase/auth';
import { Settings, Lock, Mail, User as UserIcon, AlertCircle, CheckCircle2 } from 'lucide-react';

import Toast, { ToastType } from '@/components/ui/Toast';

export default function AdminSettings() {
    const [user, setUser] = useState<User | null>(null);

    // Profile State
    const [displayName, setDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    // Email State
    const [newEmail, setNewEmail] = useState('');

    // Password State
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
                setDisplayName(u.displayName || '');
                setNewEmail(u.email || '');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        setIsLoading(true);

        try {
            await updateProfile(user, { displayName });
            setToast({ message: "Profile updated successfully", type: "success" });
        } catch (error: any) {
            console.error(error);
            setToast({ message: error.message || "Failed to update profile", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        setIsLoading(true);

        try {
            await updateEmail(user, newEmail);
            setToast({ message: "Email updated successfully", type: "success" });
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/requires-recent-login') {
                setToast({ message: "Please logout and login again to update your email", type: "error" });
            } else {
                setToast({ message: error.message || "Failed to update email", type: "error" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        if (newPassword !== confirmPassword) {
            setToast({ message: "Passwords do not match", type: "error" });
            return;
        }

        if (newPassword.length < 6) {
            setToast({ message: "Password must be at least 6 characters", type: "error" });
            return;
        }

        setIsLoading(true);

        try {
            await updatePassword(user, newPassword);
            setToast({ message: "Password updated successfully", type: "success" });
            setNewPassword('');
            setConfirmPassword('');
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/requires-recent-login') {
                setToast({ message: "Please logout and login again to update your password", type: "error" });
            } else {
                setToast({ message: error.message || "Failed to update password", type: "error" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h2 className="text-2xl font-serif text-slate-800 mb-2">Account Settings</h2>
                <p className="text-slate-500 text-sm">Manage your administrative credentials and security preferences.</p>
            </div>

            {/* Profile Section - Full Width */}
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="p-2 bg-slate-100 text-slate-600 rounded">
                        <UserIcon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Profile Details</h3>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Display Name</label>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                required
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="flex-1 px-4 py-3 bg-white border border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-900"
                                placeholder="e.g. Tayyaba Atiq"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-slate-900 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-800 transition-all disabled:opacity-50"
                            >
                                {isLoading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Update Section */}
                <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded">
                            <Mail size={20} />
                        </div>
                        <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Email Address</h3>
                    </div>

                    <form onSubmit={handleUpdateEmail} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Email</label>
                            <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-400 font-mono text-sm rounded cursor-not-allowed">
                                {user?.email}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">New Email</label>
                            <input
                                type="email"
                                required
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-900"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || newEmail === user?.email}
                            className="bg-slate-900 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center gap-2"
                        >
                            {isLoading ? 'Updating...' : 'Update Email'}
                        </button>
                    </form>
                </div>

                {/* Password Update Section */}
                <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="p-2 bg-amber-50 text-amber-600 rounded">
                            <Lock size={20} />
                        </div>
                        <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Security</h3>
                    </div>

                    <form onSubmit={handleUpdatePassword} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">New Password</label>
                            <input
                                type="password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-900"
                                placeholder="Min. 6 characters"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Confirm Password</label>
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-900"
                                placeholder="Re-enter new password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || !newPassword}
                            className="bg-slate-900 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center gap-2"
                        >
                            {isLoading ? 'Updating...' : 'Change Password'}
                        </button>
                    </form>
                </div>
            </div>

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
