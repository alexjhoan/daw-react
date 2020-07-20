import React from 'react'
import Podcast from "../../assets/images/icons/i_microphone.svg"
import Article from "../../assets/images/icons/i_article.svg"
import Video from "../../assets/images/icons/i_video.svg"
import iconUser from "../../assets/images/icons/i_user.svg"
import BookmarkIcon from '@material-ui/icons/Bookmark'

export function CardExpert(props:any) {
  let typePublication = ""
    if (props.typePublication === "Podcast") {
      typePublication = Podcast
    } else if (props.typePublication === "Video") {
      typePublication = Video
    } else {
      typePublication = Article
    }
  return(
    <React.Fragment>
      <div className="item-expert">
        <a className="img_carousel" href="#"> </a>
        <div className="bg_img_carousel" style={{backgroundImage: "url(" + props.urlImageExpert + ")"}}></div>
        <div className="iconMarkBook">
          <BookmarkIcon />
        </div>
        <div className="info-carousel">
          <div>
            <h4>{props.titleExpert}</h4>
            <p className="author">
              <a href="#">
                <img src={iconUser} alt="userImage"/>
                @{props.userExpert}
              </a>
            </p>
          </div>
           <img src={typePublication} alt="..." className="icon-publications" />
        </div>
        <p className="hastags">
        {
          props.hastags.map((hastags:any, j:any) => <span key={j}>#{hastags} </span>)
        }
      </p>
      </div>
    </React.Fragment>
  )
}

export function CardListExperts(props:any){
  const DatalistExpertImp = props.DatalistExpert.map((a:any, i:any) => {
    return(
      <CardExpert
        typePublication={a.typePublication}
        urlImageExpert={a.urlImageExpert}
        titleExpert={a.titleExpert}
        userExpert={a.userExpert}
        hastags={a.hastags}
      />
    )
  })
  return(
    DatalistExpertImp
  )
}
