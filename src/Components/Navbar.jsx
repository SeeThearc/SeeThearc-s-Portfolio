import React, { useState } from 'react';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' }
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span>SeeThearc</span>
        </div>
        <ul className="nav-menu">
          {sections.map(s => (
            <li key={s.id}>
              <a
                className={activeSection === s.id ? 'active' : ''}
                onClick={() => handleNavClick(s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger button for mobile */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {sections.map(s => (
          <a
            key={s.id}
            className={activeSection === s.id ? 'active' : ''}
            onClick={() => handleNavClick(s.id)}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;