import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
// npm install -D tailwindcss@3
// npm install motion
// npm install typewriter-effect
// npm install shadcn@latest add card
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/all-projects" element={<AllProjects />}/>
    </Routes>
  )
}

export default App