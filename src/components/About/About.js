import "./About.css";
import Footer from "../Footer/footer";

export default function About() {
  return (
    <div className="About">
      <div className="header">About Shivang Kaul</div>
      <div className="text">
        <div className="intro-section">
          <h3>Hello, I'm Shivang!</h3>
          <p>
            I'm a passionate software developer and tech enthusiast with a strong foundation in full-stack development. 
            Currently pursuing my studies while actively contributing to open-source projects and building innovative solutions.
          </p>
        </div>

        <div className="section">
          <h3>My Journey</h3>
          <p>
            My journey in technology began with curiosity and has evolved into a deep passion for creating meaningful software solutions. 
            I believe in the power of technology to solve real-world problems and make a positive impact on people's lives.
          </p>
        </div>

        <div className="section">
          <h3>What I Do</h3>
          <ul className="skills-list">
            <li><strong>Full-Stack Development:</strong> Building end-to-end web applications using modern technologies</li>
            <li><strong>Open Source Contribution:</strong> Actively contributing to various open-source projects</li>
            <li><strong>Problem Solving:</strong> Tackling complex challenges with innovative solutions</li>
            <li><strong>Continuous Learning:</strong> Always exploring new technologies and best practices</li>
          </ul>
        </div>

        <div className="section">
          <h3>Technologies I Work With</h3>
          <div className="tech-grid">
            <div className="tech-category">
              <h4>Frontend</h4>
              <p>React, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <p>Node.js, Express, Python, Java, Spring Framework</p>
            </div>
            <div className="tech-category">
              <h4>Database</h4>
              <p>MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div className="tech-category">
              <h4>Tools & Others</h4>
              <p>Git, Docker, AWS, Linux, Maven, Hibernate</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Beyond Code</h3>
          <p>
            When I'm not coding, I enjoy exploring new technologies, reading tech blogs, and sharing knowledge with the developer community. 
            I believe in continuous learning and staying updated with the latest trends in technology.
          </p>
        </div>

        <div className="cta-section">
          <p>
            I'm always excited to work on new projects and collaborate with fellow developers. 
            Feel free to reach out if you'd like to connect or discuss potential opportunities!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}