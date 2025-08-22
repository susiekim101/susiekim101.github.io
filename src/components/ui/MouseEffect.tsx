import { useRef, useEffect } from "react";

const MouseEffect = () => {
    const radius = 400;
    const strength = 0.15;
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current!;
        let x = 0, y = 0;
        let raf: number | null = null;

        const onMove = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            if(!raf) {
                raf = requestAnimationFrame(() => {
                    raf = null;
                    element.style.background = `radial-gradient(${radius}px at ${x}px ${y}px, rgb(69, 85, 108, ${strength}), transparent 90%)`
                });
            }
        }
        window.addEventListener("mousemove", onMove, {passive: true});
        return () => {
                window.removeEventListener("mousemove", onMove);
                if(raf) cancelAnimationFrame(raf);
            };
    }, [radius, strength]);

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-50"
            style={{mixBlendMode:"screen"}}
        />
    );
}

export default MouseEffect;