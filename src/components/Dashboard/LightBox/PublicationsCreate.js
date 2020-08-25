import React from 'react'
import {Button} from 'react-bootstrap'
import ImgArticle from '../../../assets/images/form_article.svg'
import ImgVideo from '../../../assets/images/form_video.svg'
import ImgPodcast from '../../../assets/images/form_podcast.svg'
import '../../Styles/Dashboard/LightBox/PublicationsCreate.css'

export default function PublicationsCreate(props: any) {
  return (
    <div className="col-12 firtStep_form">
      <h1>¡Ya estamos ansiosos por ver lo que nos tienes que contar!</h1>
      <p>¿Qué tipo de publicación deseas realizar?</p>
      <div className="formBox">
        <div className="imgBoxForm">
          <Button id="createArticle" className="btnPublicationCreate" onClick={props.btnArticle}>
            <img src={ImgArticle} alt="microphone" />
          </Button>
          <p>Articulo</p>
        </div>
        <div className="imgBoxForm">
          <Button id="createVideo" className="btnPublicationCreate" onClick={props.btnVideo}>
            <img src={ImgVideo} alt="microphone" />
          </Button>
          <p>Video</p>
        </div>
        <div className="imgBoxForm">
          <Button id="createPodcast" className="btnPublicationCreate" onClick={props.btnPodcast}>
            <img src={ImgPodcast} alt="microphone" />
          </Button>
          <p>Podcast</p>
        </div>
      </div>
    </div>
  )
}
