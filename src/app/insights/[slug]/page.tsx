import { blogService } from '@/lib/services/blogService';
import InsightDetailClient from './InsightDetailClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const insight = await blogService.getBySlug(slug);

    if (!insight || insight.status !== 'published') {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: insight.title,
        description: insight.excerpt,
        openGraph: {
            title: insight.title,
            description: insight.excerpt,
            images: insight.featuredImage ? [insight.featuredImage] : [],
        },
    };
}

export async function generateStaticParams() {
    const insights = await blogService.getAll();
    return insights
        .filter(insight => insight.status === 'published')
        .map((insight) => ({
            slug: insight.slug,
        }));
}

export default async function InsightDetailPage({ params }: Props) {
    const { slug } = await params;
    const insight = await blogService.getBySlug(slug);

    if (!insight || insight.status !== 'published') {
        notFound();
    }

    return <InsightDetailClient insight={insight} />;
}
