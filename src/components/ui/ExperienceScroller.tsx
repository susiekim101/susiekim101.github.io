import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import EXPERIENCES from "../assets/experiences";
import ExperienceItem from "../assets/ExperienceItem";

const ExperienceScroller = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({container: ref});
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.02, 1])
    
    return (
        <div className="relative mt-10">
            <motion.div
                style={{scaleY}}
                className="absolute left-3 top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-yellow-400/60 to-yellow-500/10"
                aria-hidden
            />

            <ul
                ref={ref}
                className="relative ml-15 w-auto h-[60vh] sm:h-[70vh] overflow-y-auto space-y-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm "
            >
                {EXPERIENCES.map((item, idx) => (
                    <ExperienceItem key={idx} item={item}/>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceScroller;