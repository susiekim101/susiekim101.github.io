export interface Project {
    title: string,
    description: string,
    tags: string[],
    link: string
}

const PROJECTS: Project[] = [
    {
        title: "POSCO Reinforcement Learning",
        description: "A reinforcement learning simulation using Isaac Lab that defines the markov decision process problem for construction work for POSCO (South Korean steel manufacturer).",
        tags: ["Python", "Isaac Lab", "Isaac Sim", "PyTorch"],
        link: "https://github.com/susiekim101/posco-mdp"
    },

    {
        title: "Personal Website",
        description: "This website! A personal portfolio website to share a little bit about myself and my projects :)",
        tags: ["React", "Lucide", "TypeScript", "Tailwind"],
        link: "https://github.com/susiekim101/susiekim101.github.io"
    },

    {
        title: "Stile Profile",
        description: "Trauma-informed interior design quiz for a nonprofit organization that gathers comprehensive input regarding style preferences, accessibility needs, and emotional triggers and generates personalized interior design information using Gemini. Currently working to deploy by October 2025.",
        tags: ["React", "HTML", "CSS", "Firebase"],
        link: "https://github.com/susiekim101/tith-stile"
    },
    {
        title: "Clouds2Campus",
        description: "Matches university students based on flight arrival times for rideshare to campus. Allows students to plan rides ahead of time, reduces travel costs, and decreases carbon emissions",
        tags: ["Hackathon", "React", "Javascript", "Gemini", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/susiekim101/la-hacks-25"
    },
    {
        title: "TimeLeaf",
        description: "Personal discovery quiz to help users discover new passions and hobbies. Includes a progress tracker to record daily activity logs",
        tags: ["Hackathon", "HTML", "CSS", "Gemini", "Javascript", "Next.js", "Node.js", "MongoDB"],
        link: "https://github.com/susiekim101/la-hacks-25"
    }
]

export default PROJECTS;