import Hero from '@/components/home/Hero';
import AboutGlance from '@/components/home/AboutGlance';
import FocusAreas from '@/components/home/FocusAreas';
import StrategicLearning from '@/components/home/StrategicLearning';
import PublicationsTeaser from '@/components/home/PublicationsTeaser';
import Newsletter from '@/components/home/Newsletter';
import EngageSection from '@/components/home/EngageSection';
import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Athena Institute for Political Praxis | Advancing Women\'s Strategic Intellect',
  description: 'AIPP is a think tank focused on women\'s strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women\'s strategic wisdom.',
};

export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Athena Institute for Political Praxis (AIPP)",
    "alternateName": "AIPP",
    "url": "https://www.aipp.org.pk",
    "logo": "https://www.aipp.org.pk/aipp-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Connect.aipp@gmail.com",
      "contactType": "Connect",
    },
    "sameAs": [
      "https://x.com/aipp_institute",
      "https://www.instagram.com/aipp_org",
      "https://www.linkedin.com/company/athena-institute-for-political-praxis-aipp/",
      "https://substack.com/@aippdiscourse"
    ],
    "description": "A think tank focused on women's strategic intellect and political transformation."
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <Reveal width="100%" yOffset={30}>
        <AboutGlance />
      </Reveal>

      <Reveal width="100%" yOffset={30} delay={0.3}>
        <FocusAreas />
      </Reveal>

      <Reveal width="100%" yOffset={30}>
        <StrategicLearning />
      </Reveal>

      <Reveal width="100%" yOffset={30}>
        <PublicationsTeaser />
      </Reveal>

      <Reveal width="100%" yOffset={30}>
        <Newsletter />
      </Reveal>

      <Reveal width="100%" yOffset={30}>
        <EngageSection />
      </Reveal>
    </div>
  );
}
