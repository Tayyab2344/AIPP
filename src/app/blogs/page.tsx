import { blogService } from '@/lib/services/blogService';
import BlogsClient from './BlogsClient';
import { BlogPost } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Voices of Change | Global Community & Expert Perspectives',
    description: 'Stories, updates, and expert perspectives from our global community of advocates and researchers at Athena Institute.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogsPage() {
    let blogs: BlogPost[] = [];
    try {
        const data = await blogService.getAll();
        // Filter for published posts that are NOT in Political Thought (Insights handles those)
        blogs = data.filter(post => post.status === 'published' && post.category !== 'Political Thought');
    } catch (error) {
        console.error("Error fetching blogs on server:", error);
    }

    return <BlogsClient initialBlogs={blogs} />;
}
