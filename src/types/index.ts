export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    status: 'draft' | 'published' | 'archived';
    featuredImage?: string;
    publishDate: any; // Firestore Timestamp
    author: string;
}

export interface Lab {
    id: string;
    name: string;
    description: string;
    type: string;
    mode: 'Online - Zoom';
    startDate: any;
    endDate: any;
    frequency: string;
    zoomLink: string;
    registrationStatus: 'open' | 'closed';
}

export interface Publication {
    id: string;
    title: string;
    category: 'Research Paper' | 'Report' | 'Policy Brief';
    year: number;
    summary: string;
    pdfUrl: string;
    publishStatus: 'published' | 'draft';
}

export interface Department {
    id: string;
    name: string;
    description: string;
    focusAreas: string[];
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: any;
}

export interface Subscriber {
    email: string;
    subscribedDate: any;
    status: 'active' | 'unsubscribed';
}
