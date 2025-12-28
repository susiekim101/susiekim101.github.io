import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/all-projects" element={<AllProjects />}/>
    </Routes>
  )
}

export default App