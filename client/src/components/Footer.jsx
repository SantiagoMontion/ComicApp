import "../styles/Footer.css";
import ProfileFoto from "../styles/img/ProfileFoto.jpg";
import {  Container, Row, Col } from "react-bootstrap";

import {AiFillGithub ,AiFillLinkedin , AiFillMail} from "react-icons/ai"

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row >
        <Col className="footer-inside">
          <h5>developer</h5>
          <h4 style={{color:"white"}}>Santiago Montion</h4>
          <a
            className="info"
            href="https://instagram.com/santimontion"
            target="_blank"
          >
            <img className="logos" src={ProfileFoto}></img>
            
          </a>
          
        </Col>

        <Col className="footer-inside">
          <label className="cname">Contact:</label>
          <Row>
            <Col>
          <a href="https://github.com/SantiagoMontion" target="_blank">
            <AiFillGithub size={40}  color={"white"}  className="logos mt-3"></AiFillGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/santi-montion-a84711217/"
            target="_blank"
          >
            <AiFillLinkedin  size={40} color={"white"} className="logos mt-3"></AiFillLinkedin>
          </a>
          <a href="mailto: santiagomontion@gmail.com">
            <AiFillMail size={40} color={"white"} className="logos mt-3"></AiFillMail>
          </a>
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
