
// Contact Component
const Contact = () => {
  const handleResumeDownload = () => {
    // Convert Google Drive sharing link to direct download link
    const fileId = '1Vox2dfKIGjoxUW1B6HvOVrnRblUqEKiG';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactData = [
    {
      type: "LinkedIn",
      icon: "💼",
      title: "LinkedIn",
      subtitle: "Connect professionally",
      link: "https://www.linkedin.com/in/ayush-agrawal23/"
    },
    {
      type: "GitHub",
      icon: "🐙",
      title: "GitHub",
      subtitle: "View my code",
      link: "https://github.com/SeeThearc"
    },
    {
      type: "Resume",
      icon: "📄",
      title: "Resume",
      subtitle: "Download my resume",
      link: null,
      action: handleResumeDownload,
      isResume: true
    },
    {
      type: "Phone",
      icon: "📞",
      title: "Phone",
      subtitle: "+91 7300153188",
      link: "tel:+917300153188"
    },
    {
      type: "Email",
      icon: "📧",
      title: "Email",
      subtitle: "ayushagrawal2334@gmail.com",
      link: "mailto:ayushagrawal2334@gmail.com"
    },
    {
      type: "Location",
      icon: "📍",
      title: "Location",
      subtitle: "Chennai, India",
      link: null
    }
  ];

  const handleContactClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Connect With Me</h2>
      <div className="contact-grid">
        {contactData.map((item, index) => (
          <div 
            key={index} 
            className={`contact-item ${item.isResume ? 'resume-item' : ''}`}
            onClick={() => handleContactClick(item)}
          >
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-info">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;