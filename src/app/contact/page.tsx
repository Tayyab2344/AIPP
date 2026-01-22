"use client";

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { inquiryService, ContactInquiry } from '@/lib/services/inquiryService';

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactInquiry>({
        fullName: '',
        email: '',
        affiliation: '',
        natureOfInquiry: 'Research Collaboration',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await inquiryService.submitInquiry(formData);
            setStatus('success');
            setStatusMessage('Your inquiry has been successfully submitted. We will contact you shortly.');
            setFormData({
                fullName: '',
                email: '',
                affiliation: '',
                natureOfInquiry: 'Research Collaboration',
                message: ''
            });
        } catch (error: any) {
            setStatus('error');
            setStatusMessage(error.message || 'Failed to submit inquiry. Please try again.');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Information */}
                    <div className="lg:col-span-5 space-y-12">
                        <header>
                            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-8">
                                Institutional Engagement & <br /> Inquiry
                            </h1>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                                The Athena Institute for Political Praxis invites scholars, practitioners, and strategic partners to engage in aligned inquiries and collaborative research aimed at redefining political strategy.
                            </p>
                        </header>

                        <div className="space-y-10">
                            <div>
                                <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-4">Institutional Access</h2>
                                <div className="border-l-2 border-slate-100 pl-6 space-y-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Official Inquiry</p>
                                        <p className="text-lg text-slate-900 font-medium">Connect.aipp@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Strategic Discourse</p>
                                        <div className="flex gap-4 text-slate-900 font-bold text-sm">
                                            <a href="https://www.linkedin.com/company/athena-institute-for-political-praxis-aipp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
                                            <a href="https://x.com/aipp_institute" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">X (Twitter)</a>
                                            <a href="https://substack.com/@aippdiscourse" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">Substack</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-sm">
                                <h2 className="text-xl font-serif text-slate-900 mb-4">Partnerships & Engagement</h2>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    AIPP maintains an open mandate for collaboration with universities, think tanks, and policy platforms. Our engagement is predicated on shared purpose, rigorous intellectual exchange, and the advancement of strategic praxis.
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-4 font-medium">
                                    Proposals for institutional affiliation or joint programmatic ventures should be submitted via the formal inquiry channel.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Communication Ethics</h2>
                                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-medium">
                                    All correspondence is handled with strict confidentiality. AIPP adheres to ethical research standards and ensures that contact information is used solely for the purpose of professional engagement and authorized institutional updates.
                                </p>
                            </div>

                            {/* Refined architecture image */}
                            <div className="w-full h-64 overflow-hidden rounded-sm bg-slate-100">
                                <img
                                    src="/images/pillar_rpi_hijab.png"
                                    alt="AIPP Institution"
                                    className="w-full h-full object-cover grayscale opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border border-slate-100 p-8 sm:p-12 md:p-16 rounded-sm shadow-sm md:shadow-2xl md:shadow-slate-100">
                            <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-10 border-b border-slate-100 pb-6 uppercase tracking-wider">
                                Formal Inquiry Submission
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            suppressHydrationWarning
                                            className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                                            placeholder="Enter your legal name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            suppressHydrationWarning
                                            className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                                            placeholder="Institutional email address"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Affiliation / Organization <span className="text-slate-400">(optional)</span></label>
                                    <input
                                        type="text"
                                        name="affiliation"
                                        value={formData.affiliation}
                                        onChange={handleChange}
                                        suppressHydrationWarning
                                        className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
                                        placeholder="University, Think Tank, or Agency"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Nature of Inquiry</label>
                                    <select
                                        name="natureOfInquiry"
                                        value={formData.natureOfInquiry}
                                        onChange={handleChange}
                                        suppressHydrationWarning
                                        className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all text-slate-900 font-medium appearance-none cursor-pointer"
                                    >
                                        <option>Research Collaboration</option>
                                        <option>Strategic Partnership</option>
                                        <option>Institutional Membership</option>
                                        <option>Policy Inquiry</option>
                                        <option>General Correspondence</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all resize-none text-slate-900 font-medium placeholder:text-slate-400"
                                        placeholder="Please provide a concise description of your inquiry or proposal."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        suppressHydrationWarning
                                        className="bg-[#1A5261] text-white px-10 py-5 font-bold hover:bg-[#14414d] transition-all flex items-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50"
                                    >
                                        {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                                        <ArrowRight suppressHydrationWarning size={18} />
                                    </button>
                                    <p className="mt-4 text-[10px] text-slate-400 italic">
                                        A response can be expected within 3-5 business days for all formal inquiries.
                                    </p>
                                </div>

                                {status === 'success' && (
                                    <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-sm font-bold text-sm">
                                        <CheckCircle2 suppressHydrationWarning size={20} />
                                        {statusMessage}
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-rose-50 text-rose-700 rounded-sm font-bold text-sm">
                                        {statusMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
