import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-[#1d1d1d]">
      <Navbar />
      <Hero />
      <Skills /> 
      <Projects />
      <Education />
    </div>
  );
}

export default App;