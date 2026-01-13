import Hero from '@/components/home/Hero';
import FocusAreas from '@/components/home/FocusAreas';
import Newsletter from '@/components/home/Newsletter';
import ImpactStats from '@/components/home/ImpactStats';
import StoriesOfChange from '@/components/home/StoriesOfChange';
import Partners from '@/components/home/Partners';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <Partners />

      <ImpactStats />

      {/* Objectives & Goals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Objectives & Goals
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              AIPP seeks to establish itself as a center of thought and action advancing women's leadership and intellect in political transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { id: '01', title: 'Generate Knowledge', desc: 'Produce interdisciplinary research and policy insights.' },
              { id: '02', title: 'Build Leadership', desc: 'Equip future women leaders with strategic competencies.' },
              { id: '03', title: 'Foster Collaboration', desc: 'Create a regional and global network of practitioners.' },
              { id: '04', title: 'Shape Discourse', desc: 'Influence policy and public narratives.' }
            ].map((goal) => (
              <div key={goal.id} className="p-8 border-2 border-slate-100 rounded-2xl hover:border-[var(--primary)] transition-colors group">
                <span className="text-sm font-black text-[var(--primary)] mb-4 block">{goal.id}</span>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">{goal.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{goal.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-slate-900">
              <img
                src="https://images.unsplash.com/photo-1573161158365-59b832b0d2f1?auto=format&fit=crop&q=80"
                alt="Digital Lab"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/10 z-10" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-[0.2em] mb-6">
                <span className="w-12 h-[2px] bg-[var(--primary)]" />
                <span>The Praxis Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase">
                Bridging Research <br /> and <span className="text-[var(--primary)]">Political Action</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium border-l-4 border-slate-900 pl-6">
                Our objectives are designed to align research, capacity-building, and advocacy within a coherent agenda for inclusive governance and strategic reform.
              </p>
              <Link href="/framework" className="btn-primary px-10 py-5 rounded-full font-black transition-all transform hover:shadow-2xl hover:shadow-[var(--primary)]/40 inline-block uppercase tracking-widest">
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FocusAreas />

      <StoriesOfChange />

      {/* Impact Banner */}
      <section className="py-32 bg-slate-900 relative overflow-hidden border-t-8 border-[var(--primary)]">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-[0.4em] mb-8">
            <span>The Athena Institute</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
            Transforming <br /> <span className="text-[var(--primary)]">Political Order</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-14 max-w-2xl mx-auto leading-tight font-bold">
            Join a generation of thinkers and leaders capable of transforming how politics is conceived, taught, and practiced.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/join" className="bg-[var(--primary)] text-white px-12 py-6 rounded-full font-black text-lg transition-all hover:opacity-90 hover:scale-105 shadow-2xl uppercase tracking-widest">
              Become a Member
            </Link>
            <Link href="/framework" className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-black text-lg transition-all hover:bg-white/5 backdrop-blur-sm uppercase tracking-widest">
              Our Framework
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
