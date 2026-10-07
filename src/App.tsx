import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { FunFacts } from './components/FunFacts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1020] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-cyan-200">
      {/* Background ambient lighting and subtle grid */}
      <BackgroundGlow />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections in exact requested order */}
      <main>
        {/* 1. Introduction / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Education */}
        <Education />

        {/* 6. Certificates */}
        <Certificates />

        {/* 7. Fun Facts About Me (Beyond the Code) */}
        <FunFacts />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
