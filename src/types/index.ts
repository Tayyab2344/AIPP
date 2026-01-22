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
    imageUrl?: string; // Cover image for the publication
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
    fullName: string;
    email: string;
    affiliation?: string;
    natureOfInquiry: string;
    message: string;
    createdAt: any;
    status: 'new' | 'replied' | 'archived';
}

export interface Subscriber {
    id: string;
    email: string;
    subscribedDate: any;
    status: 'active' | 'unsubscribed';
}

export type ProgramStatus = 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';

export interface Program {
    id: string;
    title: string;
    coreOffering: 'RPI' | 'SAS' | 'CPA';
    status: ProgramStatus;
    createdDate: any;
    shortDescription: string;
    detailedDescription: string;
    description?: string; // Optional alias for shortDescription
    modules?: string[]; // Optional list of modules for RPI/SAS cards
    imageUrl?: string;
    logoUrl?: string; // Icon or small logo
    connectedEntities: Array<{
        type: 'LAB RELATIONSHIP' | 'PUBLICATION';
        name: string;
    }>;
}

export type EngagementType = 'FELLOWSHIP' | 'INSTITUTIONAL PARTNERSHIP' | 'STRATEGIC ADVISORY' | 'SIMULATION PARTICIPANT' | 'VOLUNTEER' | 'OTHER';

export interface Collaboration {
    id?: string;
    fullName: string;
    email: string;
    organization?: string;
    engagementType: EngagementType;
    proposal: string;
    status: 'pending' | 'reviewed' | 'resolved';
    createdAt: any;
}

export interface Partner {
    id?: string;
    name: string;
    logoUrl?: string;
    website?: string;
    order?: number;
}

export interface Testimonial {
    id?: string;
    name: string;
    role: string;
    quote: string;
    image?: string;
    order?: number;
}
