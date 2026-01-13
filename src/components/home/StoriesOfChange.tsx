import React from 'react';

const StoriesOfChange = () => {
    const stories = [
        {
            name: "Dr. Sarah Johnson",
            role: "Policy Researcher, RPI",
            quote: "AIPP provides the analytical depth needed to reframe women's roles in governance. It's about precision and evidence-based transformation.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
        },
        {
            name: "Fatima Noor",
            role: "Political Strategist, SAS",
            quote: "The SAS stream operationalized my approach to political negotiation. We are translating theory into real-world institutional impact.",
            image: "https://images.unsplash.com/photo-1589115341253-90d577c8ef4e?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-widest mb-4">
                            <span className="w-8 h-[2px] bg-[var(--primary)]" />
                            <span>Voices of Praxis</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter">
                            Insights from <br /> Our Network
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {stories.map((story, index) => (
                        <div key={index} className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-100 hover:border-[var(--primary)] transition-all duration-500 hover:-translate-y-2">
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-slate-200">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                                />
                                <div className="absolute inset-0 bg-slate-900/10" />
                            </div>
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-8">
                                    <p className="text-slate-600 text-xl font-medium leading-relaxed italic border-l-4 border-[var(--primary)] pl-6">"{story.quote}"</p>
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 text-2xl uppercase tracking-tight">{story.name}</p>
                                    <p className="text-[var(--primary)] font-black uppercase text-xs tracking-widest mt-1">{story.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoriesOfChange;
