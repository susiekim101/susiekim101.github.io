import { ChartLine } from "lucide-react";
import { motion } from "framer-motion";

const Experiences = () => {

    return (
        <section id="experiences">
            <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center gap-10 p-10 border border-white border-solid">
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
            </div>
        </section>
    );
}

export default Experiences;