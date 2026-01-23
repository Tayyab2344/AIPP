import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2D241E] pt-32 pb-20">
            {/* Background Image Layer - Clear & Vibrant */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_hijab_niqab.png"
                    alt="AIPP Strategic Leadership"
                    fill
                    priority
                    suppressHydrationWarning
                    className="object-cover"
                />

                {/* Subtle, Professional Overlays */}
                <div className="absolute inset-0 bg-black/40" /> {/* Basic light tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="max-w-5xl mx-auto">
                    <Reveal width="100%" yOffset={40} delay={0.4} duration={0.8}>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-[1.15] mb-8 sm:mb-10 tracking-tight max-w-4xl mx-auto drop-shadow-lg">
                            Advancing Women's Strategic <br className="hidden sm:block" /> Intellect in Political Praxis
                        </h1>
                    </Reveal>

                    <Reveal width="100%" yOffset={20} delay={0.6} duration={0.8}>
                        <p className="text-base sm:text-lg md:text-xl text-stone-200/90 mb-10 sm:mb-14 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-sm">
                            AIPP is a think tank focused on women's strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women's strategic wisdom.
                        </p>
                    </Reveal>

                    <Reveal width="100%" yOffset={10} delay={0.8} duration={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
                            <Link href="/framework" className="bg-[var(--primary)] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:opacity-90 transition-all text-center">
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
