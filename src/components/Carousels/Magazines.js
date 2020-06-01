import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import SharedWhite from "../../assets/images/icons/i_shared_white.svg"
import ItemCarouselBg from '../../assets/images/collection/collection2.jpg'
import {Magazines} from "./Magazines.json"

export default function ItemsCarousel(props:any) {

  const dataMagazines = Object.values(Magazines)
  const dataMagazinesImp = dataMagazines.map((a, i) => {
    return (
      <div className="item-slider" key={i}>
        <a className="img_carousel" href="#"></a>
        <div className="bg_img_carousel" style={{backgroundImage: "url(" + a.urlImage + ")"}}></div>
        <div className="infoCollection">
          <p>Magazines</p>
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
    )
  })

  return (dataMagazinesImp)
}

