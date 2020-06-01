import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import SharedWhite from "../../assets/images/icons/i_shared_white.svg"
import ItemCarouselBg from '../../assets/images/collection/collection2.jpg'

export default function ItemsCarousel(props:any) {
  return (
    <div className="item-slider">
      <a className="img_carousel" href="#"></a>
      <div className="bg_img_carousel" style={{backgroundImage: "url(" + props.bgItem + ")"}}></div>
      <div className="infoCollection">
        <p>{props.typePublication}</p>
        <h4>
          <span className="textYellow">#</span>{props.titleItem}
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
  )
}
