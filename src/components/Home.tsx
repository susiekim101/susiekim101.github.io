import { motion, useScroll, useTransform } from "framer-motion";
import { title } from "motion/react-client";
import { useRef} from "react";
import Typewriter from "typewriter-effect";


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
            className="relative flex items-center justify-center h-screen w-screen border border-white border-solid"
        >
            <motion.div
                style={{scale: scaleBg}}
                className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-800 to-slate-900"
            />
                <div className="text-center">
                    <motion.h1
                        style={{opacity: titleOpacity}}
                        className="text-[clamp(1rem, 5vw, 2rem)] md:text-5xl font-bold"    
                    >
                        Hi, I&apos;m Susie Kim and I am a{" "}
                        <span className="text-yellow-500">
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

        </section>
    )
}

export default Home;