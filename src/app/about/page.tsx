import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal, RevealList } from '@/components/ui/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About the Athena Institute for Political Praxis',
    description: 'Learn about AIPP\'s mission to address the systemic exclusion of women\'s strategic intellect from governance and political thought.',
};

const AboutPage = () => {
    const principles = [
        {
            title: "Intellectual Rigor",
            description: "Commitment to non-partisan, evidence-based, and methodologically sound inquiry."
        },
        {
            title: "Leadership Grounded in Praxis",
            description: "Fostering leadership that is reflective, strategic, and ethically grounded."
        },
        {
            title: "Strategic Wisdom",
            description: "Cultivating long-term vision over short-term political expediency."
        },
        {
            title: "Collaborative Engagement",
            description: "Building partnerships across academic, policy, and civil society sectors."
        },
        {
            title: "Equitable Participation",
            description: "Ensuring diverse voices and experiences inform our research and programs."
        },
        {
            title: "Empowerment Through Knowledge",
            description: "Providing the intellectual tools for effective political agency."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "description": "Learn about AIPP's mission to address the systemic exclusion of women's strategic intellect from governance and political thought.",
        "mainEntity": {
            "@type": "NGO",
            "name": "Athena Institute for Political Praxis",
            "description": "A non-partisan institution dedicated to addressing the systemic exclusion of women's strategic intellect from political thought."
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-20">

                {/* Header Title */}
                <header className="border-b border-slate-100 pb-8 sm:pb-12">
                    <Reveal width="100%">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                            About the Athena Institute for <br className="hidden sm:block" /> Political Praxis
                        </h1>
                    </Reveal>
                </header>

                {/* About the Institute */}
                <section>
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-4 sm:mb-6">About the Institute</h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            The Athena Institute for Political Praxis (AIPP) is a non-partisan institution dedicated to addressing the systemic exclusion of women's strategic intellect from the core of political thought and governance. We contend that this exclusion is not merely a matter of representation, but a critical deficit in the quality, resilience, and ethical foundation of democratic systems. AIPP serves as a dedicated space for rigorous research, transformative leadership development, and the fundamental reimagination of political structures to be more inclusive, equitable, and effective.
                        </p>
                    </Reveal>
                </section>

                {/* Why Political Praxis */}
                <section>
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-4 sm:mb-6">Why Political Praxis</h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            Our name reflects a core commitment to 'praxis'—the dialectical integration of theory and action. We reject the notion of political engagement as a purely reactive or performative exercise. Instead, AIPP champions a model of strategic participation grounded in deep reflection, critical foresight, and applied learning. Our work bridges the gap between academic inquiry and tangible political strategy, equipping leaders with the intellectual frameworks necessary to navigate complex challenges and drive meaningful, sustainable change.
                        </p>
                    </Reveal>
                </section>

                {/* Vision & Mission Side-by-Side */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 border-y border-slate-100 py-12 sm:py-16">
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-4 sm:mb-6">Vision</h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            To foster an inclusive and gender-responsive political order where women's strategic intellect is recognized as integral to effective governance and the advancement of just, resilient societies.
                        </p>
                    </Reveal>
                    <Reveal width="100%" delay={0.4}>
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-4 sm:mb-6">Mission</h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            AIPP's mission is to conduct interdisciplinary research, cultivate women's strategic leadership, promote evidence-based policy innovation, and shape public and political discourse on gender, power, and governance.
                        </p>
                    </Reveal>
                </section>

                {/* Core Belief (Centered) */}
                <section className="text-center max-w-2xl mx-auto py-8 sm:py-12">
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-serif text-[var(--primary)] italic mb-4 sm:mb-6">Core Belief</h2>
                        <p className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-900 leading-tight px-4">
                            "We hold the core belief that women's strategic intellect is an indispensable, yet profoundly underutilized, asset for democratic development and global problem-solving."
                        </p>
                    </Reveal>
                </section>

                {/* Guiding Principles Grid */}
                <section className="bg-slate-50 p-8 sm:p-12 md:p-16 rounded-sm border border-slate-100">
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-8 sm:mb-12">Guiding Principles</h2>
                    </Reveal>
                    <RevealList className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                        {principles.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <CheckCircle2 suppressHydrationWarning className="text-[var(--primary)] mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 sm:mb-2">{item.title}:</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </RevealList>
                </section>

                {/* Long-Term Impact */}
                <section className="pb-16 sm:pb-24">
                    <Reveal width="100%">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary)] uppercase tracking-wider mb-4 sm:mb-6">Long-Term Impact</h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            The long-term objective of AIPP is to fundamentally reshape the paradigms of political education, leadership, and governance. We aim to create a political ecosystem where gender analysis is not a supplementary topic but a central component of strategic decision-making. By influencing policy, cultivating a new generation of leaders, and shifting public discourse, we seek to foster institutional reforms that enhance democratic resilience, promote equitable power structures, and build more just and sustainable societies for all.
                        </p>
                    </Reveal>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
