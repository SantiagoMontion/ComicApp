import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ComicDetailInfo from "./ComicDetailInfo";
import spinner from "../styles/img/spinner2.gif";
import "../styles/ComicsDetail.css";
import {
  getComicCharacters,
  getComicLocations,
  getComicTeams,
} from "../actions/";

function ComicDetailBody({ comics }) {
  const characters = useSelector((state) => state.comicCharacters);
  const teams = useSelector((state) => state.comicTeams);
  const locations = useSelector((state) => state.comicLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    comics.character_credits?.map((c) => {
      dispatch(getComicCharacters(c.api_detail_url));
    });
    comics.team_credits?.map((c) => {
      dispatch(getComicTeams(c.api_detail_url));
    });
    comics.location_credits?.map((c) => {
      dispatch(getComicLocations(c.api_detail_url));
    });
  }, []);

  if (comics.hasOwnProperty("name")) {
    return (
      <Container className="margin-bottom">
        <Row>
          <Col>
            <img src={comics.image.small_url}></img>
          </Col>
          <Col>
            {comics.name ? (
              <h1>{comics.name}</h1>
            ) : (
              <h1>{comics.volume.name}</h1>
            )}
            <Row className="justify-content-center">
              <h5>Issue: #{comics.issue_number}</h5>
              <h6>Added: {comics.date_added}</h6>
            </Row>
            <hr />

            <h4 className="mt-4">Characters</h4><hr />
            {characters.length === comics.character_credits.length ? (
              
              <ComicDetailInfo data={characters}></ComicDetailInfo>
              
            ) : (
              <Container className="mt-0">
                <img src={spinner} alt="...loading" className="Spinner-mini" />
              </Container>
            )}

            <h4 className="mt-4">Teams</h4><hr />
            {teams.length === comics.team_credits.length ? (
              <ComicDetailInfo data={teams}></ComicDetailInfo>
            ) : <Container className="mt-0">
            <img src={spinner} alt="...loading" className="Spinner-mini" />
          </Container>}

            <h4 className="mt-4">Location</h4><hr />
            {locations.length === comics.location_credits.length ? (
              <ComicDetailInfo data={locations}></ComicDetailInfo>
            ) : <Container className="mt-0">
            <img src={spinner} alt="...loading" className="Spinner-mini" />
          </Container>}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <></>;
  }
}

export default ComicDetailBody;
