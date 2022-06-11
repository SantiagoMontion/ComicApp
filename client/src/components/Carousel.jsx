
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import Portada1 from "../styles/img/portada1.png";
import Portada2 from "../styles/img/portada3.png";
import Portada3 from "../styles/img/portada2.png";


import { Link } from "react-router-dom";


function Carouself({ }) {

  
  return (
    <Carousel className="margin-top-extra">
        <Carousel.Item>
          <Link to="/comics/928351">
            <img className="d-block w-100" src={Portada1} alt="First slide" />
            <Carousel.Caption>
              <h5>Batman</h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/comics/928348">
            <img className="d-block w-100" src={Portada2} alt="Second slide" />
            <Carousel.Caption>
              <h5>Superman</h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/comics/928435">
            <img className="d-block w-100" src={Portada3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Spiderman</h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
  );
}

export default Carouself;
