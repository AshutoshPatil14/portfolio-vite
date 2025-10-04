import React from 'react';

const Skills = ({ id }) => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TailwindCSS', 'Bootstrap']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'SQL']
    },
    {
      category: 'Tools/Others',
      skills: ['Git & GitHub', 'Postman', 'PowerBI', 'Tableau', 'UIPath', 'Generative AI']
    }
  ];

  return (
    <section id={id} className="section skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;