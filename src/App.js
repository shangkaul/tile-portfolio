
import Nav from "./components/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Container,Row,Col } from 'react-bootstrap';

export default function App(props, state) {
  return (
    <div className="App">
     <Nav name="svg"/>
     <div className="content">
     <Container>
     <Row>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><div className="tile"><div className="tileContent">1 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">2 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">3 of 3</div></div></Col>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><div className="tile"><div className="tileContent">1 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">2 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">3 of 3</div></div></Col>
      <Col sm={{ span: 3, offset: 1 }} xs={6}><div className="tile"><div className="tileContent">1 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">2 of 3</div></div></Col>
      <Col sm={3} xs={6}><div className="tile"><div className="tileContent">3 of 3</div></div></Col>
    </Row>
</Container>
     </div>
    </div>
  );
}


