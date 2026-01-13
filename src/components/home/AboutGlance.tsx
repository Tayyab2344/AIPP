import React from 'react';

const AboutGlance = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tight">
                            AIPP at a Glance
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                Our institute exists to correct a fundamental flaw in political thought and practice: the systematic exclusion of women's strategic wisdom.
                            </p>
                            <p>
                                We are dedicated to building an inclusive and gender-responsive political order through interdisciplinary research and evidence-based policy innovation.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 md:p-16 rounded-sm border-l-4 border-[var(--primary)]">
                        <div className="mb-12">
                            <h3 className="text-2xl font-serif text-slate-900 mb-4 uppercase tracking-wider">Our Vision</h3>
                            <p className="text-lg text-slate-600 font-medium">
                                To foster an inclusive, gender-responsive political order.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-4 uppercase tracking-wider">Our Mission</h3>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Championing interdisciplinary research, cultivating women's political leadership, driving evidence-based policy innovation, shaping public discourse, and advocating for institutional reform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutGlance;
