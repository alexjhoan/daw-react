import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import SharedWhite from "../../assets/images/icons/i_shared_white.svg"
import ItemCarouselBg from '../../assets/images/collection/collection2.jpg'
import {DataMagazine} from "./Magazines.json"

export default function Collections(props:any) {

  const dataCollections = Object.values(DataMagazine)
  const dataCollectionsImp = dataCollections.map((a, i) => {
    return (
      <Slide index={i} key={i}>
        <div className="item-slider">
          <a className="img_carousel" href="#"></a>
          <div className="bg_img_carousel" style={{backgroundImage: "url(" + ItemCarouselBg + ")"}}></div>
          <div className="infoCollection">
            <p>Collections</p>
            <h4>
              <span className="textYellow">#</span>{a.titleCarousel}
            </h4>
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
      </Slide>
    )
  })

  return (
    <CarouselProvider
      visibleSlides={2}
      step={1}
      naturalSlideWidth={600}
      naturalSlideHeight={335}
      totalSlides={DataMagazine.length}
      >
      <Slider>
        {dataCollectionsImp}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}
