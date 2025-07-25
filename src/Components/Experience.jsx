
// Experience Component
const Experience = () => {
  const experienceData = [
    {
      title: "Operations Team",
      company: "Artificial Intelligence Club",
      description: "Contribute to strategic planning and smooth execution of club initiatives, ensuring effective coordination across events and logistics.",
      achievements: [
        "Successfully coordinated and executed multiple AI workshops",
        "Increased workshop participation through strategic planning",
        "Streamlined event logistics, leading to smoother club operations"
      ],
      date: "March 2024-Present"
    },
    {
      title: "Technical Team",
      company: " Game Development Club",
      description: "Support the club's technical initiatives by contributing to game development activities, event planning, and workshop execution.",
      achievements: [
        "Conducted offline gaming events to promote interactive engagement",
        "Coordinated online Unity workshops for beginner to intermediate learners",
        "Assisted in planning and executing key club activities and sessions"
      ],
      date: "August 2024 - Present"
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p><strong>{item.company}</strong></p>
              <p>{item.description}</p>
              <ul>
                {item.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="timeline-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;