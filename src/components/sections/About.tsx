import { Laptop } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillsCarousel from "../ui/SkillsCarousel";
import skills from "../../assets/skills.json";

const About = () => {

    return (
        <section id="about">
            <div className="w-screen min-h-screen h-auto flex flex-col justify-center gap-10 p-10">
                
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
                    <p>
                        Undergraduate student at UCLA studying computer science with a passion for building impactful and innovative software. 
                        I love to create, see my ideas come to life, and watch people interact with the things I've built. I'm interested 
                        in exploring the intersection of AI and robotics, and how we can use intelligent systems to simplify everyday tasks, 
                        enhance human capability, and provide meaningful service in real-world environments.
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
                                <li>planning and organizing for Society of Women Engineer's Evening with Industry 2026!</li>
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