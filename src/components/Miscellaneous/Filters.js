import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import IconFilter from "../../assets/images/icons/i_filter.svg"
import '../Styles/Filters.css'

export function TextFilter(props:any){
  const textFilterImp = props.listFilter.map((a:any, i:any) => {
    return (
      <div className="btnCheckbox" key={i}>
        <input type="checkbox" id="myLists"/>
        <label htmlFor="myLists">{a}</label>
      </div>
    )
  })
  return(
    <div className="row">
      <div className={`${props.className}Filter col-12 d-flex my-4`}>
        {textFilterImp}
      </div>
    </div>
  )
}

export function TagsFilter(props:any) {
  const dataTagsImp = props.listTagsFilter.map((a:any, i:any) => {
    return (
      <Slide index={i} key={i}>
        <div className="tabFilter-carousel">
          <div className="btnCheckbox">
            <input type="checkbox" id="myLists" />
            <label htmlFor="myLists">#{a}</label>
          </div>
        </div>
      </Slide>
    )
  })

  return (
    <div className="row">
      <div className="col-12 tagsFilter">
        <button className="btnFilter">
          <img src={IconFilter} alt="..." />
        </button>
        <CarouselProvider
          touchEnabled={true}
          dragEnabled={true}
          isIntrinsicHeight={true}
          visibleSlides={2}
          step={1}
          naturalSlideWidth={200}
          naturalSlideHeight={10}
          totalSlides={props.listTagsFilter.length}
          >
          <Slider>
            {dataTagsImp}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  )
}
