import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aipp-institute.org'; // Replace with actual production URL

    const routes = [
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

    return routes;
}
