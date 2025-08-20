import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import ContactCards from "../ui/ContactCards";

const Contact = () => {
    return (
        <section id="contact">
            <div className="w-full h-auto flex flex-col justify-center gap-10 p-10">
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-75px"}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 py-5">
                        <User className="text-yellow-500 w-10 h-10"/>
                        contact
                    </h2>

                    <p>
                        Always eager to grow and improve as a student, developer, and collaborator. Feel free to reach out by email or connect with me on LinkedIn! 
                    </p>
                    
                    <h2 className="flex justify-center items-center text-base sm:text-2xl font-semibold">
                        <Mail className="w-10 h-10 text-yellow-500 m-5"/>
                        susiekim101@ucla.edu
                    </h2>

                    <div className="flex justify-center items-center my-5">
                        <a
                            href="mailto:susiekim101@ucla.edu"
                            rel="noreferrer"
                            target="_blank"
                            className="flex items-center hidden text-lg sm:inline-flex mr-5 gap-2 px-2 py-1 rounded-xl
                            bg-gray-200/30 text-white hover:text-white hover:bg-gray-200/40
                            border border-gray-200/50 transition-colors"
                        >
                            <Mail/>
                            Mail
                        </a>
                        <ContactCards/>
                    </div>
                </motion.div>

            </div>

        </section>
    );
}

export default Contact;