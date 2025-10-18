import useSectionReveal from "./useSectionReveal";
const Hero = () => {
  const [ref, visible] = useSectionReveal();
  return (
    <section id="home" className={`hero section${visible ? " visible" : ""}`} ref={ref}>
      <h1>Ayush Agrawal</h1>
      <p>
        Hey there! I’m an enthusiastic developer with a strong foundation in Data Structures & Algorithms and a growing expertise in full-stack development. I love building efficient, scalable solutions using C++, Python, and React, and I’m deeply interested in Blockchain, Machine Learning, and distributed systems.
Passionate about intelligent, decentralized technologies, I’m always eager to explore new challenges and create impactful solutions.
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