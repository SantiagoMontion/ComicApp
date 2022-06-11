import { Link } from "react-router-dom";
import "../styles/ComicsDetail.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import spinner from "../styles/img/spinner2.gif";
import axios from "axios";

function ComicDetailInfo({ data }) {
  return (
    <>
      {data?.map((c) => {
        return (
          <Container>
            <div className="recipe_grid">
            
                <img className="detail_img" src={c.image.icon_url}></img>
              
            
                <h6>{c.name}</h6>
             
            </div>
          </Container>
        );
      })}
    </>
  );
}

export default ComicDetailInfo;
