import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import  './Styles/LandingSections.css'

export default function LandingSections(props: any) {
  return (
    <Container fluid className="section-carousel">
      <Row className="m-0">
        <Col>
          <div className="titleCarousel">
            <p>
              <span className="textYellow">#</span>
              {props.titleCarousel}<span className="textYellow">{props.titleCarouselYellow}</span>
            </p>
            <a href={props.urlSeeAll} className="DawBtn">
              #VerTodo
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
