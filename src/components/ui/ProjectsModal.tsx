import type { Project } from "../assets/projects";
import { motion } from "framer-motion";
import { X } from "lucide-react"
import GitHubIcon from "../../../public/github.svg";

const ProjectsModal = ({ project, onClose }: { project: Project; onClose: () => void}) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-10" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-gray-950/60" onClick={onClose}/>

            <motion.div
                className="relative z-[61] w-full max-h-full max-w-3xl overflow-y-scroll rounded-2xl border border-white/20 bg-white/10 backdrop-blur shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 text-neutral-300 hover:text-white"
                >
                    <X className="h-4 w-4"/>
                </button>

                {project.media?.type == "image" && project.media.src && (
                    <img src={project.media.src} alt={project.title} className="h-64 w-auto mx-auto mt-10" />
                )}
                
                {project.media?.type == "video" && project.media.src && (
                    <video
                        className="w-2xl mx-auto mt-10"
                        src={project.media.src}
                        controls={false}
                        autoPlay
                        loop
                        muted
                        preload="metadata"
                    />
                )}

                {project.media?.caption && (
                    <div className="px-5 pt-2 text-center text-xs text-neutral-400 w-full">
                        <span>{project.media.caption}</span>
                    </div>
                )}


                <div className="p-6">

                <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.longDescription ? (
                        <ul className="mt-2 text-sm text-neutral-300 leading-6">
                            {project.longDescription.map((d, idx) => (
                                <li key={idx}  className="list-disc mx-6">{d}</li>
                            ))}
                        </ul>
                    ) : 
                    <p className="mt-2 text-sm text-neutral-300 leading-6">
                        {project.description}
                    </p>
                    }

                </div>

                {project.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                            <span className="rounded-lg border border-white/20 bg-5 px-2 py-1 text-xs text-neutral-20 hover:border-yellow-300/60 hover:text-white hover:bg-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}

                <div>
                    <a
                        href={project.link as string}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-4 py-2 mt-5 text-sm text-neutral-200 hover:border-yellow-300/60 hover:text-white hover:bg-white/10"
                    >
                       <img src={GitHubIcon} className="h-5 w-5"/>
                       View on GitHub 
                    </a>
                </div>
                </div>
                
            </motion.div>
        </div>
    );
}

export default ProjectsModal;