import React from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import SkillsStrip from './components/SkillsStrip.jsx';
import RetroFooter from './components/RetroFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 selection:bg-violet-300 selection:text-neutral-900">
      <Hero />
      <SkillsStrip />
      <Projects />
      <RetroFooter />
    </div>
  );
}
