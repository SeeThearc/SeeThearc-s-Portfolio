import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' }
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };
  useEffect(() => {
    const handleScroll = () => {
      const ids = ['home', ...sections.map(s => s.id)];
      const scrollPosition = window.scrollY + 160;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id === 'home' ? 'education' : id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="App">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        <div className="main-container">
          <Hero />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;