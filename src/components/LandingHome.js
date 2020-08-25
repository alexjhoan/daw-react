import React, {useState, useEffect} from "react"
import {Container, Row, Col} from "react-bootstrap"
import LandingSections from './LandingSections'
import {CarouselCollections} from './Carousels/CarouselCollections'
import {CarouselExperts} from './Carousels/CarouselExperts'
import { Controller, Scene } from 'react-scrollmagic';
import "./Styles/LandingHome.css"

export default function LandingHome() {
  const [pinState, SetPinState] = useState(false)

  // useEffect(() => {
  //   SetPinState(true)
  //   },[]);

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
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin={pinState}>
          <div className="panel">
            <LandingSections titleCarousel="Colecciones De" titleCarouselYellow="Experiencias" urlSeeAll="#">
              <CarouselCollections />
            </LandingSections>
          </div>
        </Scene>
        <Scene pin={pinState}>
          <div className="panel">
            <LandingSections titleCarousel="Publicaciones De" titleCarouselYellow="Expertos" urlSeeAll="#">
              <CarouselExperts />
            </LandingSections>
          </div>
        </Scene>
      </Controller>

    </React.Fragment>
  )
}
