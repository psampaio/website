export interface SiteConfig {
    lang: string;
    socialLinks: { text: string; href: string }[];
    socialImage: string;
    canonicalURL?: string;
    plausibleDomain?: string;
}

export interface SiteContent {
    experience: ExperienceProps[];
}

export interface ExperienceProps {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string | string[];
}

export interface HeaderProps {
    siteLogo: string;
    navLinks: { text: string; href: string }[];
}
