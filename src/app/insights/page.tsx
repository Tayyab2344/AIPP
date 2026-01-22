import { Metadata } from 'next';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
    title: 'Institutional Insights & Commentary',
    description: 'Analytical reflections on political praxis, gender-responsive governance, and strategic intellect from the Athena Institute.',
    keywords: ['Political Insights', 'Governance Analysis', 'Strategic Intellect', 'AIPP Blog', 'Policy Commentary'],
};

export default function InsightsPage() {
    return <InsightsClient />;
}
