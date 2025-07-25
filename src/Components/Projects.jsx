// Projects Component
const Projects = () => {
  const projectsData = [
    {
      title: "StreamSphere - An OTT Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration using Blockchain.",
      technologies: ["React", "Node.js", "MongoDB", "Solidity","Firebase","Hardhat"],
      link: "https://github.com/SeeThearc/StreamReact",
      live: "https://stream-react-flame.vercel.app/"
    },
    {
      title: "Pintura - Decentralized File Sharing Platform",
      description: "A decentralized file sharing platform built on Ethereum blockchain ensuring transparency and security.",
      technologies: ["Solidity", "React", "Ethers.js", "Hardhat","CSS"],
      link: "https://github.com/SeeThearc/PINTURA",
      live: "https://pintura-chi.vercel.app"
    },
    {
      title: "Parcel Damage Detector",
      description: "A Machine Learning Model Which predicts if the parcel is damaged or not by analysing the image.",
      technologies: ["Python", "skicit-learn", "Kaggle"],
      link: "https://github.com/SeeThearc/Damage_detection_model"
    },
    {
      title: "Delcopa Faucet",
      description: "An ERC-20 Fungible Token Faucet",
      technologies: ["React", "Hardhat", "Metamask", "CSS","Solidity"],
      link: "https://github.com/SeeThearc/DelCopa-Faucet-ERC20-Token-",
      live: "https://del-copa-faucet-erc-20-token.vercel.app"
    },
    {
      title: "Secure SFTP File Transfer System",
      description: "Developed a secure file transfer system in Java,Implemented AES-256 encryption to ensure data security.",
      technologies: ["Java", "WebSockets"],
      link: "#"
    },
    {
      title: "Coffee Blocko",
      description: "A platform for buying coffee and sharing your coffee experience with our community",
      technologies: ["Solidity", "Hardhat","React.js","CSS"],
      link: "https://github.com/SeeThearc/Coffee-Blocko",
      live: "https://coffee-blocko.vercel.app"
    }
  ];

  const handleProjectClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleProjectClick(project.link)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" onClick={(e) => e.stopPropagation()}>
              🔗 View Project
            </a>
            <br />
            {project.live && <a href={project.live} className="project-link" onClick={(e) => e.stopPropagation()}>
              <img
                src="stream.png"
                alt="YouTube Live Icon"
                height="20px"
            /> Live
            </a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;