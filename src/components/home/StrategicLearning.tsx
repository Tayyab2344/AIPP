import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const StrategicLearning = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl overflow-hidden group">
                        <img
                            src="/images/labs_niqab.png"
                            alt="Strategic Learning"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 sm:mb-8 tracking-tight">
                            Labs & Strategic Learning
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed font-medium">
                            Our online labs and strategic sessions enhance praxis, simulations, policy analysis, leadership development, and foresight training, providing a dynamic environment for intellectual growth and practical application.
                        </p>
                        <Link href="/framework" className="inline-flex items-center text-[var(--primary)] font-bold text-base sm:text-lg hover:underline gap-2">
                            Learn More About Labs <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicLearning;
