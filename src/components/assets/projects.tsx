
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
        title: "Dev Blog",
        description:  "A archive blog of personal insights and self explanations to Leetcode problems",
        tags: ["Next.js", "React", "MongoDB", "Vercel", "TypeScript", "Tailwind"],
        link: "https://github.com/susiekim101/dev-blog",
        longDescription: [
            "Currently building a blog where I post about recent Leetcode problems, so I can revist them in the future and recollect how I solved them :)",
        ]
    },
    {
        title: "Bruin Plan",
        description:  "An interactive 4-year planner that enables UCLA engineering students to plan out their degree",
        tags: ["React", "MySQL", "Node.js", "Express", "Typescript", "Tailwind", "Axios", "Cucumber", "Jest", "Playwright", "JWT"],
        link: "https://github.com/susiekim101/bruin-plan",
        media: {
            type: "video",
            src: "https://youtu.be/892KyBB5XXc",
            caption: "Demo video of Bruin Plan including the landing page, user dashboard, and public bulletin"
        },
        longDescription: [
            "A visual drag-an-drop interface to add courses to the user dashboard with secure user authentication with server-side JWT",
            "An anonymous, public bulletin to share and view other students' sample 4-year plans",
            "Spearheaded design of fullstack React and Node.js web application, utilizing UML diagrams to model architecture",
            "Architected backend with 5 MySQL tables to query 200+ courses, handling authentication with JWT",
            "Developed comprehensive REST APIs to connect components and build end-to-end unit tests to validate workflows",
        ]
    },
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
            src: "/posco-demo.mov",
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
        description: "A trauma-informed interior design quiz that gathers comprehensive input regarding style preferences, accessibility needs, and emotional triggers and generates personalized interior design information with the help of AI.",
        tags: ['React', 'Node.js', 'Tailwind', 'Google Cloud Platform', 'Gemini API'],
        link: "https://github.com/susiekim101/",
        media: {
            type: "video",
            src: "/stile-demo.mov",
            caption: "Initial ideation for Tori in the House at a hackathon. Currently working on new iteration of this original project."
        },
        longDescription: [
            "Won 1st place at hackathon among 20 teams, selected to continue building for the nonprofit organization",
            "Built full-stack web application with React and Node.js, improving client-server responsiveness and reliability",
            "Engineered 3 Google Cloud Platform APIs (Gemini, Text-To-Speech, Cloud Translation) with Express.js",
            "Reduced manual workload by 80% by automating data entry with JavaScript to populate Firebase database",
            "Addresses the problem of other conventional style assessments, which are not trauma-informed and fail to gather the depth of detail of each client. Aims to use AI to summarize each individual's response and generate images of interior designs, color palettes, and suggested furniture all tailors to each unique client."
        ]
    },
    {
        title: "Flight Itinerary",
        description: "Coursework project to get hands-on experience with data structures and algorithms and challenging path-finding algorithms",
        tags: ["C++", "Data Structues", "Algorithms", "LLDB"],
        link: "https://github.com/katieyungchung/athenahacks25",
        longDescription: [
            'Implementeded breadth-first-search and depth-first-search algorithms in C++ to generate optimized flight itineraries across 180,000+ real-life simulated flights',
            'Debugged Dijkstra’s algorithm with LLDB in Xcode, improving runtime efficiency by over 250% (<800ms)'
        ]
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
            src: "/clouds2campus-demo.mp4",
            caption: "Demo video of Clouds2Campus, including log in/sign up features and file upload with AI extraction"
        }
    },
    {
        title: "TimeLeaf",
        description: "Personal discovery quiz to help users discover new passions and hobbies. Includes a progress tracker to record daily activity logs.",
        tags: ["Hackathon", "HTML", "CSS", "Gemini", "Javascript", "Next.js", "Node.js", "MongoDB"],
        link: "https://github.com/katieyungchung/athenahacks25"
    }
]

export default PROJECTS;