'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#FBFBFA] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-serif">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-stone-200 pb-12">
                    <div className="flex items-center gap-3 text-[#B19B4C] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                        <Shield size={16} />
                        Institutional Protocols
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-stone-900 leading-tight">
                        Privacy Protocol
                    </h1>
                    <p className="mt-6 text-xl text-stone-500 italic max-w-2xl leading-relaxed">
                        "Defining the parameters of data sovereignty and institutional confidentiality within the AIPP research nexus."
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16 text-stone-800 leading-relaxed">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <Eye className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Data Collection Philosophy</h2>
                        </div>
                        <p className="text-lg">
                            The Athena Institute for Political Praxis (AIPP) operates on a principle of minimal data extraction. We collect only what is necessary to facilitate research collaboration, program enrollment, and intellectual dissemination. This includes voluntarily provided identifiers such as names, institutional affiliations, and electronic contact details.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <Lock className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Security & Sovereignty</h2>
                        </div>
                        <p className="text-lg">
                            Your data is stored within secured cloud infrastructure protected by AES-256 encryption. We do not engage in the commercialization of personal datasets. Access to individual data points is restricted to authorized AIPP personnel for the sole purpose of academic and strategic outreach.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <FileText className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Cookie Protocols</h2>
                        </div>
                        <p className="text-lg">
                            Our digital domain utilizes essential cookies to maintain session integrity and administrative access. Third-party analytical tools may be deployed to monitor general traffic patterns without identifying individual entities, aiding us in optimizing the institutional user experience.
                        </p>
                    </section>

                    <section className="pt-12 border-stone-100 italic text-stone-500">
                        <p>
                            For inquiries regarding data rectification or institutional transparency, please contact the AIPP Data Protection Officer at <span className="text-stone-900 font-bold select-all">dpo@aipp.institute</span>.
                        </p>
                    </section>
                </div>

                {/* Footer Link */}
                <div className="mt-20 pt-12 border-t border-stone-100">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors font-bold text-xs uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Return to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
