export interface Experience {
    title: string,
    organization: string,
    dates: string,
    description: string
}

const EXPERIENCES: Experience[] = [
    {
        title: "Software Developer Intern",
        organization: "Tori in the House",
        dates: "May 2025 - Present",
        description: `Develop full-stack, Gemini-powered application, to be deployed by Fall 2025.
        Drive product ideation by initiating brainstorming sessions, aligning technical feasibility 
        with business goals.`,
    },
    {
        title: "Full Stack Developer",
        organization: "Association for Computing Machinery",
        dates: "Nov. 2024 - Present",
        description: `Design and maintain an open source web application serving 500+ users 
        across 9 committees. Responsible for migrating 1,000+ lines of Javascript to Typescript,
        reducing runtime errors by 20%.`
    },
    {
        title: "Logistics Chair",
        organization: "Society of Women Engineers",
        dates: "Oct. 2024 - Present",
        description: `Lead logistics for SWE’s largest student-run networking event, 
        connecting 200+ students and 20+ companies. Oversee committee budget for external
        workshops for 90+ students, collaboarting with companies like PPG Industries and Amazon.`
    },
    {
        title: "Research Assistant",
        organization: "Reinforcement Learning and Robot Learning Lab",
        dates: "June 2025 - Aug. 2025",
        description: `Designed robotic simulation using Isaac Lab to solve a markov decision 
        process with a PPO for construction tasks at POSCO (Korean construction company). Presented 
        and led discussions on academic papers with 10+ graduate students.`
    },
    {
        title: "Data Analyst",
        organization: "DataRes at UCLA",
        dates: "Jan 2025 - Mar 2025",
        description: `Analyzed data on the world’s top 200 universities using Pandas, NumPy, and 
        Matplotlib to uncover factors affecting prestige. Solved for key drivers of university 
        rankings using linear regression (R = –0.95), finding research output to be a crucial factor.`
    }
]

export default EXPERIENCES;