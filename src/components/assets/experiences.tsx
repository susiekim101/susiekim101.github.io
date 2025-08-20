export interface Experience {
    title: string,
    organization: string,
    dates: string,
    description: string[]
}

const EXPERIENCES: Experience[] = [
    {
        title: "Logistics Chair",
        organization: "Society of Women Engineers",
        dates: "Oct. 2024 - Present",
        description: [
            "Lead logistics for SWE’s largest student-run networking event, connecting 200+ students and 20+ companies with 10% of attendees advancing to next-round interviews through recruiter engagement",
            "Collaborate with company recruiters and industry professionals to coordinate participation and hiring initiatives",
            "Oversee committee budget for external workshops, resume reviews, and mock interviews for 90+ students",
            "Work with team of 7 to manage site visits at PPG Industries and AWS workshops with Amazon"
        ]
    },
    {
        title: "Full Stack Developer",
        organization: "Association for Computing Machinery",
        dates: "Nov. 2024 - Present",
        description: [
            "Design and maintain an open source web application serving 500+ users across 9 committees leveraging Next.js, Node.js, and React to deliver timely, relevant information to members",
            "Migrated 1,000+ lines of JavaScript to TypeScript, reducing runtime errors by 20%",
            "Communicate with 15-member team to establish standardized practices across the open-source codebase"
        ]
    },
    {
        title: "Data Analyst",
        organization: "DataRes at UCLA",
        dates: "Jan 2025 - Mar 2025",
        description: [
            "Analyzed data on the world’s top 200 universities using Pandas, NumPy, and Matplotlib to uncover factors affecting prestige",
            "Solved for key drivers of university rankings using linear regression (R = –0.95), finding research output to be a crucial factor",
            "Created visualizations, including bar graphs and trend lines, aggregating ranks in intervals of 5 for readability",
            "https://ucladatares.medium.com/beyond-the-ivy-what-actually-makes-a-college-prestigious-2dfdbd6f90a4"
        ]
    }
]

export default EXPERIENCES;