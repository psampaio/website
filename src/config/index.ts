import type {SiteConfig, SiteContent} from "@types";

export const SITE_CONFIG: SiteConfig = {
    lang: "en",
    navLinks: [
        // {text: "Experience", href: "#experience"},
        {text: "Projects", href: "#projects"},
        {text: "About", href: "#about"},
    ],
    socialLinks: [
        {text: "Twitter", href: "https://x.com/psampaio"},
        {text: "LinkedIn", href: "https://www.linkedin.com/in/pedrosampaio/"},
        {text: "Github", href: "https://github.com/psampaio"}
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://pedrosampaio.me",
    plausibleDomain: "pedrosampaio.me",
};

export const SITE_CONTENT: SiteContent = {
    experience: [
        {
            company: "Zalmart",
            position: "Lead Android Developer",
            startDate: "May 2018",
            endDate: "Sept 2020",
            summary: [
                "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
                "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
                "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
            ],
        },
        {
            company: "Bankit",
            position: "Mobile Developer",
            startDate: "Feb 2017",
            endDate: "May 2018",
            summary: [
                "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
                "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
            ],
        },
        {
            company: "Driveer",
            position: "Frontend Developer",
            startDate: "Jun 2015",
            endDate: "Oct 2016",
            summary:
                "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
        },
    ],
};

// #5755ff
