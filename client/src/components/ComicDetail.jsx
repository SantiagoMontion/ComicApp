import "../styles/ComicsDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getComicById } from "../actions/index";
import ComicDetailBody from "./ComicDetailBody.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../styles/img/LogoNav.png";
import spinner from "../styles/img/spinner.gif";
import {
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";

function ComicDetail(props) {
  const dispatch = useDispatch();

  const comicFiltered = useSelector((state) => state.comicDetail);
  useEffect(() => {
    dispatch(getComicById(props.match.params.id));
 
  }, []);

  if (comicFiltered.hasOwnProperty("name")) {
    return (
      <>
        <Navbar className="fixed-top" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img className="logo_nav" src={Logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "140px" }}
              >
                <Nav.Link href="/">Comics</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="margin-top-extra">
          <ComicDetailBody comics={comicFiltered}></ComicDetailBody>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <div className="homeSpinner">
          <img src={spinner} alt="...loading" className="Spinner" />
        </div>
      </>
    );
  }
}

export default ComicDetail;
