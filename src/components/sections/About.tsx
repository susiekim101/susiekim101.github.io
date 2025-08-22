import { Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillsCarousel from "../ui/SkillsCarousel";
import skills from "../../assets/skills.json";

const About = () => {

    return (
        <section id="about">
            <div className="w-full min-h-screen h-auto flex flex-col justify-center gap-10 p-10">
                
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-75px"}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 py-5">
                        <Laptop className="text-yellow-500 w-10 h-10"/>
                        about me
                    </h2>
                    <p className="whitespace-pre-line">
                        Hi 👋! I'm Susie Kim, a rising second-year computer science student passionate about motivating change through technology.
                        I love seeing my ideas come to life and watching people interact with the things I build. Programming and designing user-centered
                        applications has become both a hobby and a long-term goal I'm eager to scale to larger audiences.
                        <br/><br/>
                        When I'm not brainstorming or executing new projects, I thrive in team settings where I can voice ideas and engage in thoughtful
                        discussions. Whether leading a technical team for a nonprofit to implement new backend features or suggesting improvements for UCLA's
                        Evening with Industry, I find energy in collaboration and shared problem-solving.
                        <br/><br/>
                        I'm also excited about exploring the intersection of AI and robotics, and how intelligent systems can simplify daily tasks, enhance
                        human capability, and provide meaningful service in real-world environments. I'm enthusiastic and motivated to contribute to the future
                        of robot learning.
                    </p>

                    <div className="my-5">
                        <SkillsCarousel skills={skills}/>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-75px"}}
                    transition={{duration: 1, delay: 0.05}}
                >
                    <Card className="bg-white/10 border-white/20 rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-neutral-100 text-lg">Currently, I'm...</CardTitle>
                        </CardHeader>
                        <CardContent className="text-m text-neutral-300 leading-7">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>planning and organizing for Society of Women Engineers's Evening with Industry 2026</li>
                                <li>working on personal projects and studying DSA</li>
                                <li>enjoying summer break :{")"}</li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

export default About;