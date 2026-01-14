import Link from 'next/link';
import { Mic, Eye, Brain, Shield, Target, ArrowRight, FileText, Newspaper, Radio } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Communications & Public Advocacy | Athena Institute for Political Praxis',
    description: 'Bridging rigorous research with public discourse to amplify women in strategic, intellectual, and transformative democratic understanding.',
};

export default function CPAPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-24 px-4 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
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
                            <Link href="#approach" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-[var(--primary)] transition-colors">
                                Our Approach <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="w-full h-[400px] bg-slate-200 overflow-hidden">
                <img
                    src="/images/strategic_learning_hijab.png"
                    alt="Communications & Public Advocacy"
                    className="w-full h-full object-cover"
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
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Mic size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Narrative Influence</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    We shape public discourse through strategically framed intellectual insights, ensuring that women's leadership is recognized for its epistemic contributions.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Ethical Responsibility</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Maintaining the highest standards of integrity. Every campaign is crafted against a rigorous ethical framework that ensures intellectual honesty and political trust.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Reflective Praxis</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Translating complex research into accessible public dialogues. Our work is not just to inform but to transform through strategic reflection on the political landscape.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Brain size={20} className="text-slate-700" />
                                    <h3 className="font-bold text-slate-900">Knowledge Campaigns</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Designing and executing sustained efforts to educate, persuade, and positively influence policy by synthesizing bold arguments and rigorous data.
                                </p>
                            </div>
                        </div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    </div>
                </div>
            </section>

            {/* Recent Outputs */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                            Recent Outputs
                        </h2>
                        <Link href="/publications" className="text-sm font-bold text-slate-900 uppercase tracking-widest mt-4 md:mt-0 hover:text-[var(--primary)] transition-colors">
                            View the Full Archive
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Output 1 */}
                        <div className="group">
                            <div className="bg-slate-100 aspect-[4/3] mb-6 flex items-center justify-center overflow-hidden">
                                <FileText size={48} className="text-slate-300" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2 font-bold">Policy Statement</p>
                            <h3 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                                The Semantics of Power: Redefining Institutional Trust in 2024
                            </h3>
                            <p className="text-sm text-slate-500 mb-4">
                                In this paper, we challenge the prevailing neoinstitutionalist understanding of political trust, offering new terminologies and perspectives for decision-makers.
                            </p>
                            <p className="text-xs text-slate-400 font-bold">OCTOBER 14, 2024</p>
                        </div>

                        {/* Output 2 */}
                        <div className="group">
                            <div className="bg-slate-100 aspect-[4/3] mb-6 flex items-center justify-center overflow-hidden">
                                <Newspaper size={48} className="text-slate-300" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2 font-bold">Public Editorial</p>
                            <h3 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                                Strategic Frameworks for Gender-Inclusive Advocacy
                            </h3>
                            <p className="text-sm text-slate-500 mb-4">
                                A comprehensive study on implementation of ethical, strategic-level advocacy mechanisms that reshape campaign dynamics.
                            </p>
                            <p className="text-xs text-slate-400 font-bold">SEPTEMBER 28, 2024</p>
                        </div>

                        {/* Output 3 */}
                        <div className="group">
                            <div className="bg-slate-100 aspect-[4/3] mb-6 flex items-center justify-center overflow-hidden">
                                <Radio size={48} className="text-slate-300" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2 font-bold">Podcast Interview</p>
                            <h3 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                                The Future of Praxis Research in the Digital Public Square
                            </h3>
                            <p className="text-sm text-slate-500 mb-4">
                                Our Director discusses the challenges of interfacing with leading institutions and communicating nuanced ideas about women and governance.
                            </p>
                            <p className="text-xs text-slate-400 font-bold">SEPTEMBER 12, 2024</p>
                        </div>
                    </div>
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
