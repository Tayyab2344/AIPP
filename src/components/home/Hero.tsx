'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const Hero = () => {
    return (
        <section className="relative h-[82vh] min-h-[500px] max-h-[800px] flex items-center justify-center overflow-hidden bg-[#1a1510] mb-[50px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_hijab_niqab.png"
                    alt="AIPP Strategic Leadership"
                    fill
                    priority
                    suppressHydrationWarning
                    className="object-cover object-center"
                />

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Top vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="max-w-5xl mx-auto">
                    <Reveal width="100%" yOffset={40} delay={0.4} duration={0.8}>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-5 sm:mb-6 tracking-tight max-w-4xl mx-auto drop-shadow-xl">
                            Advancing Women&apos;s Strategic <br className="hidden sm:block" /> Intellect in Political Praxis
                        </h1>
                    </Reveal>

                    <Reveal width="100%" yOffset={20} delay={0.6} duration={0.8}>
                        <p className="text-sm sm:text-base md:text-lg text-stone-200/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
                            AIPP is a think tank focused on women&apos;s strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women&apos;s strategic wisdom.
                        </p>
                    </Reveal>

                    <Reveal width="100%" yOffset={10} delay={0.8} duration={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
                            <Link href="/framework" className="bg-[var(--primary)] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-md font-bold text-sm sm:text-base hover:opacity-90 transition-all text-center tracking-wide">
                                Explore Our Work
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;

