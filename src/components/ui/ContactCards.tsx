import githubIcon from "../../../public/github.svg";
import linkedinIcon from "../../../public/linkedin.svg";

const ContactCards = () => {
    return (
        <>
            <a href="https://github.com/susiekim101"
                className="flex items-center text-base sm:text-lg sm:inline-flex gap-2 px-2 py-1 rounded-xl
                            bg-gray-200/30 text-white hover:text-white hover:bg-gray-200/40
                            border border-gray-200/50 transition-colors"
                target="_blank"
                rel="noreferrer"

            >
                <img src={githubIcon} className="w-5 h-5"/>
                <span>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/susiekim101/"
                className="flex items-center text-base sm:text-lg sm:inline-flex ml-5 gap-2 px-2 py-1 rounded-xl
                            bg-gray-200/30 text-white hover:text-white hover:bg-gray-200/40
                            border border-gray-200/50 transition-colors"
                target="_blank"
                rel="noreferrer"

            >
                <img src={linkedinIcon} className="w-5 h-5"/>
                <span>LinkedIn</span>
            </a>
        </>
    )
}

export default ContactCards;