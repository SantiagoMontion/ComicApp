import "../styles/NavBar.css";
import Logo from "../styles/img/LogoNav.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";

import { BiSearch } from "react-icons/bi";
import Favorites from "./Favorites.jsx";
import * as Scroll from "react-scroll";
import useWindowDimensions from "./utils.jsx";

function NavBar({ handleQuery }) {
  const [state, setState] = useState(""); //funcion para manejar el estado del searchbar

  //funcion para obtener el valor del input
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSearchClick = (e) => {
    handleQuery(state);
  };

  const {  width } = useWindowDimensions();

  const scrollTo = () => {
    const totalHeight = document.documentElement.scrollHeight
    console.log(totalHeight);

    if (totalHeight> 3500){
      Scroll.animateScroll.scrollTo(5200);
    }

    if (width < 700) {
      Scroll.animateScroll.scrollTo(5050);
    } else if(totalHeight< 3500) {
      Scroll.animateScroll.scrollTo(2100);
    }
  };

  return (
    
    <Navbar className="fixed-top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo_nav" src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "140px" }}>
            <Nav.Link href="/">Comics</Nav.Link>

            <Nav.Link onClick={scrollTo}>Favorites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={state}
            />

            <BiSearch
              className="btn-search"
              onClick={handleSearchClick}
            ></BiSearch>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
