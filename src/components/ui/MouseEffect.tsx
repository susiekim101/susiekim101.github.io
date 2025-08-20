const MouseEffect = () => {
    // const [pos, setPos] = useState({x: 0, y: 0});

    return (
        <div
            // onMouseMove={(e) => setPos({x: e.clientX, y: e.clientY})}
            className="relative bg-slate-950 overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0"
            />

        </div>
    );
}

export default MouseEffect;