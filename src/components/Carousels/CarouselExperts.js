import React from 'react'
import {CardExpert} from '../Miscellaneous/CardExperts'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import {DataExperts} from '../../utils/Experts.json'
import '../Styles/Carousels/CarouselExperts.css'

export function CarouselExperts() {
  const dataExpertsImp = DataExperts.map((a, i) => {
    return(
      <Slide index={i} key={i}>
        <CardExpert
          // avatar={a.avatar || ""}
          typePublication={a.style}
          galleries={a.galleries[0]}
          authors={a.authors}
          title={a.title}
          hastags={a.hastags || ""}
        />
      </Slide>
    )
  })

  let SlideResponsive
  if (window.innerWidth < 574) {
    SlideResponsive = 1
  }
  else if (window.innerWidth < 767) {
    SlideResponsive = 2
  }
   else if (window.innerWidth > 768){
    SlideResponsive = 3
   }

  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      visibleSlides={SlideResponsive}
      step={1}
      naturalSlideWidth={4}
      naturalSlideHeight={3}
      totalSlides={DataExperts.length}
      >
      <Slider>
        {dataExpertsImp}
      </Slider>
      <ButtonBack><ChevronLeftIcon /></ButtonBack>
      <ButtonNext><ChevronRightIcon /></ButtonNext>
    </CarouselProvider>
  )
}
