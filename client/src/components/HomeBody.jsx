import { Link } from "react-router-dom";
import "../styles/HomeBody.css";
import spinner from "../styles/img/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../actions/index";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import Carouself from "./Carousel";
import { GrFavorite } from "react-icons/gr";
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import useWindowDimensions from "./utils.jsx";

function HomeBody({ items, lastItemIndex, firstItemIndex, favorites }) {
  const dispatch = useDispatch();

  const addToFavorite = (e) => {
    dispatch(addFavorite(e));
  };
  const {  width } = useWindowDimensions();
  const [mode, setmode] = useState("grid");

  const changemode = (e) => {
    
    if(width<700){
      setmode("grid")
    }
    else{
    setmode(e);
    }
  };


  return (
    <>
      <Carouself></Carouself>

      <Container className="contact-content debug-border margin-top">
        <h2 className="margin-bottom">Last Comics</h2>
        {mode === "grid" ? (
          <>
          {width<700 ?(
            <>
            <BsGrid3X3Gap
              className="modes"
              size={30}
              color="#0091f1"
              onClick={(e) => changemode("grid")}/>
            </>
          ):<><BsGrid3X3Gap
          className="modes"
          size={30}
          color="#0091f1"
          onClick={(e) => changemode("grid")}
        /><AiOutlineUnorderedList
        className="modes"
        onClick={(e) => changemode("list")}
        size={30}
        color="black"
      ></AiOutlineUnorderedList>
        </>}
            

          </>
        ) : (
          <>
          <BsGrid3X3Gap
              className="modes"
              size={30}
              color="black"
              onClick={(e) => changemode("grid")}
            />
            <AiOutlineUnorderedList
              className="modes"
              onClick={(e) => changemode("list")}
              size={30}
              color="#0091f1"
            ></AiOutlineUnorderedList>
            
            
          </>
        )}

        {mode === "grid" ? (
          <Row className="justify-content-center">
            {items?.slice(firstItemIndex, lastItemIndex).map((comic) => {
              const link = "/comics/" + `${comic.id}`;
              {
                return (
                  <Col>
                    <Card className="mt-4 card-body">
                      <Link to={link} style={{ textDecoration: "none" }}>
                        <div className="img-container">
                          <Card.Img
                            variant="top"
                            src={comic.image.small_url}
                            alt="recipeimg"
                          />
                        </div>
                      </Link>
                      {favorites?.map((f) => {
                        if (f.id === comic.id) {
                          return <FcLike className="favorite-btn"></FcLike>;
                        } else {
                          return (
                            <GrFavorite
                              onClick={() => {
                                addToFavorite(comic);
                              }}
                              className="favorite-btn"
                            ></GrFavorite>
                          );
                        }
                      })}

                      {!favorites.length ? (
                        <GrFavorite
                          onClick={() => {
                            addToFavorite(comic);
                          }}
                          className="favorite-btn"
                        ></GrFavorite>
                      ) : null}

                      <Card.Body>
                        <Link to={link} style={{ textDecoration: "none" }}>
                          {comic.name ? (
                            <Card.Title style={{ color: "black" }}>
                              {comic.name} #{comic.issue_number}
                            </Card.Title>
                          ) : (
                            <Card.Title style={{ color: "black" }}>
                              {comic.name} {comic.volume.name} #
                              {comic.issue_number}
                            </Card.Title>
                          )}
                        </Link>
                        <Card.Text style={{ color: "black" }}>
                          {comic.date_added.slice(0, 10)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        ) : (
          <div>
            {items?.slice(firstItemIndex, lastItemIndex).map((comic) => {
              const link = "/comics/" + `${comic.id}`;
              {
                return (
                  <>
                    <Card className="margin-top">
                      <Container className="p-4">
                        <Row className="justify-content-center">
                          <Col>
                            <Link to={link} style={{ textDecoration: "none" }}>
                              <div className="img-container">
                                <Card.Img
                                  src={comic.image.small_url}
                                  alt="recipeimg"
                                />
                              </div>
                            </Link>

                            {favorites?.map((f) => {
                              if (f.id === comic.id) {
                                return (
                                  <FcLike className="favorite-btn"></FcLike>
                                );
                              } else {
                                return (
                                  <GrFavorite
                                    onClick={() => {
                                      addToFavorite(comic);
                                    }}
                                    className="favorite-btn"
                                  ></GrFavorite>
                                );
                              }
                            })}

                            {!favorites.length ? (
                              <GrFavorite
                                onClick={() => {
                                  addToFavorite(comic);
                                }}
                                className="favorite-btn"
                              ></GrFavorite>
                            ) : null}
                          </Col>
                          <Col className="justify-content-center">
                            <Link to={link} style={{ textDecoration: "none" }}>
                              {comic.name ? (
                                <Card.Title style={{ color: "black" }}>
                                  {comic.name} #{comic.issue_number}
                                </Card.Title>
                              ) : (
                                <Card.Title style={{ color: "black" }}>
                                  {comic.name} {comic.volume.name} #
                                  {comic.issue_number}
                                </Card.Title>
                              )}
                            </Link>
                            <div>{comic.date_added.slice(0, 10)}</div>
                          </Col>
                          <Col></Col>
                          
                        </Row>
                      </Container>
                    </Card>
                  </>
                );
              }
            })}
          </div>
        )}
      </Container>
    </>
  );
}

export default HomeBody;
