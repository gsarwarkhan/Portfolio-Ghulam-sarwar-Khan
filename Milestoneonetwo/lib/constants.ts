export const CONTACT_INFO = {
    email: "sarwaronline@gmail.com",
    phone: "+92 3232777272",
    whatsapp: "923232777272",
    location: "Karachi, Pakistan",
};

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/ghulam-sarwar-khan-b989b48a/",
    facebook: "https://www.facebook.com/sarwaronline",
    youtube: "https://www.youtube.com/channel/UC1cipUgPINuc-XFgtJCb30g",
    github: "https://github.com/gsarwarkhan",
};

export const NAV_ITEMS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#digital-ark", label: "The Digital Ark" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export const PROJECTS = [
    {
        id: "ai-agent",
        title: "AI Agent Assistant",
        description: "A sophisticated AI agent built with Streamlit that provides intelligent assistance and automation capabilities. This project demonstrates my expertise in AI development, natural language processing, and creating user-friendly interfaces for complex AI systems.",
        tech: ["Streamlit", "Python", "AI/ML", "NLP"],
        liveUrl: "https://ai-agent-appgit-6rivk5mxhzbkanszvdshte.streamlit.app/",
        githubUrl: "https://github.com/gsarwarkhan",
        featured: true,
    },
    {
        id: "physical-ai-book",
        title: "Physical AI Docusaurus Book",
        description: "Hackathon 1 Project: A comprehensive technical documentation and knowledge base built with Docusaurus, exploring the intersection of Physical AI and modern web technologies.",
        tech: ["Docusaurus", "React", "Documentation"],
        liveUrl: "https://hackathon-1-q4.vercel.app/",
        featured: false,
    },
    {
        id: "evolution-todo",
        title: "Evolution Todo App",
        description: "Hackathon 2 Project: An advanced task management application built with Streamlit, featuring smart categorization and productivity tracking.",
        tech: ["Streamlit", "Python", "Productivity"],
        liveUrl: "https://gsarwar-todo-pro.streamlit.app/",
        featured: false,
    },
    {
        id: "bi-dashboard",
        title: "Business Intelligence Dashboard",
        description: "A comprehensive business intelligence solution that integrates data from multiple sources to provide actionable insights for executive decision-making. Features real-time data visualization, interactive dashboards, and automated reporting systems.",
        tech: ["React", "TypeScript", "Data Visualization", "API Integration"],
        featured: false,
    },
    {
        id: "process-automation",
        title: "Process Automation System",
        description: "An automated workflow management system designed to streamline administrative processes and improve operational efficiency. Leverages AI to optimize business processes and reduce manual workload.",
        tech: ["Python", "Automation", "Workflow", "AI Integration"],
        featured: false,
    },
];

export const EXPERIENCE = [
    {
        id: "pta-sg",
        title: "Secretary General",
        company: "Pakistan Tea Association",
        logoUrl: "/images/Pakistan Tea Association logo.jpg",
        period: "2026 - Present",
        description: "Leading the national trade body for the tea industry, overseeing institutional standardization, membership compliance, and strategic policy correspondence.",
        responsibilities: [
            "Institutional documentation standardization & compliance leadership",
            "Membership compliance process restructuring and oversight",
            "EC coordination and high-level policy correspondence",
            "Strategic stakeholder engagement and trade policy advocacy",
            "AI & Digital systems adoption for trade body operations",
        ],
    },
    {
        id: "kcci-deputy",
        title: "Deputy Secretary",
        company: "Karachi Chamber of Commerce and Industry (KCCI)",
        logoUrl: "/images/KCCI logo.jpg",
        period: "July 2022 - January 2025",
        description: "Leading administrative operations and strategic initiatives at Pakistan's premier business chamber. Managing executive communications, stakeholder relations, and chamber development programs while driving digital transformation initiatives.",
        responsibilities: [
            "Oversee executive-level administrative operations and strategic planning",
            "Manage high-level stakeholder relationships and international partnerships",
            "Lead digital transformation initiatives and technology integration",
            "Coordinate chamber development programs and member engagement strategies",
        ],
    },
    {
        id: "orient-rental",
        title: "Assistant Manager Admin & CSR",
        company: "Orient Rental Modaraba",
        logoUrl: "/images/Orient Rental Modaraba Logo.jpg",
        period: "2020 - 2022",
        description: "Led comprehensive administrative operations and corporate social responsibility initiatives, implementing process improvements and community engagement programs.",
        responsibilities: [
            "Managed administrative operations and CSR program development",
            "Implemented process optimization strategies improving efficiency by 25%",
            "Developed and executed community engagement and sustainability initiatives",
            "Coordinated cross-functional teams and external stakeholder relationships",
        ],
    },
    {
        id: "uae-real-estate",
        title: "Real Estate Portfolio Manager",
        company: "United Arab Emirates",
        period: "2018 - 2020",
        description: "Managed diverse property portfolios and provided comprehensive tenant solutions in the competitive UAE market, focusing on client satisfaction and market growth strategies.",
        responsibilities: [
            "Managed multi-million dollar property portfolios and tenant relations",
            "Conducted market analysis and developed growth strategies",
            "Achieved 95% client satisfaction rate through service optimization",
            "Implemented digital solutions for property management processes",
        ],
    },
    {
        id: "fpcci",
        title: "Assistant Manager",
        company: "The Federation of Pakistan Chambers of Commerce and Industry (FPCCI)",
        logoUrl: "/images/FPCCI logo.jpg",
        period: "2010 - 2016",
        description: "Coordinated with business chambers nationwide and managed key stakeholder relationships, facilitating business development and inter-chamber cooperation programs.",
        responsibilities: [
            "Coordinated with 100+ business chambers across Pakistan",
            "Managed key stakeholder relationships and business development initiatives",
            "Facilitated inter-chamber cooperation and trade promotion programs",
            "Developed and implemented chamber development strategies",
        ],
    },
];

export const SKILLS = {
    technical: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python/AI Development", level: 85 },
        { name: "Streamlit", level: 90 },
        { name: "HTML/CSS/JavaScript", level: 90 },
    ],
    professional: [
        { name: "Executive Administration", level: 95 },
        { name: "Stakeholder Management", level: 92 },
        { name: "Business Analysis", level: 88 },
        { name: "Project Management", level: 90 },
        { name: "Strategic Planning", level: 88 },
    ],
};
