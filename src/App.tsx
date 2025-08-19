import './App.css'
import NavBar from "./components/sections/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import MouseEffect from "./components/ui/MouseEffect";
import Projects from "./components/sections/Projects";
import Experiences from './components/sections/Experiences';

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
    </div>
  )
}

export default App

/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/