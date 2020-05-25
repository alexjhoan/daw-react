import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight, faBookmark} from "@fortawesome/free-solid-svg-icons"
import ItemCarouselBg from "../../styles/images/collection/collection2.jpg"
import SharedWhite from "../../styles/images/icons/i_shared_white.svg"
import "./styles.css"

export class Carousel extends React.Component {
  clickFalse = (e) => {
    e.preventDefault()
  }


  render() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
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
        <Row>
          <Col className="px-5 mb-5">

              <div className="item-slider">
                <a className="img_carousel" href="#" onClick={this.clickFalse}></a>
                <div className="bg_img_carousel" style={{backgroundImage: 'url(' + ItemCarouselBg + ')'}}></div>
                <div className="infoCollection">
                  <p>Colección</p>
                  <h4><span className="textYellow">#</span>Islandia</h4>
                  <p>85 elementos</p>
                </div>
                <span className="icons-like">
                  <a href="#" className="shared">
                    <img src={SharedWhite} alt="share" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faBookmark} />
                  </a>
                </span>
              </div>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Carousel
