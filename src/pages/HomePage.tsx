import MouseEffect from "@/components/ui/MouseEffect";
import NavBar from "@/components/sections/NavBar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import Contact from "@/components/sections/Contact";

const HomePage = () => {
  return (
    <div className="font-mono">
      <MouseEffect/>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
    </div>
  )
}

export default HomePage;