export interface Project {
    id: string;
    title: string;
    category: string;
    desc: string;
    image: string;
    websiteLink: string;
}

export const projects: Project[] = [
    {
        id: "ai-arcade",
        title: "AI Arcade",
        category: "AI Platform",
        desc: "An advanced arcade and marketplace of AI tools. Discover premium AI algorithms, read insightful blogs, and engage with a global developer community. Experience a robust platform offering specialized tools and learning resources for AI enthusiasts.",
        image: "/images/ai_arcade.png",
        websiteLink: "https://www.aiarcade.tech/"
    },
    {
        id: "exam-portal",
        title: "Secure Exam Portal",
        category: "EdTech Platform",
        desc: "A comprehensive assessment platform engineered for scale. It features dedicated, highly-secure student and admin interfaces for seamless exam creation, management, and real-time execution, ensuring absolute integrity and ease of use.",
        image: "/images/exam_portal.png",
        websiteLink: "https://exam-96957713-e7f90.web.app/"
    },
    {
        id: "playflux",
        title: "Playflux",
        category: "E-Commerce",
        desc: "A high-octane e-commerce destination exclusively built for premium gaming gear and accessories. Engineered for exceptional search speeds and a hyper-optimized checkout flow, delivering the ultimate shopping experience for gamers.",
        image: "/images/playflux.png",
        websiteLink: "#"
    },
    {
        id: "house-of-vastra",
        title: "House of Vastra",
        category: "E-Commerce",
        desc: "An elegant, premium online boutique specializing in authentic Indian traditional attire. Featuring a breathtaking visual design that beautifully showcases intricate clothing while prioritizing a seamless, luxury shopping journey.",
        image: "/images/house_of_vastra.png",
        websiteLink: "#"
    }
];
