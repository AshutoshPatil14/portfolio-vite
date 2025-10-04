import React from 'react';
import MyImage from '../Profile.jpg';

const About = ({ id }) => {
  return (
    <section id={id} className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={MyImage}  alt="Ashutosh Patil" />
        </div>
        <div className="about-text">
          <p>
            Full-Stack Developer specializing in the MERN stack, with strong expertise in building
            scalable web applications, REST APIs, and responsive UI. Skilled at translating business
            requirements into technical solutions.
          </p>
          <p>
            Hands-on experience with React, Node.js, MongoDB, and Express, with exposure to deployment and cloud integration.
            My projects demonstrate proficiency in user authentication, role-based access, and building
            responsive interfaces with React.js and TailwindCSS.
          </p>
          <p>
            Passionate about creating efficient, scalable web applications and continuously expanding my knowledge
            in modern web development technologies and best practices.
          </p>
          <div className="resume-link">
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1kiZgpVXuJD97JthXrKzoU6oyDZ91XAUu&export=download" target="_blank" rel="noopener noreferrer" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;