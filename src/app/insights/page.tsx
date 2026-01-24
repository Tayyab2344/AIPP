import { blogService } from '@/lib/services/blogService';
import InsightsClient from './InsightsClient';
import { Metadata } from 'next';
import { BlogPost } from '@/types';

export const metadata: Metadata = {
    title: 'Institutional Insights & Commentary',
    description: 'Analytical reflections on political praxis, gender-responsive governance, and strategic intellect from the Athena Institute.',
    keywords: ['Political Insights', 'Governance Analysis', 'Strategic Intellect', 'AIPP Blog', 'Policy Commentary'],
};

export const revalidate = 3600; // Revalidate every hour

export default async function InsightsPage() {
    let publishedInsights: BlogPost[] = [];
    try {
        const data = await blogService.getAll();
        publishedInsights = data.filter(post => post.status === 'published');
    } catch (error) {
        console.error("Error fetching insights on server:", error);
    }

    return <InsightsClient initialInsights={publishedInsights} />;
}
