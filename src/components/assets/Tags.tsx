interface TagProp {
    children: string
}

const Tags = ({children}: TagProp) => {
    return (
        <span className="text-xs px-2 py-0.5 rounded-full border border-white/15 bg-white/5">
            {children}
        </span>
    )
}

export default Tags;