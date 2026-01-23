'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mic, Eye, Brain, Shield, Target, ArrowRight, FileText, Newspaper, Radio, Loader2 } from 'lucide-react';
import { publicationService } from '@/lib/services/publicationService';
import { Publication } from '@/types';
import { Reveal, RevealList } from '@/components/ui/Reveal';

export default function CPAClient() {
    const [outputs, setOutputs] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOutputs = async () => {
            try {
                const data = await publicationService.getPublished();
                // Take latest 3
                setOutputs(data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching CPA outputs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOutputs();
    }, []);

    const getIcon = (category: string) => {
        switch (category) {
            case 'Policy Brief': return <Radio suppressHydrationWarning size={48} className="text-slate-300" />;
            case 'Report': return <Newspaper suppressHydrationWarning size={48} className="text-slate-300" />;
            default: return <FileText suppressHydrationWarning size={48} className="text-slate-300" />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-24 px-4 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <Reveal width="100%">
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">What We Offer</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                            Communications &<br />
                            Public Advocacy
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Bridging rigorous research with public discourse to amplify women in strategic, intellectual, and transformative democratic understanding through reflective political praxis.
                            </p>
                            <div className="flex justify-end items-start">
                                <Link href="#approach" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-[var(--primary)] transition-all">
                                    Our Approach <ArrowRight suppressHydrationWarning size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Image Section */}
            <section className="w-full h-[400px] relative bg-slate-200 overflow-hidden">
                <Image
                    src="/images/pillar_cpa_niqab.png"
                    alt="Communications & Public Advocacy"
                    fill
                    suppressHydrationWarning
                    className="object-cover"
                />
            </section>

            {/* Research-Informed Advocacy */}
            <section id="approach" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Side */}
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
                                Research-Informed<br />Advocacy
                            </h2>
                        </div>

                        {/* Right Side - Grid of Cards */}
                        <RevealList className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Mic suppressHydrationWarning size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Narrative Influence</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    We shape public discourse through strategically framed intellectual insights, ensuring that women's leadership is recognized for its epistemic contributions.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield suppressHydrationWarning size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Ethical Responsibility</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Maintaining the highest standards of integrity. Every campaign is crafted against a rigorous ethical framework that ensures intellectual honesty and political trust.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye suppressHydrationWarning size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Reflective Praxis</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Translating complex research into accessible public dialogues. Our work is not just to inform but to transform through strategic reflection on the political landscape.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Brain suppressHydrationWarning size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Knowledge Campaigns</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Designing and executing sustained efforts to educate, persuade, and positively influence policy by synthesizing bold arguments and rigorous data.
                                </p>
                            </div>
                        </RevealList>
                    </div>
                </div>
            </section>

            {/* Areas of Focus */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Strategic Direction</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16">
                        Areas of Focus
                    </h2>

                    <RevealList className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="border-l-2 border-slate-300 pl-8">
                            <h3 className="text-xl font-serif text-slate-900 mb-4">Public Discourse on Governance</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Participating in and shaping policy through some of the most prestigious platforms available, articulating perspectives that prioritize constructive deliberation and ensure the good of democratic dialogue is upheld.
                            </p>
                        </div>

                        <div className="border-l-2 border-slate-300 pl-8">
                            <h3 className="text-xl font-serif text-slate-900 mb-4">Women's Strategic Intellect</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Positioning women as serious actors in the field of strategic political theorization—not as symbolic participants, but as architects of leadership making a mark on complex policy domains.
                            </p>
                        </div>
                    </RevealList>
                </div>
            </section>

            {/* Recent Outputs */}
            <section className="py-20 px-4 bg-white min-h-[400px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                            Recent Outputs
                        </h2>
                        <Link href="/publications" className="text-sm font-bold text-slate-900 uppercase tracking-widest mt-4 md:mt-0 hover:text-[var(--primary)] transition-colors">
                            View the Full Archive <ArrowRight suppressHydrationWarning size={14} className="inline ml-1" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 suppressHydrationWarning size={40} className="animate-spin text-slate-200" />
                        </div>
                    ) : (
                        <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {outputs.length > 0 ? outputs.map((out) => (
                                <div key={out.id} className="group">
                                    <div className="bg-slate-50 aspect-[4/3] mb-6 flex items-center justify-center overflow-hidden border border-slate-100 relative">
                                        {out.imageUrl ? (
                                            <Image
                                                src={out.imageUrl}
                                                alt={out.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            getIcon(out.category)
                                        )}
                                    </div>
                                    <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2 font-bold">{out.category}</p>
                                    <h3 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2 min-h-[3.5rem]">
                                        {out.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-3 italic">
                                        {out.summary}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{out.year}</p>
                                </div>
                            )) : (
                                <div className="col-span-full py-12 text-center text-slate-400 italic font-serif">
                                    No strategic outputs registered in the repository.
                                </div>
                            )}
                        </RevealList>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif mb-10 leading-tight">
                        For shared intellectual purpose<br />and systemic change.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-block bg-white text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all">
                            Inquire for Collaboration
                        </Link>
                        <Link href="/about" className="inline-block border-2 border-white/40 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                            Support Our Mission
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom Quote */}
            <section className="py-16 px-4 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <p className="text-sm font-bold text-slate-900">Athena Institute for Political Praxis</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            A non-partisan think-tank dedicated to the intersection of women's strategic intellect, governance, and transformative political praxis.
                        </p>
                    </div>
                    <div className="md:w-2/3 md:border-l border-slate-200 md:pl-12">
                        <p className="text-lg text-slate-600 leading-relaxed italic">
                            "Redefining strategic politics and integrating truly democratic voices of women—beyond symbolism—into systemic processes of deliberative power."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
