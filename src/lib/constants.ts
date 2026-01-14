export const BRAND_COLORS = {
    primary: '#B19B4C', // Gold/Olive from AIPP logo/headers
    primaryHover: '#98873E',
    secondary: '#0F172A', // Slate 900
    accent: '#F8FAFC', // Slate 50
    text: {
        dark: '#0F172A',
        light: '#FFFFFF',
        muted: '#64748B',
    },
};

export const SITE_CONFIG = {
    name: 'Athena Institute for Political Praxis (AIPP)',
    tagline: "Advancing Women's Strategic Intellect in Political Praxis",
    description: "AIPP is a think tank focused on women's strategic intellect and political transformation, addressing the gaps in political thought caused by excluding women's strategic wisdom.",
    contact: {
        email: 'Connect.aipp@gmail.com',
        linktree: 'https://linktr.ee/aipp_org',
        wix: 'https://connectaipp.wixsite.com/athena-institute-for',
    },
};

export const NAV_LINKS = [
    { href: "/about", label: "About" },
    {
        label: "What We Offer",
        dropdown: [
            {
                label: "Research & Policy Innovation (RPI)",
                href: "/research-policy-innovation",
            },
            {
                label: "Strategic Action & Simulation (SAS)",
                href: "/strategic-action-simulation",
            },
            {
                label: "Communications & Public Advocacy (CPA)",
                href: "/communications-public-advocacy",
            },
        ]
    },
    { href: "/publications", label: "Publications" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
];
