import React from 'react';

const Experience = ({ id }) => {
  const certifications = [
    {
      id: 1,
      title: 'Goldman Sachs - Software Engineering Virtual Experience',
      organization: 'Forage',
      date: '2024',
      details: [
        'Worked on IT security and password protection improvements',
        'Implemented secure authentication practices'
      ]
    },
    {
      id: 2,
      title: 'Hewlett Packard Enterprise - Software Engineering Job Simulation',
      organization: 'Forage',
      date: '2025',
      details: [
        'Built a RESTful web service & Java Spring Boot application',
        'Developed and ran unit tests to assess application performance'
      ]
    },
    {
      id: 3,
      title: 'Accenture North America - Data Analytics & Visualization Simulation',
      organization: 'Forage',
      date: '2025',
      details: [
        'Worked on cleaning, modeling, and dashboarding datasets',
        'Created data visualizations for business insights'
      ]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Technical Skills',
      details: [
        'MERN Stack Development', 
        'RESTful API Design',
        'Responsive UI Development',
        'Database Management'
      ]
    },
    {
      id: 2,
      title: 'Additional Certifications',
      details: [
        'MongoDB University Certification',
        'React.js Advanced Patterns',
        'Node.js API Development',
        'Modern JavaScript (ES6+)'
      ]
    }
  ];

  return (
    <section id={id} className="section experience">
      <h2>Professional Experience</h2>
      
      <div className="certifications">
        <h3>Certifications & Virtual Experience</h3>
        <div className="certification-list">
          {certifications.map((cert) => (
            <div className="certification-item" key={cert.id}>
              <h4>{cert.title}</h4>
              <p className="cert-org">{cert.organization} | {cert.date}</p>
              <ul>
                {cert.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="achievements">
        <h3>Achievements</h3>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <div className="achievement-item" key={achievement.id}>
              <h4>{achievement.title}</h4>
              <ul>
                {achievement.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;