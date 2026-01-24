'use client';

import React from 'react';
import { Gavel, Scale, FileText, ArrowLeft, Globe } from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#FBFBFA] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-serif">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-stone-200 pb-12">
                    <div className="flex items-center gap-3 text-[#B19B4C] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                        <Gavel size={16} />
                        Legal Framework
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-stone-900 leading-tight">
                        Terms of Use
                    </h1>
                    <p className="mt-6 text-xl text-stone-500 italic max-w-2xl leading-relaxed">
                        "Governing the use of intellectual assets and engagement within the Athena Institute's digital sphere."
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16 text-stone-800 leading-relaxed">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <Globe className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Institutional Scope</h2>
                        </div>
                        <p className="text-lg">
                            By accessing this domain, users agree to adhere to the standards of academic integrity and professional conduct established by the Athena Institute for Political Praxis. These terms apply to all digital interactions, research downloads, and collaborative simulations hosted under the AIPP network.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <Scale className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Intellectual Assets</h2>
                        </div>
                        <p className="text-lg">
                            All insights, articles, and programmatic architectures presented on this platform are the property of AIPP unless otherwise cited. Users are granted a limited license for individual research and educational purposes. Secondary publication or commercial redistribution requires explicit written authorization from the Institute.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-900">
                            <FileText className="text-[#B19B4C]" size={24} />
                            <h2 className="text-2xl font-bold uppercase tracking-wide">Praxis Limitations</h2>
                        </div>
                        <p className="text-lg">
                            The AIPP provides strategic analyses and research summaries "as is." While we maintain the highest standards of accuracy, the application of our research within external political or corporate praxis remains the sole responsibility of the user. The Institute accepts no liability for subsequent strategic outcomes.
                        </p>
                    </section>

                    <section className="pt-12 border-stone-100 italic text-stone-500">
                        <p>
                            Jurisdiction for any discourse regarding these terms shall be governed by the laws applicable to the Institute's primary seat of operations.
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
