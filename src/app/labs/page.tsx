"use client";

import { ArrowRight, CheckCircle2, LayoutGrid, MessageSquare, Zap, BookOpen, UserCheck, ShieldCheck, Microscope } from 'lucide-react';
import Link from 'next/link';

const LabsPage = () => {
    return (
        <div className="bg-[#FBFBFA] min-h-screen pb-24">
            {/* Nav placeholder if needed, but using global Navbar */}

            {/* Hero Section */}
            <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-white border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.3em] mb-6">Strategic Action</p>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                                Praxis: The <br /> Architecture of <br /> Political <br /> Transformation
                            </h1>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-10">
                                Structured spaces for applied political learning, integrating rigorous theory with strategic action for women in leadership. Move beyond discourse into institutional impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#E63946] text-white px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#d62839] transition-all">
                                    Explore Labs
                                </button>
                                <button className="bg-slate-100 text-slate-900 px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all">
                                    View Framework
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden relative group">
                                <img
                                    src="/images/labs_niqab.png"
                                    alt="SAS Architecture"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-10 left-[-20px] bg-[#E63946] p-8 text-white rounded-xl shadow-2xl max-w-[240px]">
                                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">Next session</p>
                                    <h3 className="text-2xl font-bold mb-4">October 2024</h3>
                                    <p className="text-[10px] font-medium leading-relaxed opacity-90 italic">
                                        Limited to 15 Strategic Fellows per Lab.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SAS Framework */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">The SAS Framework</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Our Strategic Action & Simulation (SAS) methodology focuses on the intersection of systems thinking, high-stakes negotiation, and political foresight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <LayoutGrid className="text-[#E63946]" size={24} />,
                                title: "Systems Thinking",
                                desc: "Analyzing the complex web of institutional power and policy influence through architectural mapping."
                            },
                            {
                                icon: <MessageSquare className="text-[#E63946]" size={24} />,
                                title: "Strategic Negotiation",
                                desc: "Mastering the art of diplomatic leverage and consensus-building in high-stakes environments."
                            },
                            {
                                icon: <Zap className="text-[#E63946]" size={24} />,
                                title: "Political Foresight",
                                desc: "Developing predictive models for long-term political stability and managing systemic change."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors uppercase font-medium tracking-tight">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab Format */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1 h-8 bg-[#E63946]" />
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-[0.3em]">The Online Lab Format</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#E63946]">
                                <BookOpen size={20} />
                                <h3 className="text-[10px] font-bold uppercase tracking-widest">Expert-Led Sessions</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Direct engagement with leading political theorists and practitioners. No passive learning; only active intellectual inquiry.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#E63946]">
                                <Microscope size={20} />
                                <h3 className="text-[10px] font-bold uppercase tracking-widest">Analytical Workshops</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Deep-dive exercises focusing on real-world policy case studies, deconstructing power dynamics in real-time.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#E63946]">
                                <Zap size={20} />
                                <h3 className="text-[10px] font-bold uppercase tracking-widest">Structured Simulations</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                High-fidelity strategic simulations designed to test praxis. Navigate crises in a controlled, rigorous environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Labs */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#1A1110] rounded-[3rem] p-12 sm:p-20 relative overflow-hidden">
                        {/* Abstract background effect */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#E63946]/20 to-transparent rounded-full blur-[100px] -mr-[200px] -mt-[200px]" />

                        <div className="relative z-10 max-w-2xl mb-16">
                            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Specialized Labs</h2>
                            <p className="text-lg text-white/60 font-medium leading-relaxed">
                                Curated deep-learning pathways for the modern political architect.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    module: "01",
                                    title: "Strategy & Power",
                                    desc: "The architecture of influence within legislative and executive frameworks."
                                },
                                {
                                    module: "02",
                                    title: "Institutional Design",
                                    desc: "Governing structures: How to build resilient systems for democratic reform."
                                },
                                {
                                    module: "03",
                                    title: "Ethical Praxis",
                                    desc: "The leadership frontier: Bridging the gap between moral theory and political utility."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all group backdrop-blur-sm">
                                    <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-widest mb-4">Module {item.module}</p>
                                    <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed mb-8 font-medium">
                                        {item.desc}
                                    </p>
                                    <Link href="#" className="inline-block text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-[#E63946] transition-colors">
                                        Learn More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience and Outcomes */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Who the Labs Are For</h2>
                            <div className="space-y-12">
                                {[
                                    { id: "01", title: "Women in Active Politics", desc: "Elected officials and candidates seeking to sharpen their strategic edge." },
                                    { id: "02", title: "Policy Architects", desc: "Researchers and advisors translating data into actionable political roadmaps." },
                                    { id: "03", title: "Institutional Leaders", desc: "Executive directors and strategic leads in NGOs and international bodies." }
                                ].map((item) => (
                                    <div key={item.id} className="flex gap-8">
                                        <span className="text-xl font-bold text-[#E63946]">/{item.id}</span>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#F8F3F2] p-12 sm:p-16 rounded-[3rem]">
                            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Learning Outcomes</h2>
                            <ul className="space-y-6 mb-12">
                                {[
                                    "Strengthened Strategic Thinking",
                                    "Advanced Institutional Literacy",
                                    "Translating Ideas into Strategic Action",
                                    "Negotiation Mastery in Crisis",
                                    "Systemic Foresight Capabilities"
                                ].map((outcome, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-bold uppercase text-xs tracking-tight">
                                        <CheckCircle2 className="text-[#E63946] flex-shrink-0" size={18} />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-[10px] font-bold text-[#E63946] uppercase tracking-widest mb-3">Certification</p>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                    Graduates receive the AIPP Strategic Praxis Certification, recognized across global policy think tanks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center px-4">
                <div className="max-w-4xl mx-auto pt-16 border-t border-slate-100">
                    <h2 className="text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
                        Ready to bridge the gap between <br className="hidden sm:block" /> theory and action?
                    </h2>
                    <p className="text-lg text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Applications for the Winter Praxis Cohort are now open. Secure your place in the future of political leadership.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-[#E63946] text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#d62839] transition-all shadow-lg hover:shadow-[#E63946]/20">
                            Submit Application
                        </button>
                        <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                            Request Prospectus
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LabsPage;
