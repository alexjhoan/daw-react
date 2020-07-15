import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import SharedWhite from "../../assets/images/icons/i_shared_white.svg"
import {DataMagazine} from '../../utils/Magazines.json'

export function CardCollection(props:any) {
  return (
    <div className="item-slider">
      <a className="img_carousel" href="#"> </a>
      <div className="bg_img_carousel" style={{backgroundImage: "url(" + props.urlImage + ")"}}></div>
      <div className="infoCollection">
        <p>Colección</p>
        <h4>
          <span className="textYellow">#</span>{props.titleCarousel}
        </h4>
        <p>{DataMagazine.length} elementos</p>
      </div>
      <a href="#" className="optionImg shared">
        <img src={SharedWhite} alt="share" />
      </a>
      <a href="#" className="optionImg bookMark">
        <BookmarkIcon />
      </a>
    </div>
  )
}

export function Collections(props:any) {
  const dataCollectionsImp = DataMagazine.map((a, i) => {
    return (
      <Slide index={i} key={i}>
        <CardCollection
          urlImage={a.urlImage}
          titleCarousel={a.titleCarousel}
        />
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
      <ButtonBack><ChevronLeftIcon /></ButtonBack>
      <ButtonNext><ChevronRightIcon /></ButtonNext>
    </CarouselProvider>
  )
}
