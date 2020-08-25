import React from "react"
import {Button} from "react-bootstrap"
import UserIcon from "../../../assets/images/icons/i_user.svg"
import IconNotImage from "../../../assets/images/icons/i_notImage_LighGray.svg"
import IconSearch from "../../../assets/images/icons/i_search.svg"
import IconCamera from "../../../assets/images/icons/i_camera.svg"
import IconBack from "../../../assets/images/icons/i_arrowBackYellow.svg"
import IconSave from "../../../assets/images/icons/i_diskette.svg"
import IconDelete from "../../../assets/images/icons/i_trash.svg"
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from "swiper"
import Swiper from "react-id-swiper"
import "swiper/swiper-bundle.min.css"
import {TagInput} from "reactjs-tag-input"
import { FancyAutocomplete, FancyTextInput } from '../../FancyComponents'
//Form-hook
import {useForm, Controller} from "react-hook-form"
import * as yup from "yup"

SwiperCore.use([Navigation, Pagination, Scrollbar])

export default function CreateArticle(props) {
  const [step1, setStep1] = React.useState("block")
  const [step2, setStep2] = React.useState("none")
  const [showAddImgDef, setShowAddImgDef] = React.useState("block")
  const [showAddImg, setShowAddImg] = React.useState("none")
  const [miCarousel, setMiCarousel] = React.useState([])
  const [showImgInput, setShowImgInput] = React.useState(IconNotImage)
  const [tags, setTags] = React.useState([])
  const methods = useForm({
    // validationSchema: schema
  });
  const {handleSubmit, control, watch, errors, register} = methods

  const onSubmit= (publicationData) =>{
    console.log(publicationData)
  }

  const onTagsChanged = () => {
    setTags({tags})
  }

  const nextBtnForm = () => {
    setStep1("none")
    setStep2("block")
  }

  const btnBackForm = () => {
    setStep1("block")
    setStep2("none")
  }

  const btnImageArticle = () => {
    setMiCarousel([])
    setShowImgInput(IconNotImage)
  }

  const myVisorArticle = (imgName) => {
    setShowImgInput(imgName)
  }

  let allElementArticle = 0

  const preview_imageArticle = (event) => {
    const total_file = document.getElementById("upload_fileArticle").files.length
    let prueba = []
    for (let i = 0; i < total_file; i++) {
      let newUrl = URL.createObjectURL(event.target.files[i])
      const content = (
        <div className="divMiniImg">
          <img
            src={newUrl}
            classNames="miniImg"
            onClick={() => myVisorArticle(newUrl)}
            name={`nameImg ${allElementArticle}`}
            alt={`newAlt ${allElementArticle}`}
          />
        </div>
      )
      allElementArticle = allElementArticle + 1
      prueba.push(content)
    }
    setMiCarousel([prueba, ...miCarousel])

    if (total_file > 0) {
      setShowAddImgDef("none")
      setShowAddImg("block")
    } else {
      setShowAddImgDef("block")
      setShowAddImg("none")
    }
  }

  const ifCheckedArticle = () => {
    let btn = document.getElementById("checkedMyListArticle")
    if (btn.checked === true) {
      document.getElementById("selectMyListArticle").disabled = false
    } else if (btn.checked === false) {
      document.getElementById("selectMyListArticle").disabled = true
    }
  }

  const params = {
    rebuildOnUpdate: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }

  const wrapperStyle = `
    background: initial;
    box-shadow: none;
    font-family: inherit;
    font-weight: inherit;
    border-radius: inherit;
    padding: 5px;
    font-size: 1rem;
    position: relative;
    left: 0;
    top: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    width: 50%;
  `
  return (
    <form className="addForm" onSubmit={handleSubmit(onSubmit)} id="formPublicationArticle">
      <div className="container-fluid" style={{display: step1}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="authors">Autor/es</label>
              <div className="inputAuthors">
                <img src={UserIcon} alt="." />
                <FancyTextInput
                  disabled
                  type="text"
                  className="form-control pl-5"
                  id="authors"
                  placeholder="@JenniA"
                />
              </div>
            </div>
            <div className="form-group groupImage">
              <div
                className="imgPrevius formImgArticle"
                style={{display: showAddImgDef}}>
                <img src={IconNotImage} />
              </div>
              <div
                className="imgTodo formImgArticle"
                style={{display: showAddImg}}>
                <div id="visorArticle">
                  <img src={showImgInput} name="fotoVisor" />
                </div>
                <div id="frameArticle">
                  <div
                    className="slidee previewSlideArticle"
                    id="previewPublicationArticle">
                    <Swiper {...params}>{miCarousel}</Swiper>
                  </div>
                </div>
              </div>
              <div className="custom-file camera">
                <FancyTextInput
                  disabled
                  type="file"
                  className="custom-file-input"
                  id="upload_file1Article"
                  name="Articleupload_file[]"
                  multiple
                />
                <label
                  className="custom-file-label"
                  htmlFor="upload_file1Article">
                  <img className="mr-1" src={IconCamera} />
                  Tomar Fotografia
                </label>
              </div>
              <div className="custom-file onDevice">
                <FancyTextInput
                  type="file"
                  className="custom-file-input"
                  id="upload_fileArticle"
                  name="Articleupload_file[]"
                  onChange={preview_imageArticle}
                  onClick={btnImageArticle}
                  multiple
                />
                <label
                  className="custom-file-label"
                  htmlFor="upload_fileArticle">
                  <img className="mr-1" src={IconSearch} />
                  Buscar en el dispositivo
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group divSearchMap">
              <label htmlFor="searchMapArticle">Lugar en el mapa</label>
              <div className="inputSearchMap">
                <img src={IconSearch} alt="" />
                <FancyTextInput
                  type="text"
                  className="form-control"
                  id="searchMapArticle"
                  placeholder="Escribe el nombre del lugar (Ej: Galicia, Madrid...)"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="titleArticle">Titulo</label>
              <FancyTextInput
                type="text"
                className="form-control"
                id="titleArticle"
                placeholder="Escribe el titulo que deseas darle a tu publicación"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sumaryArticle">Sumario</label>
              <textarea
                className="form-control"
                id="sumaryArticle"
                maxLength="160"
                placeholder="Describe brevemente de que se trata tu publicación, esto servirá para animar a los usuarios a ingresar a tu publicación."></textarea>
              <small className="form-text text-muted text-right">
                160 caracteres máximo.
              </small>
            </div>
            <div className="addMyList">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={ifCheckedArticle}
                  id="checkedMyListArticle"
                />
                <label
                  className="custom-control-label"
                  htmlFor="checkedMyListArticle"></label>
              </div>
              <div className="selectMyList">
                <label
                  className="mr-sm-2 sr-only"
                  htmlFor="selectMyListArticle">
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="selectMyListArticle"
                  disabled>
                  <option value="1">Agregar a mis listas</option>
                  <option value="2">Mexico</option>
                  <option value="3">Florida</option>
                  <option value="4">A donde quiero ir</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 btnNavigation">
                <span type="button" onClick={props.handleBtnBack}>
                  <img src={IconBack} alt="" />
                </span>
                <span className="btn" onClick={nextBtnForm}>
                  Siguiente
                </span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="steps">
              <span className="active"></span>
              <span type="button" onClick={nextBtnForm}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{display: step2}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="containPublicationArticle">Contenido</label>
              <textarea
                id="containPublicationArticle"
                className="form-control"
                placeholder="Desarrolla el tema de tu publicación y comparte con el mundo tu experiencia."
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="categoryPublicationArticle">Categorias</label>
              <div className="selectCategory">
                <select
                  className="custom-select mr-sm-2"
                  id="categoryPublicationArticle">
                  <option value="1" disabled>
                    En que categoría clasifica tu publicación
                  </option>
                </select>
                <button className="btn" disabled>
                  Añadir Categoria
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Etiquetas del tema</label>
              <div className="divTags">
                <TagInput
                  tags={tags}
                  onTagsChanged={onTagsChanged}
                  wrapperStyle={{wrapperStyle}}
                  tagStyle={`
                    background: #fff;
                    color: #444242;
                    border: solid 1px #bbb;
                    border-radius: 50em;
                  `}
                  tagDeleteStyle={`color: #444242;`}
                  placeholder="Etiquetas de la Publicación"
                />
              </div>
            </div>
            <div className="form-group categoryPublication">
              <label>Pagina web del blog</label>
              <small className="form-text text-muted">
                Si este contenido está en tu blog puedes colocar el enlace aquí
              </small>
              <div className="selectCategory">
                <FancyTextInput type="text" />
                <button className="btn">
                  Añadir Enlace
                </button>
              </div>
              <small className="form-text text-muted text-right">
                Máximos 2 enlaces
              </small>
              <div className="form-group form-check">
                <FancyTextInput
                  type="checkbox"
                  className="form-check-input"
                  id="aceptConditionArticle"
                />
                <label
                  className="form-check-label aceptCondition"
                  htmlFor="aceptConditionArticle">
                  Acepto las <a href="!#">condiciones</a> condiciones de
                  publicación de contenidos y experiencias en Dreamaway
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12 btnNavigation">
                <span className="previous">
                  <img
                    src={IconBack}
                    alt=""
                    onClick={btnBackForm}
                  />
                </span>
                <div className="submitArticle">
                  <span id="deletePublication" className="btn">
                    <img
                      src={IconDelete}
                      alt=""
                    />
                  </span>
                  <span id="savePublication" className="btn">
                    <img
                      src={IconSave}
                      alt=""
                    />
                  </span>
                  <FancyTextInput
                    type="button"
                    className="btn bg-yellow"
                    defaultValue="Publicar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="steps">
              <span type="button" onClick={btnBackForm}></span>
              <span className="active"></span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
