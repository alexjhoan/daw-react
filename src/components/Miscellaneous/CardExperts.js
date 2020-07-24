import React from 'react'
import Podcast from "../../assets/images/icons/i_microphone.svg"
import Article from "../../assets/images/icons/i_article.svg"
import Video from "../../assets/images/icons/i_video.svg"
import iconUser from "../../assets/images/icons/i_user.svg"
import iconNotImg from "../../assets/images/icons/i_notImage.svg"
import BookmarkIcon from '@material-ui/icons/Bookmark'

export function CardExpert(props:any) {
  let typePublication
    if (props.typePublication === "Podcast") {
      typePublication = Podcast
    } else if (props.typePublication === "Video") {
      typePublication = Video
    } else {
      typePublication = Article
    }
    let pubHastags
    if (props.hastags === "") {
      pubHastags = ""
    } else {
      pubHastags = props.hastags.map((hastags:any, j:any) => <span key={j}>#{hastags} </span>)
    }
    let pubImage
    let classNameBgImg
    if (props.galleries === "") {
      classNameBgImg = "bg_img_carousel bg_NotImg"
      pubImage = iconNotImg
    } else {
      classNameBgImg = "bg_img_carousel"
      pubImage = props.galleries
    }
    let avatarImg
    if (props.avatar === "") {
      avatarImg = iconUser
    } else {
      avatarImg = props.avatar
    }
  return(
    <React.Fragment>
      <div className="item-expert">
        <a className="img_carousel" href="#"> </a>
        <div className={classNameBgImg} style={{backgroundImage: "url(" + pubImage + ")"}}></div>
        <div className="iconMarkBook">
          <BookmarkIcon />
        </div>
        <div className="info-carousel">
          <div>
            <h4>{props.title}</h4>
            <p className="author">
              <a href="#">
                <img src={avatarImg} alt="..."/>
                {props.authors}
              </a>
            </p>
          </div>
           <img src={typePublication} alt="..." className="icon-publications" />
        </div>
        <p className="hastags">{pubHastags}
        </p>
      </div>
    </React.Fragment>
  )
}

export function CardListExperts(props:any){
  const DatalistExpertImp = props.DatalistExpert.map((a:any, i:any) => {
    return(
      <CardExpert
        typePublication={a.style}
        title={a.title}
        galleries={a.galleries[0] || ""}
        authors={a.authors}
        avatar={a.avatar || ""}
        hastags={a.hastags || ""}
      />
    )
  })
  return(
    DatalistExpertImp
  )
}
