import { FileCode2, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import PROJECTS, { type Project } from "../assets/projects";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Tags from "../assets/Tags";

const Projects = () => {

    return (
        <section id="projects">
            <div className="w-full min-h-screen h-auto p-10">
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-75px"}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 py-5">
                        <FileCode2 className="text-yellow-500 w-10 h-10"/>
                        projects
                    </h2>
                </motion.div>
                
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    {
                        PROJECTS.map( (project: Project, i) => (
                            <motion.a
                                key={project.title}
                                href={project.link}
                                target={project.link?.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                initial={{opacity: 0, y: 12}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.3, delay: i * 0.3}}
                                className="group"
                            >
                                <Card className="h-full w-full bg-white/7 border-white/30 hover:border-yellow-300/50 hover:bg-white/5 transition-colors rounded-2xl shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="flex w-full min-w-0 text-lg items-center justify-between gap-3">
                                            <span className="truncate flex-1 min-w-0">{project.title}</span>
                                            <ExternalLink className="shrink-0 h-4 w-4 opacity-0 group-hover:opacity-100 hover:text-yellow-300 transition-opacity"/>
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-sm text-neutral-400 leading-6 min-h-[3.5rem]">{project.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((t) => (
                                            <Tags children={t}/>
                                        ))}</div>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center mt-10">
                <motion.a
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-15px"}}
                    transition={{duration: 0.6}}
                    className="flex gap-2 border border-white/50 hover:border-yellow-300/50 text-sm px-3 py-1.5 rounded-xl tracking-widset text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    href="https://github.com/susiekim101"
                    rel="noreferrer"
                    target="_blank"
                >
                    <span>
                        View More
                    </span>
                    <ChevronRight className="w-5 h-5 text-yellow-300"/>
                </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Projects;