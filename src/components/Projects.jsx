import React from 'react';

const Projects = ({ id }) => {
  const projects = [
    {
      id: 1,
      title: 'Reliance Digital Clone',
      description: 'Built a full-stack e-commerce application inspired by Reliance Digital. Developed a responsive UI using React.js & TailwindCSS with user authentication (JWT) and role-based access.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'TailwindCSS'],
      image: '/project1.jpg',
      liveLink: '#',
      codeLink: 'https://github.com/AshutoshPatil14/reliance-digital-clone'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Implemented a complete e-commerce solution with product management, cart, and checkout features. Used MongoDB for database and integrated REST APIs with Express.js.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
      image: '/project2.jpg',
      liveLink: '#',
      codeLink: 'https://github.com/AshutoshPatil14/ecommerce-platform'
    },
    {
      id: 3,
      title: 'RESTful Web Service',
      description: 'Built a RESTful web service using Java Spring Boot that accepts and responds to HTTP requests as well as supports uploading JSON data.',
      technologies: ['Java', 'Spring Boot', 'REST API'],
      image: '/project3.jpg',
      liveLink: '#',
      codeLink: 'https://github.com/AshutoshPatil14/restful-web-service'
    },
    // Add more projects as needed
  ];

  return (
    <section id={id} className="section projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div> */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {/* <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
