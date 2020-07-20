import React from 'react'
import {CardCollection} from '../Miscellaneous/CardCollections'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import '../Styles/Carousels/CarouselCollections.css'
import {DataMagazine} from '../../utils/Magazines.json'

export function CarouselCollections(props:any) {
  const dataCollectionsImp = DataMagazine.map((a, i) => {
    return (
      <Slide index={i} key={i}>
        <CardCollection
          dataListCollection={DataMagazine}
          urlImage={a.urlImage}
          titleCarousel={a.titleCarousel}
        />
      </Slide>
    )
  })

  let SlideResponsive
  if (window.innerWidth <= 574) {
    SlideResponsive = 1
  }
  else if (window.innerWidth >= 575) {
    SlideResponsive = 2
  }

  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      visibleSlides={SlideResponsive}
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
