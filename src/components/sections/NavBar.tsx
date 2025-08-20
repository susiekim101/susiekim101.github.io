import { CodeXml, File, Menu } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
    { href: "#about", label: "ABOUT"},
    { href: "#projects", label: "PROJECTS"},
    { href: "#experiences", label: "EXPERIENCES"}
]

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/10">
        <nav className="mx px-1 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> 
            <div>
                <a href="#home" className="group inline-flex gap-2 items-center">
                    <CodeXml className="h-5 w-5 text-yellow-400 group-hover:rotate-6 transition-transform"/>
                    <span className="text-sm tracking-wider">susiekim.dev</span>
                </a>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden sm:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="text-sm px-3 py-1.5 rounded-xl tracking-widset text-neutral-300 hover:text-white hover:bg-white/5 transition-colors">
                            {item.label}
                    </a>
                ))}

                <a href="/Susie_Kim_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center ml gap-1.5 px-2 py-1 rounded-xl
                                bg-yellow-500/15 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/25
                                border border-yellow-400/30 transition-colors">
                    <File className="h-4 w-4"/>
                    <span>Resume</span>
                </a>
            </div>

            { /* MOBILE VIEW */} 
            <button
                className="sm:hidden p-2"
                onClick={() => setOpen(!open)}
                aria-label="Open navigation"
            >
                <Menu className="h-6 w-6 text-yellow-400"/>
            </button>
            
        </nav>

        { /* MOBILE VIEW
        {open && (
            <div className="sm:hidden absolute w-full bg-slate-900/50 border border-white/50">
                <h1>Hello</h1>

            </div>
        )} */ }
        </header>
    );
}

export default NavBar;