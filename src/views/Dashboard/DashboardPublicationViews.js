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
  const [componentCreateModal, setComponentCreateModal] = React.useState(true)
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

  const handleBtnBack = () => {
    setComponentCreateModal(true)
    setComponentArticle(false)
    setComponentVideo(false)
    setComponentPodcast(false)
  }

  const handleBtnArticle = () => {
    setComponentCreateModal(false)
    setComponentArticle(true)
    setComponentVideo(false)
    setComponentPodcast(false)
  }

  const handleBtnVideo = () => {
    setComponentCreateModal(false)
    setComponentArticle(false)
    setComponentVideo(true)
    setComponentPodcast(false)
  }

  const handleBtnPodcast = () => {
    setComponentCreateModal(false)
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

  if (componentCreateModal === true) {
    renderComponent = <PublicationsCreate
      btnArticle={handleBtnArticle}
      btnVideo={handleBtnVideo}
      btnPodcast={handleBtnPodcast}
    />
  } else if (componentArticle === true) {
    renderComponent = <CreateArticle handleBtnBack={handleBtnBack}/>
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
