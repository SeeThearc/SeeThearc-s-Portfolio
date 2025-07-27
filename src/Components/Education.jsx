import useSectionReveal from "./useSectionReveal";
const Education = () => {
  const [ref, visible] = useSectionReveal();
  const educationData = [
    {
      title: "Bachelor of Computer Science",
      institution: "Vellore Institute of technology, Chennai",
      description: "Specialized in Data Structures, Algorithms, Database Management, Software Engineering, Web Development, Blockchain.",
      gpa: "GPA: 9.28/10",
      date: "2023-2027"
    },
    {
      title: "Higher Secondary Education",
      institution: "Sacred Heart public Sr. Sec. School",
      description: "Science Stream with Mathematics",
      gpa: "Percentage: 84%",
      date: "2022-2023"
    }
  ];
  return (
    <section id="education" className={`section${visible ? " visible" : ""}`} ref={ref}>
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-row${index % 2 === 1 ? ' reverse' : ''}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p><strong>{item.institution}</strong></p>
              <p>{item.description}</p>
              <p>{item.gpa}</p>
            </div>
            <div className="timeline-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;