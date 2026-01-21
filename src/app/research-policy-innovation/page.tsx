import Link from 'next/link';
import { BookOpen, Users, Lightbulb, Search, Award, Globe, FileText, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Policy Innovation | Athena Institute for Political Praxis',
    description: 'Producing intellectual rigor as the foundation of political praxis. We bridge the gap between academic theory and strategic governance.',
};

export default function RPIPage() {
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
            <section id="programs" className="py-20 px-4 bg-white">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Program 1 */}
                        <div className="border border-slate-200 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <BookOpen suppressHydrationWarning size={20} className="text-[#1A5261]" />
                                <h3 className="font-bold text-slate-900">The Athena Praxis Lab</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6">
                                A collaborative research environment where emerging scholars and seasoned practitioners develop actionable political research.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    Strategic Studies Series
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    Field Research Modules
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    Policy Brief Workshops
                                </li>
                            </ul>
                            <Link href="/contact" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline">
                                Learn More →
                            </Link>
                        </div>

                        {/* Program 2 */}
                        <div className="border border-slate-200 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Users suppressHydrationWarning size={20} className="text-[#1A5261]" />
                                <h3 className="font-bold text-slate-900">Strategic Fellows Program</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6">
                                A fellowship for practitioners and scholars to contribute to institutional knowledge and strategic development.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    Cohort-Based Sessions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    One-Year Research Fellowship (Stipend)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                                    Publication Support
                                </li>
                            </ul>
                            <Link href="/contact" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline">
                                Applications Opening →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Production */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12">
                        Knowledge Production
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Publication 1 */}
                        <div className="bg-white border border-slate-200 overflow-hidden">
                            <div className="aspect-[4/3] bg-[#2D241E] flex items-center justify-center">
                                <FileText suppressHydrationWarning size={48} className="text-stone-600" />
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Research Paper</p>
                                <h3 className="font-bold text-slate-900 mb-3">Reframing Executive Power: A Gendered Perspective</h3>
                                <Link href="#" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </div>

                        {/* Publication 2 */}
                        <div className="bg-white border border-slate-200 overflow-hidden">
                            <div className="aspect-[4/3] bg-[#2D241E] flex items-center justify-center">
                                <Globe suppressHydrationWarning size={48} className="text-stone-600" />
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Policy Brief</p>
                                <h3 className="font-bold text-slate-900 mb-3">Digital Inclusion & Parliamentary Access in Emerging Markets</h3>
                                <Link href="#" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </div>

                        {/* Publication 3 */}
                        <div className="bg-white border border-slate-200 overflow-hidden">
                            <div className="aspect-[4/3] bg-[#2D241E] flex items-center justify-center">
                                <BookOpen suppressHydrationWarning size={48} className="text-stone-600" />
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Review Article</p>
                                <h3 className="font-bold text-slate-900 mb-3">Praxis Review: The State of Women's Intellectual Agency</h3>
                                <Link href="#" className="text-[#1A5261] font-bold text-xs uppercase tracking-widest hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
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
                        <Link href="/contact" className="border border-white/30 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
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
