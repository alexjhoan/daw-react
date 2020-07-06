import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Podcast from "../../assets/images/icons/i_microphone.svg"
import Article from "../../assets/images/icons/i_article.svg"
import Video from "../../assets/images/icons/i_video.svg"
import iconUser from "../../assets/images/icons/i_user.svg"
import {DataExperts} from '../../utils/Experts.json'


export default function Experts() {
  const dataExpertsImp = DataExperts.map((a, i) => {
    let typePublication = ""
    if (a.typePublication === "Podcast") {
      typePublication = Podcast
    } else if (a.typePublication === "Video") {
      typePublication = Video
    } else {
      typePublication = Article
    }
    return(
      <Slide index={i} key={i}>
        <div className="item-expert">
          <a className="img_carousel" href="#"> </a>
          <div className="bg_img_carousel" style={{backgroundImage: "url(" + a.urlImageExpert + ")"}}></div>
          <div className="iconMarkBook">
            <BookmarkIcon />
          </div>
          <div className="info-carousel">
            <div>
              <h4>{a.titleExpert}</h4>
              <p className="author">
                <a href="#">
                  <img src={iconUser} alt="userImage"/>
                  @{a.userExpert}
                </a>
              </p>
            </div>
             <img src={typePublication} alt="..." className="icon-publications" />
          </div>
        </div>
        <p className="hastags">
          {
            a.hastags.map((hastags, j) => <span key={j}>#{hastags} </span>)
          }
        </p>
      </Slide>
    )
  })

  return (
     <CarouselProvider
      visibleSlides={3}
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
