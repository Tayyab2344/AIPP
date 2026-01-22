'use client';

import React, { useState, useEffect } from 'react';
import { impactService } from '@/lib/services/impactService';
import { Partner } from '@/types';

const Partners = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const data = await impactService.getPartners().catch(() => []);
                setPartners(data);
            } catch (error) {
                console.error("Error fetching partners:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, []);

    if (loading || partners.length === 0) return null;

    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-12">
                    Our Global Partnerships & Affiliates
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.id} className="flex items-center space-x-3 group cursor-default">
                            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center font-black text-[var(--primary)] text-xs group-hover:bg-[var(--primary)] group-hover:text-white transition-colors shadow-lg overflow-hidden">
                                {partner.logoUrl ? (
                                    <img src={partner.logoUrl} alt={partner.name} className="w-full h-full object-contain" />
                                ) : (
                                    partner.name.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase()
                                )}
                            </div>
                            <span className="text-slate-900 font-black tracking-tighter uppercase text-sm">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
