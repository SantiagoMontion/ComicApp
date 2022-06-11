import "../styles/ComicsDetail.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../styles/img/LogoNav.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RiDislikeLine } from "react-icons/ri";
import { quitFavorite } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function Favorites({ favorites }) {
  const dispatch = useDispatch();

  const quitFavoritef = (e) => {
    dispatch(quitFavorite(e));
  };

  return (
    <Container className="favorites-container">
    
      <Row>
        {favorites?.map((f) => {
          const link = "/comics/" + `${f.id}`;
          if (f.name) {
            return (
              <Col>
                <Card
                  style={{ width: "17rem", height: "80%" }}
                  className="mt-4 card-body-fav"
                >
                  <Link to={link} style={{ textDecoration: "none" }}>
                    <div className="img-container-fav">
                      <Card.Img src={f.image.small_url} alt="img" />
                    </div>
                  </Link>

                  <RiDislikeLine
                    className="favorite-btn-fa"
                    onClick={() => {
                      quitFavoritef(f.id);
                    }}
                  ></RiDislikeLine>

                  <Card.Body>
                    <Link to={link} style={{ textDecoration: "none" }}>
                      <p class="text bottom-right">{f.name}</p>
                      {/* <Card.Title style={{ color: "black" }}></Card.Title> */}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          } else {
            return (
              <Col>
                <Card
                  style={{ width: "17rem", height: "80%" }}
                  className="mt-4 card-body-fav"
                >
                  <Link to={link} style={{ textDecoration: "none" }}>
                    <div className="img-container-fav">
                      <Card.Img src={f.image.small_url} alt="img" />
                    </div>
                  </Link>

                  <RiDislikeLine
                    className="favorite-btn-fa"
                    onClick={() => {
                      quitFavoritef(f.id);
                    }}
                  ></RiDislikeLine>

                  <Card.Body>
                    <Link to={link} style={{ textDecoration: "none" }}>
                      <p class="text bottom-right">{f.volume.name}</p>
                      {/* <Card.Title style={{ color: "black" }}></Card.Title> */}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}

export default Favorites;
