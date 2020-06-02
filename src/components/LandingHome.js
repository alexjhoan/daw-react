import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousels/Carousel'
import Magazines from './Carousels/Magazines'
import Collections from './Carousels/Collections'

import "./css/LandingHome.css"

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
      <Carousel titleCarousel="Magazines" urlSeeAll="#">
        <Magazines />
      </Carousel>
      <Carousel titleCarousel="Colecciones" urlSeeAll="#">
        <Collections />
      </Carousel>
    </React.Fragment>
  )
}
