import React from 'react'
import {Button} from 'react-bootstrap'
import UserIcon from "../../../assets/images/icons/i_user.svg"
import IconNotImage from "../../../assets/images/icons/i_notImage_LighGray.svg"
import IconSearch from "../../../assets/images/icons/i_search.svg"
import IconCamera from "../../../assets/images/icons/i_camera.svg"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Swiper from 'react-id-swiper'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function CreateArticle() {
  const [step1, setStep1] = React.useState("block")
  const [step2, setStep2] = React.useState("none")

  const nextBtn = () =>{
    setStep1("none")
    setStep2("block")
  }

  const nextBtn2 = () =>{
    setStep1("block")
    setStep2("none")
  }

  let allElementArticle = 0

  const preview_imageArticle = (event) =>{
    const total_file = document.getElementById("upload_fileArticle").files.length

    for(var i=0;i<total_file;i++){
      let newUrl = URL.createObjectURL(event.target.files[i])
      const divImgArticle = document.getElementById("previewPublicationArticle")
      const content = '<div class="divMiniImg"><img src=' + newUrl + ' class="miniImg" name="nameImg" ' + allElementArticle + ' alt="newAlt" ' + allElementArticle + ' /></div>'
      divImgArticle.innerHTML += content
      allElementArticle = allElementArticle+1
    }
  }

  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    },
  }

  return (
    <form className="addForm" id="formPublicationArticle">
      <div className="container-fluid" style={{display: step1}}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="authors">Autor/es</label>
              <div className="inputAuthors">
                <img src={UserIcon} alt="." />
                <input disabled type="text" className="form-control pl-5" id="authors" placeholder="@JenniA" />
              </div>
            </div>
            <div className="form-group groupImage">
              <div className="imgPrevius formImgArticle" style={{display: "none"}}>
                <img src={IconNotImage} />
              </div>
              <div className="imgTodo formImgArticle" style={{display: "block"}}>
                <div id="visorArticle">
                  <img src={IconNotImage} name='fotoVisor' />
                </div>
                <div id="frameArticle">
                  <div className="slidee previewSlideArticle" id="previewPublicationArticle">





                        <Swiper {...params} >

                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        </Swiper>













                  </div>
                </div>
              </div>
              <div className="custom-file camera">
                <input disabled type="file" className="custom-file-input" id="upload_file1Article" name="Articleupload_file[]" multiple />
                <label className="custom-file-label" htmlFor="upload_file1Article"><img className="mr-1" src={IconCamera} />Tomar Fotografia</label>
              </div>
              <div className="custom-file onDevice">
                <input type="file" className="custom-file-input" id="upload_fileArticle" name="Articleupload_file[]" onChange={preview_imageArticle} multiple />
                <label className="custom-file-label" htmlFor="upload_fileArticle"><img className="mr-1" src={IconSearch} />Buscar en el dispositivo</label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group divSearchMap">
              <label for="searchMapArticle">Lugar en el mapa</label>
              <div className="inputSearchMap">
                <img src={IconSearch} alt="" />
                <input disabled type="text" className="form-control" id="searchMapArticle" placeholder="Escribe el nombre del lugar (Ej: Galicia, Madrid...)" />
              </div>
            </div>
            <div className="form-group">
              <label for="titleArticle">Titulo</label>
              <input type="text" className="form-control" id="titleArticle" placeholder="Escribe el titulo que deseas darle a tu publicación" />
            </div>
            <div className="form-group">
              <label for="sumaryArticle">Sumario</label>
              <textarea className="form-control" id="sumaryArticle" maxlength="160" placeholder="Describe brevemente de que se trata tu publicación, esto servirá para animar a los usuarios a ingresar a tu publicación."></textarea>
              <small className="form-text text-muted text-right">160 caracteres máximo.</small>
            </div>
            <div className="addMyList">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input disabled type="checkbox" className="custom-control-input" onchange="ifCheckedArticle(this.checked)" id="checkedMyListArticle" />
                <label className="custom-control-label" for="checkedMyListArticle"></label>
              </div>
              <div className="selectMyList">
                <label className="mr-sm-2 sr-only" for="selectMyListArticle">Preference</label>
                <select className="custom-select mr-sm-2" id="selectMyListArticle" disabled>
                  <option selected disabled>Agregar a mis listas</option>
                  <option value="1">Mexico</option>
                  <option value="2">Florida</option>
                  <option value="3">A donde quiero ir</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 btnNavigation">
                <span type="button" data-toggle="modal" data-target="#formModal" data-dismiss="modal">
                  <img src="{% static 'images/icons/i_arrowBackYellow.svg' %}" alt="" />
                </span>
                <span className="btn" onClick={nextBtn}>Siguiente</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="steps">
              <span className="active">
              </span>
              <span type="button" onClick={nextBtn}>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{display: step2}}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="containPublicationArticle">Contenido</label>
              <textarea id="containPublicationArticle" className="form-control" placeholder="Desarrolla el tema de tu publicación y comparte con el mundo tu experiencia."></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="categoryPublicationArticle">Categorias</label>
              <div className="selectCategory" >
                <select className="custom-select mr-sm-2" id="categoryPublicationArticle">
                  <option selected disabled>En que categoría clasifica tu publicación</option>
                </select>
                <button className="btn" disabled>Añadir Categoria</button>
              </div>
            </div>
            <div className="form-group">
              <label for="themeTagsArticle">Etiquetas del tema</label>
              <input type="text" data-role="tagsinput" id="themeTagsArticle" />
            </div>
            <div className="form-group categoryPublication">
              <label>Pagina web del blog</label>
              <small className="form-text text-muted">Si este contenido está en tu blog puedes colocar el enlace aquí</small>
              <div className="selectCategory" >
                <input disabled type="text" className="w-60" />
                <button disabled className="btn">Añadir Enlace</button>
              </div>
              <small className="form-text text-muted text-right">Máximos 2 enlaces</small>
              <div className="form-group form-check">
                <input disabled checked type="checkbox" className="form-check-input" id="aceptConditionArticle" />
                <label className="form-check-label aceptCondition" for="aceptConditionArticle">Acepto las <a href="!#">condiciones</a> condiciones de publicación de contenidos y experiencias en Dreamaway</label>
              </div>
            </div>
            <div className="row">
              <div className="col-12 btnNavigation">
                <span className="previous">
                  <img src="{% static 'images/icons/i_arrowBackYellow.svg' %}" alt="" />
                </span>
                <div className="submitArticle">
                  <span id="deletePublication" className="btn">
                    <img src="{% static 'images/icons/i_trashGray.svg' %}" alt="" />
                  </span>
                  <span id="savePublication" className="btn">
                    <img src="{% static 'images/icons/i_disketteGray.svg' %}" alt="" />
                  </span>
                  <input type="button" className="btn bg-yellow" value="Publicar" data-toggle="modal" data-target="#successSubmit-article-traveler" data-dismiss="modal" />
                  <input type="button" onClick={nextBtn2} className="btn bg-yellow" value="atras" id="sendPublication" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="steps">
              <span type="button" onClick={nextBtn2}>
              </span>
              <span className="active">
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
