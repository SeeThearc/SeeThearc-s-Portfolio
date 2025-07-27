import React from 'react';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' }
];

const Navbar = ({ activeSection, scrollToSection }) => (
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
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;