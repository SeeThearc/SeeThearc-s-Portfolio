const Navbar = ({ activeSection, scrollToSection }) => {
  const handleResumeDownload = () => {
    const fileId = '1Vox2dfKIGjoxUW1B6HvOVrnRblUqEKiG';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          SeeThearc
        </div>
        <ul className="nav-menu">
          <li>
            <a 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={() => scrollToSection('education')}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Connect with Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
