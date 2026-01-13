import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2D241E] pt-32 pb-20">
            {/* Background Texture/Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero_hijab_niqab.png"
                    alt="Strategic Leadership"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D241E]/80 via-[#2D241E]/90 to-[#2D241E]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8 tracking-tight max-w-4xl mx-auto">
                        Advancing Women's Strategic <br /> Intellect in Political Praxis
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                        AIPP is a think tank focused on women's strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women's strategic wisdom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/framework" className="bg-[var(--primary)] text-white px-10 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all min-w-[200px]">
                            Explore Our Work
                        </Link>
                        <Link href="/framework" className="bg-[#413933] text-white border border-stone-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-stone-800 transition-all min-w-[200px]">
                            Research & Policy
                        </Link>
                        <Link href="/framework" className="bg-[#413933] text-white border border-stone-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-stone-800 transition-all min-w-[200px]">
                            Join Our Labs
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
