import useSectionReveal from "./useSectionReveal";
const Hero = () => {
  const [ref, visible] = useSectionReveal();
  return (
    <section id="home" className={`hero section${visible ? " visible" : ""}`} ref={ref}>
      <h1>Ayush Agrawal</h1>
      <p>
        Hey,I’m an enthusiastic developer with a strong foundation in Data Structures & Algorithms, and a deep interest in Blockchain and Machine Learning. I enjoy building efficient solutions in C++, Python, and exploring how emerging tech can solve real-world problems.
Passionate about decentralization, intelligent systems, and continuous learning—I'm always excited to take on new challenges and grow as a developer.
      </p>
      <div className="hero-tags">
        <span className="hero-tag">Machine Learning</span>
        <span className="hero-tag">Blockchain</span>
        <span className="hero-tag">Web Dev</span>
        <span className="hero-tag">DSA</span>
        <span className="hero-tag">Open Source</span>
      </div>
    </section>
  );
};
export default Hero;