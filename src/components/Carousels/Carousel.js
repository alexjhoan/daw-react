import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import "../css/Carousel.css"

export default function Carousels(props: any) {

  return (
    <Container fluid className="section-carousel">
      <Row className="m-0">
        <Col>
          <div className="titleCarousel">
            <p>
              <span className="textYellow">#</span>
              {props.titleCarousel}
            </p>
            <a href={props.urlSeeAll} className="btn-outline-dreamAway">
              <span className="textYellow">#</span>
              VerTodo
              <span className="buttonArrow">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </a>
          </div>
        </Col>
      </Row>
      <Row className="m-0">
        <Col className="px-5">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
