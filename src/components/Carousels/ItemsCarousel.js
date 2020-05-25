import React from 'react'
import { itemsCarousel } from './CarouselData.json'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import SharedWhite from "../../styles/images/icons/i_shared_white.svg"
import ItemCarouselBg from '../../styles/images/collection/collection2.jpg'

export class ItemsCarousel extends React.Component {

  clickFalse = (e) => {
    e.preventDefault()
  }

  render(){
    return(
      <div className="item-slider">
        <a className="img_carousel" href="#" onClick={this.clickFalse}></a>
        <div className="bg_img_carousel" style={{backgroundImage: "url(" + ItemCarouselBg + ")"}}></div>
        <div className="infoCollection">
          <p>Colección</p>
          <h4>
            <span className="textYellow">#</span>Islandia
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
}

export default ItemsCarousel
