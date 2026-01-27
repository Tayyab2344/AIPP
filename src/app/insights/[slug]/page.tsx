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

    const title = `${insight.title} | Insights | AIPP`;
    const canonical = `https://www.aipp.org.pk/insights/${slug}`;

    return {
        title,
        description: insight.excerpt,
        alternates: {
            canonical,
        },
        openGraph: {
            title: insight.title,
            description: insight.excerpt,
            url: canonical,
            type: 'article',
            publishedTime: insight.publishDate.toISOString(),
            images: insight.featuredImage ? [insight.featuredImage] : ['/images/hero_hijab_niqab.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: insight.title,
            description: insight.excerpt,
            images: insight.featuredImage ? [insight.featuredImage] : ['/images/hero_hijab_niqab.png'],
        }
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": insight.title,
        "description": insight.excerpt,
        "image": insight.featuredImage || "https://www.aipp.org.pk/images/hero_hijab_niqab.png",
        "datePublished": insight.publishDate.toISOString(),
        "dateModified": insight.publishDate.toISOString(),
        "author": {
            "@type": "Organization",
            "name": "Athena Institute for Political Praxis",
            "url": "https://www.aipp.org.pk"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AIPP",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.aipp.org.pk/aipp-logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.aipp.org.pk/insights/${slug}`
        },
        "about": [
            { "@type": "Thing", "name": "Political Praxis" },
            { "@type": "Thing", "name": "Women's Leadership" },
            { "@type": "Thing", "name": "Political Strategy" }
        ]
    };
    Riverside:

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InsightDetailClient insight={insight} />
        </>
    );
}
