import Link from 'next/link';
import { BookOpen, Users, Lightbulb, Target, Brain, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Strategic Action & Simulation | Athena Institute for Political Praxis',
    description: 'The operational expression of praxis. Bridging high-level political theory and real-world strategic execution for women leaders.',
};

export default function SASPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                {/* Background Split */}
                <div className="absolute inset-0 flex">
                    <div className="w-full lg:w-1/2 bg-white"></div>
                    <div className="hidden lg:block w-1/2 bg-slate-800 relative overflow-hidden">
                        <img
                            src="/images/pillar_sas_niqab.png"
                            alt="Strategic Action"
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/80 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                    <div className="max-w-xl">
                        <p className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-bold">What We Offer</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                            Strategic<br />
                            Action &<br />
                            Simulation
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            The operational expression of praxis. Bridging high-level political theory and real-world strategic execution for women leaders in global systems.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#methodology" className="inline-block bg-slate-900 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
                                View Methodology
                            </Link>
                            <Link href="#pillars" className="inline-block border-2 border-slate-300 text-slate-900 px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                                Core Pillars
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Praxis-Based Learning Approach */}
            <section id="methodology" className="py-20 px-4 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="flex gap-1">
                            <div className="w-3 h-8 bg-amber-600"></div>
                            <div className="w-3 h-8 bg-slate-700"></div>
                            <div className="w-3 h-8 bg-teal-700"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                            The Praxis-Based Learning Approach
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Theory */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center mb-6">
                                <BookOpen size={20} className="text-amber-700" />
                            </div>
                            <h3 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-4">Theory</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Deep immersion in foundational political systems, power structures, and historical literature on strategic thought.
                            </p>
                        </div>

                        {/* Reflection */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mb-6">
                                <Brain size={20} className="text-slate-700" />
                            </div>
                            <h3 className="text-slate-700 font-bold uppercase tracking-widest text-sm mb-4">Reflection</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Critical examination of personal and systemic strategic reasoning. Encouraging critical integration and clarity.
                            </p>
                        </div>

                        {/* Action */}
                        <div className="bg-white p-8 border border-slate-200">
                            <div className="w-10 h-10 bg-teal-100 rounded flex items-center justify-center mb-6">
                                <Zap size={20} className="text-teal-700" />
                            </div>
                            <h3 className="text-teal-700 font-bold uppercase tracking-widest text-sm mb-4">Action</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                The application of theory through real-value simulated political and non-adversarial scenarios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Strategic Engagement */}
            <section id="pillars" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">What We Cover</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12">
                        Areas of Strategic Engagement
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Systems Thinking</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Mapping complex political domains and developing foresight within institutional structures.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Negotiation under Pressure</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                High-stakes diplomatic reasoning, focusing on game theory and interpersonal political bearings.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Uncertainty Management</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Strategic decision-making frameworks under volatile and uncontrollable geopolitical contexts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Simulation Labs */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left - Description */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                                Structured<br />Simulation Labs
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                SAS Labs are not webinars. They are serious tactical engagement simulations designed for leadership under stress. From diplomatic crisis rooms to policy warfare scenarios.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={18} className="text-teal-600" />
                                    <span className="text-slate-700 font-medium">12+ Simulation-Based Sessions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={18} className="text-teal-600" />
                                    <span className="text-slate-700 font-medium">Multi-Perspective Role Simulations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={18} className="text-teal-600" />
                                    <span className="text-slate-700 font-medium">Real-Time Peer Evaluation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right - Lab Cards */}
                        <div className="space-y-4">
                            <div className="bg-white p-6 border border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Target size={24} className="text-slate-600" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">The Sovereignty Simulation</h3>
                                    </div>
                                </div>
                                <Link href="#" className="text-teal-600 font-bold text-xs uppercase tracking-widest hover:underline">
                                    Details
                                </Link>
                            </div>

                            <div className="bg-white p-6 border border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Users size={24} className="text-slate-600" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Policy War-Gaming</h3>
                                    </div>
                                </div>
                                <Link href="#" className="text-teal-600 font-bold text-xs uppercase tracking-widest hover:underline">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Outcomes & Participation */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Learning Outcomes */}
                        <div className="bg-amber-50 p-10 border border-amber-100">
                            <h2 className="text-2xl font-serif text-slate-900 mb-8">Learning Outcomes</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-amber-700 font-bold text-sm">01</span>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Enhanced Strategic Judgement</h3>
                                        <p className="text-slate-600 text-sm">Develop the ability to assess and navigate complex geopolitical and institutional challenges.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-amber-700 font-bold text-sm">02</span>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Understanding Power Dynamics</h3>
                                        <p className="text-slate-600 text-sm">Master the invisible architecture of institutional influence and control.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-amber-700 font-bold text-sm">03</span>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Operational Agility</h3>
                                        <p className="text-slate-600 text-sm">Apply theoretical frameworks rapidly under changing circumstances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Participation & Guidelines */}
                        <div className="bg-slate-800 p-10 text-white">
                            <h2 className="text-2xl font-serif mb-6">Participation & Guidelines</h2>
                            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                                Participation in SAS is by invitation or application. An initial commitment of engagement is required to ensure the intellectual quality of the cohort is maintained.
                            </p>

                            <div className="bg-slate-700/50 p-4 mb-8 border-l-4 border-amber-500">
                                <p className="text-slate-300 text-sm italic">
                                    "Active commitment to the principles, values, and norms of our mission is mandatory for all participants."
                                </p>
                            </div>

                            <Link href="/contact" className="inline-block bg-amber-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-amber-700 transition-all">
                                Request Participation Info or Enquire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contributing to the Praxis Mission */}
            <section className="py-20 px-4 bg-slate-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                        Contributing to the Praxis Mission
                    </h2>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        The Strategic Action & Simulation pillar is the applied bridge between intellectual rigour and practical transformation of political systems. By joining us here, you move from theory to praxis.
                    </p>

                    {/* Color bars */}
                    <div className="flex justify-center gap-2 mb-8">
                        <div className="w-12 h-3 bg-amber-600 rounded-full"></div>
                        <div className="w-12 h-3 bg-slate-700 rounded-full"></div>
                        <div className="w-12 h-3 bg-teal-600 rounded-full"></div>
                    </div>

                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                        Global Praxis Initiative — Pathway to SAS
                    </p>
                </div>
            </section>
        </div>
    );
}
