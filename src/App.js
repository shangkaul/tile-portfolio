import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="hero-section">
          <h1 className="hero-title">Shivang Kaul</h1>
          <p className="hero-subtitle">Software Developer & Tech Enthusiast</p>
          <p className="hero-description">
            Passionate about creating innovative solutions and building scalable applications
          </p>
        </div>
        
        <Container>   
          <Row className="tiles-grid">
            <Col sm={{ span: 3, offset: 1 }} xs={6}>
              <Link className="linkText" to='/'>
                <div className="tile home-tile">
                  <div className="tileContent">Home</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/about'>
                <div className="tile about-tile">
                  <div className="tileContent">About</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/projects'>
                <div className="tile projects-tile">
                  <div className="tileContent">Projects</div>
                </div>
              </Link>
            </Col>
            <Col sm={{ span: 3, offset: 1 }} xs={6}>
              <Link className="linkText" to='/work'>
                <div className="tile work-tile">
                  <div className="tileContent">Experience</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/skills'>
                <div className="tile skills-tile">
                  <div className="tileContent">Skills</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/gallery'>
                <div className="tile gallery-tile">
                  <div className="tileContent">Gallery</div>
                </div>
              </Link>
            </Col>
            <Col sm={{ span: 3, offset: 1 }} xs={6}>
              <Link className="linkText" to='/blog'>
                <div className="tile blog-tile">
                  <div className="tileContent">Blog</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/achievements'>
                <div className="tile achievements-tile">
                  <div className="tileContent">Achievements</div>
                </div>
              </Link>
            </Col>
            <Col sm={3} xs={6}>
              <Link className="linkText" to='/contact'>
                <div className="tile contact-tile">
                  <div className="tileContent">Contact</div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}