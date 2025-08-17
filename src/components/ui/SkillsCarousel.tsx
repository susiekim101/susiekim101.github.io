interface SkillsCarouselProps {
    skills: string[];
    durationSec?: number;
}

const SkillsCarousel = ( {skills, durationSec = 20}: SkillsCarouselProps ) => {
    const items = [...skills, ...skills];

    return (
        <div className="marquee border border-slate-500 rounded-md py-3">
            <div
                className="marquee-track px-3"
                style={{ ['--marquee0dureation' as any]: `${durationSec}s`}}
                aria-hidden="true"
            >
                {items.map((skill, idx) => (
                    <span
                        key={idx}
                        className="bg-slate-600 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsCarousel;