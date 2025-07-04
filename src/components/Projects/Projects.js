import React from 'react';
import './Projects.css';
import Footer from '../Footer/footer';

const Projects = () => {
  const projects = [
    {
      title: "Tile Portfolio",
      description: "A responsive React portfolio website with a modern tile-based design. Features smooth animations, mobile-first approach, and clean UI/UX.",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      github: "https://github.com/shivangkaul/tile-portfolio",
      demo: "https://tile-portfolio.netlify.app/",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "CRM Web Application",
      description: "A comprehensive Customer Relationship Management system built with Spring MVC, featuring CRUD operations, user authentication, and data visualization.",
      technologies: ["Java", "Spring MVC", "Hibernate", "MySQL", "JSP"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, comment system, and SEO optimization.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="Projects">
      <div className="header">My Projects</div>
      <div className="projects-container">
        <div className="projects-intro">
          <p>
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            problem-solving, and creating user-friendly applications. Each project represents a unique challenge 
            and learning experience.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;