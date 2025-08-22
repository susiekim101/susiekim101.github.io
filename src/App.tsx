import './App.css'
import NavBar from "./components/sections/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import MouseEffect from "./components/ui/MouseEffect";
import Projects from "./components/sections/Projects";
import Experiences from './components/sections/Experiences';
import Contact from './components/sections/Contact';

// npm install -D tailwindcss@3
// npm install motion
// npm install typewriter-effect
// npm install shadcn@latest add card
function App() {
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

export default App