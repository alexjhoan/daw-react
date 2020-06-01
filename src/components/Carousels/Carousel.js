import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import ItemsCarousel from "./ItemsCarousel"
import "../css/Carousel.css"

import {Magazines} from "./Magazines.json"
import ItemCarouselBg from "../../assets/images/collection/collection2.jpg"

function NextArrow(props: any) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "25" + "px"
      }}
      onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  )
}

function PrevArrow(props: any) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "25" + "px"
      }}
      onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  )
}

export default function Carousel(props: any) {
  const dataMagazines = Object.values(Magazines)
  const dataMagazinesImp = dataMagazines.map((a) => {
    return (
      <ItemsCarousel
        bgItem={a.urlImage}
        titleItem={a.titleCarousel}
        typePublication="Magazines"
      />
    )
  })

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
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
          <Slider {...settings}>
            {dataMagazinesImp}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}
