import useSectionReveal from "./useSectionReveal";
import React from "react"; // Required for JSX

// Font Awesome Icons
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
const contactData = [
  {
    type: "LinkedIn",
    icon: <FaLinkedin />,
    title: "LinkedIn",
    subtitle: "Connect professionally",
    link: "https://www.linkedin.com/in/ayush-agrawal23/"
  },
  {
    type: "GitHub",
    icon: <FaGithub />,
    title: "GitHub",
    subtitle: "View my code",
    link: "https://github.com/SeeThearc"
  },
  {
    type: "Phone",
    icon: <FaPhoneAlt />,
    title: "Phone",
    subtitle: "+91 7300153188",
    link: "tel:+917300153188"
  },
  {
    type: "Email",
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "ayushagrawal2334@gmail.com",
    link: "mailto:ayushagrawal2334@gmail.com"
  },
  {
    type: "Location",
    icon: <FaMapMarkerAlt />,
    title: "Location",
    subtitle: "Chennai, India",
    link: null
  }
];

// Change this to your Google Drive resume link!
const resumeDriveLink = "https://drive.google.com/uc?export=download&id=1Vox2dfKIGjoxUW1B6HvOVrnRblUqEKiG";

const Contact = () => {
  const [ref, visible] = useSectionReveal();
  const handleContactClick = (link) => {
    if (link) window.open(link, '_blank');
  };
  return (
    <section id="contact" className={`section${visible ? " visible" : ""}`} ref={ref}>
      <h2>Connect With Me</h2>
      <div className="contact-grid">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="contact-item"
            onClick={() => handleContactClick(item.link)}
            style={item.link ? { cursor: 'pointer' } : { cursor: 'default' }}
          >
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-info">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
        <div
          className={`resume-card${visible ? " visible" : ""}`}
          onClick={() => handleContactClick(resumeDriveLink)}
          style={{ cursor: 'pointer' }}
          title="Download Resume"
        >
          <span className="resume-title">Resume</span>
          <span className="resume-icon"><FaDownload /></span>
          {/* <span className="resume-download">
            Download Now
          </span> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;