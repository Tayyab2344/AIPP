import Hero from '@/components/home/Hero';
import AboutGlance from '@/components/home/AboutGlance';
import FocusAreas from '@/components/home/FocusAreas';
import StrategicLearning from '@/components/home/StrategicLearning';
import PublicationsTeaser from '@/components/home/PublicationsTeaser';
import Newsletter from '@/components/home/Newsletter';
import EngageSection from '@/components/home/EngageSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Athena Institute for Political Praxis | Advancing Women\'s Strategic Intellect',
  description: 'AIPP is a think tank focused on women\'s strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women\'s strategic wisdom.',
};

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
