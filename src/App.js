
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Container,Row,Col } from 'react-bootstrap';
import{Link} from "react-router-dom";
import About from "./components/About/About";

export default function App(props, state) {
  return (
    <div className="App">
     <div className="content">
     <Container>
     <Row>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile1"><div className="tileContent">Home</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile2"><div className="tileContent">About</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile3"><div className="tileContent">Projects</div></div></Link></Col>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile4"><div className="tileContent">Work</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile5"><div className="tileContent">Services</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile6"><div className="tileContent">Gallery</div></div></Link></Col>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile7"><div className="tileContent">Clients</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile8"><div className="tileContent">Testimonials</div></div></Link></Col>
      <Col sm={3} xs={6}><Link style={{textDecoration:'none'}} to='/about'><div className="tile9"><div className="tileContent">Contact</div></div></Link></Col>
    </Row>
</Container>
     </div>
    </div>
  );
}


