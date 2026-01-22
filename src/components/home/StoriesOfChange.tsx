'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { impactService } from '@/lib/services/impactService';
import { Testimonial } from '@/types';

const StoriesOfChange = () => {
    const [stories, setStories] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const data = await impactService.getTestimonials().catch(() => []);
                setStories(data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStories();
    }, []);

    if (loading || stories.length === 0) return null;

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
                    {stories.map((story) => (
                        <div key={story.id} className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-100 hover:border-[var(--primary)] transition-all duration-500 hover:-translate-y-2">
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-slate-200">
                                {story.image && (
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        suppressHydrationWarning
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                                    />
                                )}
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
