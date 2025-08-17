import { CodeXml, File } from 'lucide-react';

const NavBar = () => {

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/10">
        <nav className="mx-auto px-1 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> 
            <div>
                <a href="#home" className="group inline-flex gap-2 items-center">
                    <CodeXml className="h-5 w-5 text-yellow-400 group-hover:rotate-6 transition-transform"/>
                    <span className="text-sm tracking-wider">susie.dev</span>
                </a>
            </div>

            <div className="flex items-center gap-1">
                {[
                    { href: "#about", label: "ABOUT"},
                    { href: "#projects", label: "PROJECTS"},
                    { href: "#contact", label: "CONTACT"},
                ].map((item) => (
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
                    className="flex items-center ml-2 hidden sm:inline-flex gap-1.5 px-2 py-1 rounded-xl
                                bg-yellow-500/15 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/25
                                border border-yellow-400/30
                                transition-colors">
                    <File className="h-4 w-4"/>
                    <span>Resume</span>
                </a>
            </div>
        </nav>
        </header>
    );
}

export default NavBar;