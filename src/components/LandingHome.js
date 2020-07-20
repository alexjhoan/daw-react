import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import LandingSections from './LandingSections'
import {CarouselCollections} from './Carousels/CarouselCollections'
import {CarouselExperts} from './Carousels/CarouselExperts'
import "./Styles/LandingHome.css"

export default function LandingHome() {
  return (
    <React.Fragment>
      <Container fluid className="header-home">
        <Row>
          <Col className="p-0">
            <div className="text-header">
              <h1>DREAMAWAY</h1>
              <h2>#ComunidadViajera</h2>
              <button className="DawBtn">
                Manifiesto
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <LandingSections titleCarousel="ColeccionesDe" titleCarouselYellow="Experiencias" urlSeeAll="#">
        <CarouselCollections />
      </LandingSections>
      <LandingSections titleCarousel="PublicacionesDe" titleCarouselYellow="Expertos" urlSeeAll="#">
        <CarouselExperts />
      </LandingSections>
    </React.Fragment>
  )
}
