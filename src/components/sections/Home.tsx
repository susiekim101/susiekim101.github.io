import { motion, useScroll, useTransform } from "framer-motion";
import { useRef} from "react";
import Typewriter from "typewriter-effect";
import { ChevronDown } from 'lucide-react';


const Home = () => {
    const homeRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: homeRef,
        offset: ["start start", "end start"]
    });

    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);

    return (
        <section
            id="home"
            ref={homeRef}
            className="relative flex flex-col items-center justify-center h-[95vh] w-screen"
        >
            <motion.div
                style={{scale: scaleBg}}
                className="absolute inset-0 -z-10 bg-slate-900"
            />

            <div className="text-center">
                <motion.h1
                    style={{opacity: titleOpacity}}
                    className="text-[4vw]"    
                >
                    <span className="text-neutral-300">
                        Hi, I&apos;m{" "}
                    </span>
                    <span className="font-bold">
                        Susie Kim{" "}
                    </span>
                    <span className="text-neutral-300">
                        and I am a
                    </span>

                    <span className="text-yellow-500 font-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    "software engineer",
                                    "full-stack developer",
                                ],
                                delay: 75,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </motion.h1>
            </div>

            <a href="#about" className="absolute bottom-20">
                    <ChevronDown className="h-10 w-10"/> 
            </a>

        </section>
    )
}

export default Home;