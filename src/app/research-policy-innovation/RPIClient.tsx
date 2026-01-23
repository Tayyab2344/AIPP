'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Lightbulb, Search, Award, Globe, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { publicationService } from '@/lib/services/publicationService';
import { programService } from '@/lib/services/programService';
import { Program, Publication } from '@/types';

export default function RPIClient() {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [outputs, setOutputs] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingOutputs, setLoadingOutputs] = useState(true);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const data = await programService.getPublished();
                setPrograms(data.filter(p => p.coreOffering === 'RPI'));
            } catch (error: any) {
                if (error.code === 'permission-denied') {
                    console.warn("Firestore permissions missing. Using fallback data for Programs.");
                    setPrograms([
                        {
                            id: 'fallback-1',
                            title: 'Strategic Governance Initiative',
                            description: 'A comprehensive framework for analyzing and restructuring governance models to be more inclusive and effective.',
                            coreOffering: 'RPI',
                            status: 'PUBLISHED',
                            modules: ['Institutional Analysis', 'Policy Design', 'Implementation Strategy'],
                            shortDescription: 'A comprehensive framework for analyzing and restructuring governance models.',
                            detailedDescription: 'A comprehensive framework for analyzing and restructuring governance models to be more inclusive and effective.',
                            connectedEntities: [],
                            createdDate: new Date()

                        },
                        {
                            id: 'fallback-2',
                            title: 'Women in Political/Public Life',
                            description: 'Examining the systemic barriers and strategic opportunities for women in high-level political leadership.',
                            coreOffering: 'RPI',
                            status: 'PUBLISHED',
                            modules: ['Leadership Dynamics', 'Electoral Strategy', 'Public Discourse'],
                            shortDescription: 'Examining the systemic barriers and strategic opportunities for women in high-level political leadership.',
                            detailedDescription: 'Examining the systemic barriers and strategic opportunities for women in high-level political leadership.',
                            connectedEntities: [],
                            createdDate: new Date()
                        }

                    ]);
                } else {
                    console.error("Error fetching RPI programs:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        const fetchOutputs = async () => {
            try {
                const data = await publicationService.getPublished();
                setOutputs(data.slice(0, 3));
            } catch (error: any) {
                if (error.code === 'permission-denied') {
                    console.warn("Firestore permissions missing. Using fallback data for Outputs.");
                    setOutputs([
                        {
                            id: 'fallback-1',
                            title: 'The Architecture of Praxis',
                            summary: 'Reimagining political structures through the lens of strategic feminine leadership.',
                            category: 'Policy Brief',
                            year: 2024,
                            publishStatus: 'published',
                            pdfUrl: '#',
                        },
                        {
                            id: 'fallback-2',
                            title: 'Institutional Re-engineering',
                            summary: 'A technical guide to modifying organizational DNA for greater equity.',
                            category: 'Report',
                            year: 2024,
                            publishStatus: 'published',
                            pdfUrl: '#',
                        }
                    ]);
                } else {
                    console.error("Error fetching RPI outputs:", error);
                }
            } finally {
                setLoadingOutputs(false);
            }
        };

        fetchPrograms();
        fetchOutputs();
    }, []);

    const getIcon = (category: string) => {
        switch (category) {
            case 'Policy Brief': return <Globe suppressHydrationWarning size={48} className="text-stone-600" />;
            case 'Report': return <Award suppressHydrationWarning size={48} className="text-stone-600" />;
            default: return <FileText suppressHydrationWarning size={48} className="text-stone-600" />;
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-4" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm uppercase tracking-widest text-slate-300 mb-4 font-medium">What We Offer</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                        Research & Policy<br />
                        Innovation (RPI)
                    </h1>
                    <p className="text-lg text-slate-200 max-w-2xl mb-10 leading-relaxed">
                        Producing intellectual rigor as the foundation of political praxis. We bridge the gap between academic theory and strategic governance to transform women's political participation.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="#programs" className="inline-block bg-teal-700 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-teal-800 transition-all">
                            View our Research
                        </Link>
                        <Link href="/contact" className="inline-block border-2 border-white/40 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                            Download Research Agenda
                        </Link>
                    </div>
                </div>
            </section>

            {/* Research Philosophy & Approach */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16">
                        Research Philosophy &<br />Approach
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 border border-slate-200">
                            <p className="text-sm text-slate-500 mb-2 font-medium">Our methodology is grounded in transformative scholarship that centers women's experiences</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-slate-100 rounded">
                                    <Users suppressHydrationWarning size={24} className="text-[#1A5261]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Interdisciplinary Frameworks</h3>
                                    <p className="text-sm text-slate-600">Integrating sociology, political science, and feminist theory to produce comprehensive analysis.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-slate-100 rounded">
                                    <Lightbulb suppressHydrationWarning size={24} className="text-[#1A5261]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Evidence-Based Innovation</h3>
                                    <p className="text-sm text-slate-600">Combining rigorous data analysis with creative problem-solving to inform policy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-slate-100 rounded">
                                    <Search suppressHydrationWarning size={24} className="text-[#1A5261]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Research Banking Methods</h3>
                                    <p className="text-sm text-slate-600">Archiving research and methodologies for collaborative knowledge development.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-slate-100 rounded">
                                    <Award suppressHydrationWarning size={24} className="text-[#1A5261]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Scholarly Excellence</h3>
                                    <p className="text-sm text-slate-600">Maintaining the highest academic standards while remaining accessible to practitioners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Areas of Inquiry */}
            <section className="py-20 px-4 bg-[#2D241E] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
                        Key Areas of Inquiry
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center md:text-left">
                            <h3 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">Gender-Responsive Governance</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Analyzing how governance structures can better accommodate and empower women's political participation and decision-making processes.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">Political Strategy & Intellect</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Understanding how political strategy intersects with women's intellectual contributions to governance and policy formation.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">Inclusive Institutional Reform</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Researching how institutions can be designed and reformed to better serve diverse populations and ensure equitable representation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs & Research Initiatives */}
            <section id="programs" className="py-20 px-4 bg-white min-h-[400px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                                Programs & Research Initiatives
                            </h2>
                            <p className="text-slate-600 max-w-xl">
                                Institutional frameworks for emerging academic and professional fellowships.
                            </p>
                        </div>
                        <Link href="/contact" className="text-[#1A5261] font-bold text-sm uppercase tracking-widest mt-4 md:mt-0 hover:underline flex items-center gap-2">
                            Explore All Programs <ArrowRight suppressHydrationWarning size={16} />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="py-20 flex justify-center">
                            <Loader2 suppressHydrationWarning size={40} className="animate-spin text-teal-700" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {programs.length > 0 ? programs.map((program) => (
                                <div key={program.id} className="border border-slate-200 hover:shadow-lg transition-shadow bg-white flex flex-col h-full rounded-lg overflow-hidden group">
                                    {program.imageUrl && (
                                        <div className="relative w-full h-48 bg-slate-100">
                                            <Image
                                                src={program.imageUrl}
                                                alt={program.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            {program.logoUrl ? (
                                                <div className="relative w-8 h-8 shrink-0">
                                                    <Image
                                                        src={program.logoUrl}
                                                        alt=""
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <BookOpen suppressHydrationWarning size={20} className="text-[#1A5261]" />
                                            )}
                                            <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight leading-6">{program.title}</h3>
                                        </div>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow italic leading-relaxed">
                                            "{program.description}"
                                        </p>
                                        <div className="mb-6">
                                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Key Modules</h4>
                                            <ul className="space-y-2 text-sm text-slate-600">
                                                {program.modules && program.modules.length > 0 ? program.modules.map((module, mIdx) => (
                                                    <li key={mIdx} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-[#1A5261] rounded-full"></span>
                                                        {module}
                                                    </li>
                                                )) : (
                                                    <li className="text-slate-400 text-xs italic">Consult institutional prospectus for details.</li>
                                                )}
                                            </ul>
                                        </div>
                                        <Link href="/contact" className="text-[#1A5261] font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity border-t border-slate-100 pt-6 mt-auto">
                                            Contact regarding registration →
                                        </Link>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full py-12 text-center text-slate-400 font-serif italic">
                                    No active Research & Policy initiatives found.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Knowledge Production */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12">
                        Knowledge Production
                    </h2>

                    {loadingOutputs ? (
                        <div className="py-20 flex justify-center">
                            <Loader2 suppressHydrationWarning size={40} className="animate-spin text-teal-700" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {outputs.length > 0 ? outputs.map((out) => (
                                <div key={out.id} className="bg-white border border-slate-200 overflow-hidden flex flex-col group">
                                    <div className="aspect-[4/3] bg-[#2D241E] flex items-center justify-center transition-transform group-hover:bg-[#1A5261]/20 duration-500">
                                        {getIcon(out.category)}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{out.category}</p>
                                        <h3 className="font-bold text-slate-900 mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2 min-h-[3rem]">
                                            {out.title}
                                        </h3>
                                        <Link href="/publications" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline mt-auto flex items-center gap-2">
                                            Read More <ArrowRight suppressHydrationWarning size={14} />
                                        </Link>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full py-12 text-center text-slate-400 font-serif italic">
                                    No recent knowledge outputs found.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Scholarly Engagement CTA */}
            <section className="py-20 px-4 bg-[#1A3A4A] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                        Scholarly Engagement & Collaboration
                    </h2>
                    <p className="text-stone-300 mb-10 leading-relaxed">
                        Join fellow academic institutions, policy think-tanks, and independent researchers in producing impact-driven scholarship. Together, we can redefine the future of political transformation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="bg-[var(--primary)] text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all">
                            Apply For Collaboration
                        </Link>
                        <Link href="/collaborate" className="border border-white/30 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                            Submit a Proposal
                        </Link>
                    </div>
                </div>
            </section>

            {/* Conclusion Quote */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs text-[var(--primary)] uppercase tracking-widest mb-4 font-bold">Conclusion</p>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        RPI is not merely a research wing; it is the engine of the Athena Institute. By reframing political thought and inclusive governance, we ensure that political praxis is always informed by strategic intellect.
                    </p>
                </div>
            </section>
        </div>
    );
}
