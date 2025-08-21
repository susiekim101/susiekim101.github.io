import {type Experience} from "./experiences";
import { motion } from "framer-motion";
import { Sparkle } from 'lucide-react';

type ExperienceItemProp = {
    item: Experience
}

const ExperienceItem = ( {item}: ExperienceItemProp ) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-50px"}}
            transition={{duration: 0.5}}
            className="flex py-3 px-5 gap-4 w-full"
        >
            <div className="hidden sm:inline-flex basis-[20%] text-sm shrink-0">
                <span className="text-white/70">{item.dates}</span>
            </div>

            <div className="pr-5">
                <div className="flex gap-3 items-center sm:text-base text-sm">
                        <Sparkle
                            className="hidden sm:inline-flex h-3 w-3"
                        />
                        <h3 className="font-semibold">{item.title}, </h3>
                        <span className="italic">{item.organization}</span>
                </div>

                <div className="w-full ml-6 mt-3">
                    <span className="text-xs sm:text-sm">
                        {item.description}
                    </span>
                </div>
            </div>

        </motion.div>
    )
}
/*
                <ul className="list-disc pl-10 text-sm">
                    {item.description.map( (bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                    ))}
                </ul>*/
export default ExperienceItem;