import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import SharedWhite from "../../assets/images/icons/i_shared_white.svg"

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
        <p>{props.dataListCollection.length} elementos</p>
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
