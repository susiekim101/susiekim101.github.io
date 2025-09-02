
export interface Project {
    title: string,
    description: string,
    tags: string[],
    link: string,
    longDescription?: string[],
    repo?: string,
    live?: string,
    media?: {
        type: "image" | "video";
        src: string;
        caption?: string;
        poster?: string;
    };
};

const PROJECTS: Project[] = [
    {
        title: "Study Planner",
        description:  "SQL-based tabular producitivty tool to log study sessions and user statistics",
        tags: ["Node.js", "Express", "Typescript", "PostgreSQL", "Zod", "Docker", "JWT"],
        link: "https://github.com/susiekim101/study-planner",
        longDescription: [
            "Engineered a modular REST API using Express and TypeScript to log study sessions and generate real-time user statistics",
            "Designed a normalized PostgreSQL schema with relational tables for users, subjects, sessions, and stats",
            "Implemented Zod-based input validation to enforce data integrity and strict type safety across endpoints",
            "Integrated JWT authentication with middleware to protect private routes and manage secure user access",
            "Containerized the backend and Postgres database using Docker and Docker Compose for streamlined local development"
        ]
    },
    {
        title: "BruinBites",
        description:  "Mobile application to let students rate and review university dining halls.",
        tags: ["SwiftUI", "Python", "BeautifulSoup", "Firebase"],
        link: "https://github.com/susiekim101/BruinBites"
    },
    {
        title: "POSCO Reinforcement Learning",
        description: "A reinforcement learning simulation using Isaac Lab that defines the markov decision process problem for construction work for POSCO (South Korean steel manufacturer).",
        tags: ["Python", "Isaac Lab", "Isaac Sim", "PyTorch"],
        link: "https://github.com/susiekim101/posco-mdp",
        media: {
            type: "video",
            src: "../../../public/posco-demo.mov",
            caption: "Demonstration of brick simulation using Isaac Sim"
        },
        longDescription: [
            "Designed a robotic simulation in Python using Isaac Lab to solve a markov decision process with a proximal policy optimization algorithm for construction tasks at POSCO, reducing site-related dangers for workers",
            "Engineered custom reward functions, integrating 30+ observation states in 32 training environments, domain randomization, and curriculum learning to accelerate convergence"
        ]
    },

    {
        title: "Personal Website",
        description: "This website! A personal portfolio website to share a little bit about myself and my projects :)",
        tags: ["React", "Lucide", "TypeScript", "Tailwind"],
        link: "https://github.com/susiekim101/susiekim101.github.io"
    },

    {
        title: "Stile Profile",
        description: "To be deployed Fall 2025 with Tori in the House",
        tags: [],
        link: "https://github.com/susiekim101/",
        media: {
            type: "video",
            src: "../../../public/stile-demo.mov",
            caption: "Initial ideation for Tori in the House at a hackathon. Currently working on new iteration of this original project."
        }
    },
    {
        title: "Clouds2Campus",
        description: "Web application that matches university students based on flight arrival times for rideshare to campus.",
        tags: ["Hackathon", "React", "Javascript", "Gemini", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/susiekim101/la-hacks-25",
        longDescription: [
            "Designed a full-stack web platform using React, Tailwind CSS, Node.js, and MongoDB to connect university students for airport carpooling, aimed at cutting travel costs and carbon emissions",
            "Leveraged Google Gemini 2.0 Flash API to automatically extract structured flight information from uploaded itineraries and match riders based on location and time overlap"
        ],
        media: {
            type: "video",
            src: "../../../public/clouds2campus-demo.mp4",
            caption: "Demo video of Clouds2Campus, including log in/sign up features and file upload with AI extraction"
        }
    },
/*
    {
        title: "TimeLeaf",
        description: "Personal discovery quiz to help users discover new passions and hobbies. Includes a progress tracker to record daily activity logs.",
        tags: ["Hackathon", "HTML", "CSS", "Gemini", "Javascript", "Next.js", "Node.js", "MongoDB"],
        link: "https://github.com/katieyungchung/athenahacks25"
    }*/
]

export default PROJECTS;