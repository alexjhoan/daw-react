import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import LandingSections from './LandingSections'
import {Collections} from './Carousels/Collections'
import {Experts} from './Carousels/Experts'
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
        <Collections />
      </LandingSections>
      <LandingSections titleCarousel="PublicacionesDe" titleCarouselYellow="Expertos" urlSeeAll="#">
        <Experts />
      </LandingSections>
    </React.Fragment>
  )
}
