import React from "react"
import {Button, Modal} from "react-bootstrap"
import {LightBox} from "../../components/Miscellaneous/LightBox"
import PublicationsCreate from "../../components/Dashboard/LightBox/PublicationsCreate"
import CreateArticle from "../../components/Dashboard/LightBox/CreateArticle"
import CreateVideo from "../../components/Dashboard/LightBox/CreateVideo"
import CreatePodcast from "../../components/Dashboard/LightBox/CreatePodcast"
import PublicacionsComponent from "../../components/Dashboard/PublicationsComponent"
import DashboardComponent from "../../components/Dashboard/DashboardComponent"
import AddIcon from "@material-ui/icons/Add"

export default function DashboardPublicationsViews(props: any) {
  const [modalShow, setModalShow] = React.useState(false)
  const [componentArticle, setComponentArticle] = React.useState(false)
  const [componentVideo, setComponentVideo] = React.useState(false)
  const [componentPodcast, setComponentPodcast] = React.useState(false)

  const handleCloseModal = () => {
    setModalShow(false)
    setTimeout(() => {
      setComponentArticle(false)
      setComponentVideo(false)
      setComponentPodcast(false)
    }, 300)
  }

  const handleBtnArticle = () => {
    setComponentArticle(true)
    setComponentVideo(false)
    setComponentPodcast(false)
  }

  const handleBtnVideo = () => {
    setComponentArticle(false)
    setComponentVideo(true)
    setComponentPodcast(false)
  }

  const handleBtnPodcast = () => {
    setComponentArticle(false)
    setComponentVideo(false)
    setComponentPodcast(true)
  }

  let renderComponent = (
    <PublicationsCreate
      btnArticle={handleBtnArticle}
      btnVideo={handleBtnVideo}
      btnPodcast={handleBtnPodcast}
    />
  )

  if (componentArticle === true) {
    renderComponent = <CreateArticle />
  } else if (componentVideo === true) {
    renderComponent = <CreateVideo />
  } else if (componentPodcast === true) {
    renderComponent = <CreatePodcast />
  }

  return (
    <React.Fragment>
      <DashboardComponent
        titleChildren="Publicaciones"
        typeBtnOnClick={() => setModalShow(true)}
        typeBtn={<AddIcon />}
        children={<PublicacionsComponent />}
      />
      <LightBox
        show={modalShow}
        onHide={handleCloseModal}
        children={renderComponent}
      />
    </React.Fragment>
  )
}
