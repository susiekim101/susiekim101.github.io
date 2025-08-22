import { motion, useScroll, useTransform } from "framer-motion";
import { useRef} from "react";
import Typewriter from "typewriter-effect";
import { ChevronDown, User } from 'lucide-react';
import ContactCards from "../ui/ContactCards";

const Home = () => {
    const homeRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: homeRef,
        offset: ["start start", "end start"]
    });

    // const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);

    return (
        <section
            id="home"
            ref={homeRef}
            className="relative flex flex-col items-center justify-center h-[95vh] w-full"
        >
            <motion.div
                className="pointer-events-none absolute inset-0"
            />


            <div className="text-center">
                <motion.h1
                    style={{opacity: titleOpacity}}
                    className="text-2xl sm:text-6xl"    
                >
                    <div className="my-2 sm:my-5">
                        <span className="text-neutral-300">
                            Hi, I&apos;m{" "}
                        </span>
                        <span className="font-bold bg-gradient-to-br from-blue-100 to-indigo-400 bg-clip-text text-transparent">
                            Susie Kim
                        </span>
                        <span className="text-neutral-300">
                            {" "} and I am a
                        </span>
                    </div>

                    <span className="text-yellow-500 font-bold ">
                        <Typewriter
                            options={{
                                strings: [
                                    "software engineer",
                                    "full-stack developer",
                                    "woman in engineering",
                                    "ambitious student"
                                ],
                                delay: 75,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    
                    <div className="flex w-full justify-center items-center text-sm sm:text-base text-neutral-400 my-5">
                        <h1 className="w-[75%] text-center">Undergraduate student at UCLA studying computer science with a passion for building impactful and innovative software</h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <a href="#contact"
                            className="flex items-center hidden text-lg sm:inline-flex gap-2 px-2 py-1 mr-5 rounded-xl
                                        bg-gray-200/30 text-white hover:text-white hover:bg-gray-200/40
                                        border border-gray-200/50 transition-colors"
                        >
                            <User className="w-5 h-5"/>
                            <span>Contact me</span>
                        </a>

                        <ContactCards/>
                    </div>
                </motion.h1>
            </div>

            <a href="#about" className="absolute bottom-10">
                    <ChevronDown className="w-7 h-7 sm:h-10 sm:w-10"/> 
            </a>

        </section>
    )
}

export default Home;