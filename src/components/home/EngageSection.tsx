import Link from 'next/link';

const EngageSection = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 sm:mb-8 tracking-tight leading-tight">
                    Engage With AIPP
                </h2>
                <p className="text-lg sm:text-xl text-slate-500 italic mb-10 sm:mb-12 font-medium leading-relaxed">
                    We invite scholars, practitioners, and institutions to join us. Your collaboration is vital as we work towards a collective political rethinking and a more inclusive future.
                </p>
                <Link href="/framework" className="bg-[#1A5261] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-md font-bold text-base sm:text-lg hover:bg-[#14414d] transition-all inline-block uppercase tracking-widest">
                    Collaborate With Us
                </Link>
            </div>
        </section>
    );
};

export default EngageSection;
