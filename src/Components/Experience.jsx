import useSectionReveal from "./useSectionReveal";
const Experience = () => {
  const [ref, visible] = useSectionReveal();
  const experienceData = [
    {
      title: "Operations Lead",
      company: "Artificial Intelligence Club",
      description: "Direct operational strategy and execution of club initiatives, managing event logistics and cross-team coordination to ensure smooth functioning.",
      achievements: [
        "Successfully coordinated and executed multiple technical workshops and a 24-hour offline hackathon.",
        "Increased participation through strategic planning, effective communication.",
        "Streamlined event logistics, ensuring smooth operations and efficient resource management."
      ],
      date: "2024-Present"
    },
    {
      title: "Technical Team",
      company: "Game Development Club",
      description: "Support the club's technical initiatives by contributing to game development activities, event planning, and workshop execution.",
      achievements: [
        "Conducted offline gaming events to promote interactive engagement",
        "Coordinated online Unity workshops for beginner to intermediate learners",
        "Assisted in planning and executing key club activities and sessions"
      ],
      date: "2024 - Present"
    }
  ];
  return (
    <section id="experience" className={`section${visible ? " visible" : ""}`} ref={ref}>
      <h2>Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className={`timeline-row${index % 2 === 1 ? ' reverse' : ''}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p><strong>{item.company}</strong></p>
              <p>{item.description}</p>
              <ul>
                {item.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
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