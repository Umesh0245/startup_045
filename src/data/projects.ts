export interface Project {
    id: string;
    title: string;
    category: string;
    desc: string;
    image: string;
    websiteLink: string;
    technologies: string[];
    objectives: string[];
}

export const projects: Project[] = [
    {
        id: "ai-arcade",
        title: "AI Arcade",
        category: "AI Platform",
        desc: "An advanced arcade and marketplace of AI tools. Discover premium AI algorithms, read insightful blogs, and engage with a global developer community. Experience a robust platform offering specialized tools and learning resources for AI enthusiasts.",
        image: "/images/ai_arcade.png",
        websiteLink: "https://www.aiarcade.tech/",
        technologies: ["React", "Next.js", "GPT-4 AI", "Tailwind CSS", "Node.js"],
        objectives: ["Centralize cutting-edge AI utility", "Ensure an intuitive UX for prompt generation", "Create an automated marketplace for models"]
    },
    {
        id: "exam-portal",
        title: "Secure Exam Portal",
        category: "EdTech Platform",
        desc: "A comprehensive assessment platform engineered for scale. It features dedicated, highly-secure student and admin interfaces for seamless exam creation, management, and real-time execution, ensuring absolute integrity and ease of use.",
        image: "/images/exam_portal.png",
        websiteLink: "https://exam-96957713-e7f90.web.app/",
        technologies: ["React", "Firebase", "Node.js", "WebRTC", "Socket.io"],
        objectives: ["Architect lossless large-scale assessment delivery", "Maintain absolute proctoring security levels", "Real-time socket synchronized results"]
    },
    {
        id: "playflux",
        title: "Playflux",
        category: "E-Commerce",
        desc: "A high-octane e-commerce destination exclusively built for premium gaming gear and accessories. Engineered for exceptional search speeds and a hyper-optimized checkout flow, delivering the ultimate shopping experience for gamers.",
        image: "/images/playflux.png",
        websiteLink: "#",
        technologies: ["Shopify Plus", "React", "Framer Motion", "GraphQL", "Tailwind CSS"],
        objectives: ["Deliver neon cinematic product previews", "Implement lightning-fast edge cart system", "Enhance global gear delivery logistics"]
    },
    {
        id: "house-of-vastra",
        title: "House of Vastra",
        category: "E-Commerce",
        desc: "An elegant, premium online boutique specializing in authentic Indian traditional attire. Featuring a breathtaking visual design that beautifully showcases intricate clothing while prioritizing a seamless, luxury shopping journey.",
        image: "/images/house_of_vastra.png",
        websiteLink: "#",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        objectives: ["Highlight premium HD texture detail beautifully", "Ensure a minimalist luxury shopping sequence", "Architect limitless e-commerce catalog capability"]
    }
];
