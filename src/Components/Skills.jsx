import React from 'react';
import {
  FaCuttlefish, FaPython, FaJava, FaHtml5, FaReact, FaCss3Alt,
  FaJsSquare, FaGitAlt, FaGithubAlt, FaNodeJs
} from 'react-icons/fa';
import { SiSolidity, SiEthers, SiFirebase, SiMongodb, SiTypescript } from 'react-icons/si';
import useSectionReveal from './useSectionReveal';
const Skills = () => {
  const [ref, visible] = useSectionReveal();
  const skillsData = [
    { name: 'C++', icon: <FaCuttlefish /> },
    { name: 'C', icon: <FaCuttlefish style={{ transform: "rotate(180deg)" }} /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Solidity', icon: <SiSolidity /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Ethers.js', icon: <SiEthers /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithubAlt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ];
  return (
    <section id="skills" className={`section${visible ? " visible" : ""}`} ref={ref}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;