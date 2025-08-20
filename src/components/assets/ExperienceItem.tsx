import {type Experience} from "./experiences";
import { motion } from "framer-motion";
import { Sparkle } from 'lucide-react';

type ExperienceItemProp = {
    item: Experience
}

const ExperienceItem = ( {item}: ExperienceItemProp ) => {
    return (
        <motion.li
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-75px"}}
            transition={{duration: 0.5}}
            className="flex flex-col py-3 px-5 gap-4"
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <Sparkle
                        className="h-3 w-3"
                    />
                    <h3 className="font-semibold">{item.title}, </h3>
                    <span className="italic">{item.organization}</span>
                </div>
                
                <div>
                    <span className="text-white/70">{item.dates}</span>
                </div>
            </div>

            <ul className="list-disc pl-10 text-sm">
                {item.description.map( (bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                ))}
            </ul>
        </motion.li>
    )
}

export default ExperienceItem;