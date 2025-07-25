// Hero Component
import AvatarCanvas from "./AvatarCanvas";
const Hero = () => {
const modelUrl = 'https://models.readyplayer.me/6883cbf84c405a37ad3d0142.glb';
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Ayush Agrawal</h1>
        <p>
          Hey,I’m an enthusiastic developer with a strong foundation in Data Structures & Algorithms, and a deep interest in Blockchain and Machine Learning. I enjoy building efficient solutions in C++, Python, and exploring how emerging tech can solve real-world problems.
Passionate about decentralization, intelligent systems, and continuous learning—I'm always excited to take on new challenges and grow as a developer.
        </p>
      </div>
      <div className="hero-photo">
        <div className="photo-placeholder">
          <AvatarCanvas modelUrl={modelUrl} />
        </div>
      </div>
    </section>
  );
};

export default Hero;