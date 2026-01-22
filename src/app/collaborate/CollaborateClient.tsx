'use client';

import { useState } from 'react';
import {
    Users,
    BookOpen,
    Shield,
    FlaskConical,
    ArrowRight,
    CheckCircle2,
    Loader2,
    Building2,
    Send
} from 'lucide-react';
import { engagementService } from '@/lib/services/engagementService';
import { EngagementType } from '@/types';

const paths = [
    {
        id: 'VOLUNTEER',
        title: 'Volunteer Program',
        icon: <Users suppressHydrationWarning size={24} />,
        desc: 'Join our grassroots effort. Support our administrative, research, and outreach activities as a dedicated volunteer.',
        benefits: ['Direct Social Impact', 'Skill Development', 'Community Network']
    },
    {
        id: 'FELLOWSHIP',
        title: 'Research Fellowship',
        icon: <BookOpen suppressHydrationWarning size={24} />,
        desc: 'For scholars and doctoral researchers focusing on political praxis, gender-responsive governance, and strategic intellect.',
        benefits: ['Access to Institutional Data', 'Peer Review Workshops', 'Scholarly Publication Support']
    },
    {
        id: 'INSTITUTIONAL PARTNERSHIP',
        title: 'Institutional Partnership',
        icon: <Building2 suppressHydrationWarning size={24} />,
        desc: 'For universities, NGOs, and global think tanks seeking to co-create research or implementation frameworks.',
        benefits: ['Cross-Institutional Research', 'Joint Advocacy Campaigns', 'Shared Knowledge Repositories']
    },
    {
        id: 'STRATEGIC ADVISORY',
        title: 'Strategic Advisory',
        icon: <Shield suppressHydrationWarning size={24} />,
        desc: 'For experienced political practitioners, former stateswomen, and policy architects to contribute to our analytical frameworks.',
        benefits: ['High-level Consultations', 'Praxis Policy Briefings', 'Simulation Lab Mentorship']
    }
];

export default function CollaborateClient() {
    const [selectedPath, setSelectedPath] = useState<EngagementType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        proposal: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPath) {
            alert("Please select an engagement path.");
            return;
        }

        setIsSubmitting(true);
        try {
            await engagementService.submitApplication({
                ...formData,
                type: selectedPath
            });
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred during submission. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-4">
                <div className="max-w-xl w-full bg-white p-12 text-center rounded-sm border border-slate-100 shadow-xl">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 suppressHydrationWarning size={40} />
                    </div>
                    <h1 className="text-3xl font-serif text-slate-900 mb-6 italic">Welcome to the Movement.</h1>
                    <p className="text-slate-500 leading-relaxed mb-10">
                        Thank you for your interest in AIPP. Our core team will review your message and reach out regarding the next steps in our journey together. Your strategic voice is invaluable to us.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-[#1A5261] text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#14414d] transition-all"
                    >
                        Return to Homepage
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FBFBFA] min-h-screen">
            {/* Header */}
            <header className="bg-white border-b border-slate-100 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-4">Join Our Mission</p>
                    <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight mb-8">
                        Lend Your Voice <br /> & Strategic Wisdom
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        AIPP works at the intersection of thought and action. Whether you are a scholar, a practitioner, or a passionate individual, there is a place for you in our movement.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Paths Grid */}
                    <div className="lg:col-span-12">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">Choose Your Engagement Path</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {paths.map((path) => (
                                <button
                                    key={path.id}
                                    onClick={() => setSelectedPath(path.id as EngagementType)}
                                    className={`text-left p-8 border transition-all relative flex flex-col h-full bg-white group ${selectedPath === path.id
                                        ? 'border-[var(--primary)] ring-1 ring-[var(--primary)] shadow-lg'
                                        : 'border-slate-100 hover:border-slate-300 shadow-sm'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${selectedPath === path.id ? 'bg-[var(--primary)] text-white' : 'bg-slate-50 text-slate-400'
                                        }`}>
                                        {path.icon}
                                    </div>
                                    <h3 className="text-lg font-serif text-slate-900 mb-3 italic">{path.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">{path.desc}</p>

                                    <ul className="space-y-2 mb-8">
                                        {path.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`mt-auto text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${selectedPath === path.id ? 'text-[var(--primary)]' : 'text-slate-300 group-hover:text-slate-600'
                                        }`}>
                                        {selectedPath === path.id ? 'Selected' : 'Select Path'} <ArrowRight size={12} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    {selectedPath && (
                        <div className="lg:col-span-8 lg:col-start-3 mt-12 bg-white border border-slate-100 p-8 sm:p-16 rounded-sm shadow-xl">
                            <div className="mb-12">
                                <h3 className="text-2xl font-serif text-slate-900 mb-4 italic">Engagement Proposal</h3>
                                <p className="text-sm text-slate-500">
                                    Path: <span className="font-bold text-[var(--primary)] uppercase tracking-widest ml-2">{selectedPath}</span>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-[var(--primary)] bg-transparent text-slate-900 font-medium transition-all"
                                            placeholder="Your name..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-[var(--primary)] bg-transparent text-slate-900 font-medium transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Affiliation / Organization</label>
                                    <input
                                        type="text"
                                        value={formData.organization}
                                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                        className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-[var(--primary)] bg-transparent text-slate-900 font-medium transition-all"
                                        placeholder="University, NGO, or Independent"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proposal / Area of Interest</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.proposal}
                                        onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                                        className="w-full border-2 border-slate-50 p-6 focus:outline-none focus:border-[var(--primary)] bg-slate-50/50 text-slate-900 font-serif leading-relaxed italic transition-all"
                                        placeholder="Tell us about your background, skills, and why you want to join our mission..."
                                    />
                                </div>

                                <div className="pt-8">
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-[#1A5261] text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#14414d] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                <span>Registering Interest...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                <span>Submit Interest</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </main>

            {/* Ethics Disclosure */}
            <section className="mt-20 py-16 bg-[#1A1F2B] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Shield suppressHydrationWarning size={32} className="mx-auto text-white/30 mb-6" />
                    <h3 className="text-xl font-serif mb-4 italic">Values & Ethical Commitment</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-2xl mx-auto">
                        AIPP is committed to the highest standards of intellectual integrity and social impact. All volunteers and partners are expected to uphold our core values of inclusivity, strategic wisdom, and political transformation. By submitting this interest form, you agree to join us in a spirit of collaborative praxis.
                    </p>
                </div>
            </section>
        </div>
    );
}
