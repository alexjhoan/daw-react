import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import ItemsCarousel from './ItemsCarousel'
import "./styles.css"

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div className={className} style={{...style, right: "25"+"px"}} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  )
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div className={className} style={{...style,left: "25"+"px"}} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  )
}

export class Carousel extends React.Component {
  clickFalse = (e) => {
    e.preventDefault()
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }
    return (
      <Container fluid className="section-carousel p-0">
        <Row className="m-0">
          <Col>
            <div className="titleCarousel">
              <p>
                <span className="textYellow">#</span>Magazine
              </p>
              <a href="#" onClick={this.clickFalse} className="btn-outline-dreamAway">
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
              <ItemsCarousel />
              <ItemsCarousel />
              <ItemsCarousel />
            </Slider>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Carousel
