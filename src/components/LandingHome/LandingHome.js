import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import CarrouselMultiItems from "../Carousels/Carousel"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

export default function LandingHome() {
  return (
    <React.Fragment>
      <Container fluid className="header-home">
        <Row>
          <Col className="p-0">
            <div className="text-header">
              <h1>DREAMAWAY</h1>
              <h2>#ComunidadViajera</h2>
              <button className="btn bg-yellow btn-header-home">
                Manifiesto
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="section-carousel">
        <Row>
          <Col>
            <CarrouselMultiItems />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
