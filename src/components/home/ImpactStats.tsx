'use client';

import React, { useState, useEffect } from 'react';
import { publicationService } from '@/lib/services/publicationService';
import { subscriberService } from '@/lib/services/subscriberService';
import { programService } from '@/lib/services/programService';
import { engagementService } from '@/lib/services/engagementService';

const ImpactStats = () => {
    const [stats, setStats] = useState([
        { id: 'subscribers', label: 'Commited Network', value: '...', description: 'A growing generation of thinkers and leaders capabale of transforming politics.' },
        { id: 'publications', label: 'Policy Papers', value: '...', description: 'Interdisciplinary research bridging the representation gap.' },
        { id: 'programs', label: 'Strategic Streams', value: '...', description: 'Specialized programmatic modules driving institutional action.' },
        { id: 'engagements', label: 'Global Engagements', value: '...', description: 'Collaborative networks connecting practitioners and scholars.' }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Only fetch public data. Sensitive data (subscribers/engagements) 
                // should not be queried from the client side without admin auth.
                const [pubs, progs] = await Promise.all([
                    publicationService.getPublished().catch(() => []),
                    programService.getAll().catch(() => [])
                ]);

                setStats(prev => prev.map(stat => {
                    if (stat.id === 'publications') {
                        return { ...stat, value: String(pubs.length || 24).padStart(2, '0') };
                    }
                    if (stat.id === 'programs') {
                        return { ...stat, value: String(progs.length || 3).padStart(2, '0') };
                    }
                    // Keep marketing numbers for Network and Engagements
                    if (stat.id === 'subscribers') return { ...stat, value: '45k+' };
                    if (stat.id === 'engagements') return { ...stat, value: '500+' };
                    return stat;
                }));
            } catch (error) {
                console.error("Error fetching impact stats:", error);
                // Fallback to marketing numbers on error
                setStats([
                    { id: 'subscribers', label: 'Commited Network', value: '45k+', description: 'A growing generation of thinkers and leaders capable of transforming politics.' },
                    { id: 'publications', label: 'Policy Papers', value: '120+', description: 'Interdisciplinary research bridging the representation gap.' },
                    { id: 'programs', label: 'Strategic Streams', value: '03', description: 'Specialized programmatic modules driving institutional action.' },
                    { id: 'engagements', label: 'Global Engagements', value: '500+', description: 'Collaborative networks connecting practitioners and scholars.' }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-white/20 to-[var(--primary)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Impact in Numbers</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Repositioning women's wisdom and agency as central to democratic decision-making and institutional reform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-2 group ${loading ? 'animate-pulse' : ''}`}>
                            <p className="text-5xl md:text-6xl font-black mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform origin-left">
                                {stat.value}
                            </p>
                            <p className="text-xl font-bold mb-3 uppercase tracking-wide">{stat.label}</p>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Abstract background elements */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-white/5 rounded-full blur-[100px]" />
        </section>
    );
};

export default ImpactStats;
