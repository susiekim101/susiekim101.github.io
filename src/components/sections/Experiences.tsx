import { ChartLine } from "lucide-react";
import { motion } from "framer-motion";
import ExperienceScroller from "../ui/ExperienceScroller";
const Experiences = () => {

    return (
        <section id="experiences">
            <div className="w-full min-h-screen h-auto p-10">
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-75px"}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-xl sm:text-2xl front-semibold flex items-center gap-2 py-5"> 
                        <ChartLine className="text-yellow-500 w-10 h-10"/>
                        experiences
                    </h2> 
                </motion.div>

                <ExperienceScroller/>

            </div>
        </section>
    );
}

export default Experiences;