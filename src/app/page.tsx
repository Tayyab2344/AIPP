import Hero from '@/components/home/Hero';
import AboutGlance from '@/components/home/AboutGlance';
import FocusAreas from '@/components/home/FocusAreas';
import StrategicLearning from '@/components/home/StrategicLearning';
import PublicationsTeaser from '@/components/home/PublicationsTeaser';
import Newsletter from '@/components/home/Newsletter';
import EngageSection from '@/components/home/EngageSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <AboutGlance />

      <FocusAreas />

      <StrategicLearning />

      <PublicationsTeaser />

      <Newsletter />

      <EngageSection />
    </div>
  );
}
