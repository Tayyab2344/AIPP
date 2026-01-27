import { MetadataRoute } from 'next';
import { blogService } from '@/lib/services/blogService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.aipp.org.pk';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/research-policy-innovation',
        '/strategic-action-simulation',
        '/communications-public-advocacy',
        '/publications',
        '/insights',
        '/collaborate',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic insight routes
    let insightRoutes: MetadataRoute.Sitemap = [];
    try {
        const insights = await blogService.getAll();
        insightRoutes = insights
            .filter(insight => insight.status === 'published')
            .map((insight) => ({
                url: `${baseUrl}/insights/${insight.slug}`,
                lastModified: insight.publishDate,
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }));
    } catch (error) {
        console.error('Error fetching insights for sitemap:', error);
    }

    return [...staticRoutes, ...insightRoutes];
}
