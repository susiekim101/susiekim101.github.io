export interface Experience {
    title: string,
    organization: string,
    dates: string,
    description: string
}

const EXPERIENCES: Experience[] = [
    {
        title: "Software Engineering Intern",
        organization: "Slow Factory",
        dates: "Nov. 2025 - Present",
        description: `Convert static platform to React Native app for 100K+ users, promoting media sharing and community engagement. Build and secure PostgreSQL database with Supabase, implementing Row-Level Security to manage user permissions`
    },
    {
        title: "Software Engineering Intern",
        organization: "Daily Bruin",
        dates: "Oct. 2025 - Present",
        description: `Design internal content management system using Python and Django, supporting publication of 100+ flatpages for 60,000+ weekly readers. 
        Streamline formatting for 600+ journalists by engineering backend services to automatically generate AML files`
    },
    {
        title: "Logistics Chair",
        organization: "Society of Women Engineers",
        dates: "Oct. 2024 - Present",
        description: `Lead logistics for SWE’s largest student-run networking event, 
        connecting 250+ students and 20+ companies. Manage a $20K budget, schedules, and workshops, ensuring high-quality engagement for 90 student attendees`
    },
    {
        title: "Software Developer Intern",
        organization: "Tori in the House",
        dates: "May 2025 - Nov. 2025",
        description: `Develop full-stack, Gemini-powered application with Google Cloud Platform integration.
        Drive product ideation by initiating brainstorming sessions, aligning technical feasibility 
        with business goals.`,
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
        title: "Full Stack Developer",
        organization: "Association for Computing Machinery",
        dates: "Nov. 2024 - Aug. 2025",
        description: `Design and maintain an open source web application serving 500+ users 
        across 9 committees. Responsible for migrating 1,000+ lines of Javascript to Typescript,
        reducing runtime errors by 20%.`
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