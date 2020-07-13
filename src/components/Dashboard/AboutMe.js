import React, {useState, useEffect }from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import CreateIcon from '@material-ui/icons/Create'
import '../Styles/dashboard/AboutMe.css'

export default function AboutMe() {

  // const [data, setData] = useState({ hits: [] });

  // useEffect(async () => {
  //   axios.get(
  //     'https://dreamaway.machette.tech/api/users/user_test/information/',
  //   )
  //   .then((response) => {
  //     setData(response)
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // })

  return (
    <div id="about_me" class="container-fluid">
      <div class="row">
        <div class="col-12 titlePublication">
          <h1 class="text-uppercase text_gray">Información</h1>
          <Button>
            <CreateIcon />
          </Button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 text-white">
          <div id="text_about_me">
            <p class="title">sobre mí</p>
            <p>
              Amante de la adrenalina, me gustan las actividades de alto riesgo, en especial el paracaidismo
            </p>
            <div class="address d-flex flex-row align-items-center text-uppercase">
              <figure class="mb-0 mr-2">
                <svg id="localizado" xmlns="http://www.w3.org/2000/svg" width="14.352" height="20" viewBox="0 0 14.352 20">
                  <g id="Grupo_219" data-name="Grupo 219">
                    <path id="Trazado_400" data-name="Trazado 400" d="M157.12,2.563a6.75,6.75,0,0,0-10.576,0c-2.548,3.14-2.516,7.151.093,11.6a25.956,25.956,0,0,0,4.521,5.587,1.01,1.01,0,0,0,1.348,0,25.952,25.952,0,0,0,4.521-5.587C159.636,9.714,159.668,5.7,157.12,2.563Zm-2.648,6.551a3.733,3.733,0,1,1,0-5.28A3.71,3.71,0,0,1,154.472,9.114Z" transform="translate(-144.656 -0.008)" fill="#ffffff"></path>
                  </g>
                </svg>
              </figure>
              Desconocido
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-8 text_gray">
          <div id="data_about_me">
            <div class="data_up">
              <div class="left">
                <p class="title">experto</p>
                <p>
                  Especialista en paracaidismo libre..
                </p>
              </div>
              <div class="right">
                <p class="title">intereses</p>
                <p>
                  escalar, deportes extremos, buceo
                </p>
              </div>
            </div>
            <div class="data_down">
              <p class="title">mi web o blog</p>
              <a href="http://www.usertest.com" target="_blank">
                <img src="/static/images/icons/i_internet.svg" alt="world" width="25" /> http://www.usertest.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="text-uppercase text_gray my-3">actividad reciente</h2>
          <div id="recent_activities">
            {/*<p>No posee actividad reciente</p>*/}
            <div class="item_activity item_publication">
              <a href="#">
                <p class="hastag"><span class="text-yellow">#</span>Publicaciones</p>
                <div class="wrap_image">
                  <figure>
                    <img src="/static/images/recent_activities/0213.png" alt="title plublication" />
                  </figure>
                  <img src="/static/images/icons/i_microphone.svg" alt="microphone" class="icon" />
                  <div class="wrap-text d-flex flex-row align-items-center justify-content-between">
                    <div class="firts_text">
                      <p class="title_item">Título del artículo</p>
                      <p class="hastags">#DeportesAcuaticos #Viajes</p>
                      <div class="image_authors">
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                      </div>
                    </div>
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 10.676 13.475">
                        <g id="Listas" transform="translate(0)">
                          <path id="Trazado_83" data-name="Trazado 83" d="M649.995,578.682l-4.61-2.882a.694.694,0,0,0-.725-.006l-4.8,2.9a.177.177,0,0,1-.268-.151V565.933a.692.692,0,0,1,.692-.693h9.291a.693.693,0,0,1,.693.693v12.6A.177.177,0,0,1,649.995,578.682Z" transform="translate(-639.59 -565.24)" fill="white" />
                        </g>
                      </svg>
                    </figure>
                  </div>
                </div>
              </a>
            </div>
            <div class="item_activity item_experience">
              <p class="hastag"><span class="text-yellow">#</span>Experiencia</p>
              <a href="#">
                <div class="wrap_image">
                  <figure>
                    <img src="/static/images/recent_activities/0308.png" alt="title plublication" />
                  </figure>
                  <div class="wrap_text_yellow">
                    <p class="text-uppercase mb-0">Escapada para las playas de miami</p>
                    <p class="text-uppercase mb-0">con zelai y el pintón</p>
                  </div>
                  <div class="content-hastags d-flex flex-row justify-content-center align-items-center">
                    <p class="mb-0">#Travel #Turismo #Tapas</p>
                  </div>
                  <div class="wrap_text_white">
                    <p>Escapada para las playas de Miami</p>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                      <p class="d-flex flex-row align-items-center mb-0"><img src="/static/images/icons/i_calendario.svg" /> Viernes 13</p>
                      <button class="btn">más</button>
                      <p class="d-flex flex-column align-items-end mb-0"><span>Desde</span>$300.00</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="item_activity item_publication">
              <a href="#">
                <p class="hastag"><span class="text-yellow">#</span>Publicaciones</p>
                <div class="wrap_image">
                  <figure>
                    <img src="/static/images/recent_activities/0213.png" alt="title plublication" />
                  </figure>
                  <img src="/static/images/icons/i_microphone.svg" alt="microphone" class="icon" />
                  <div class="wrap-text d-flex flex-row align-items-center justify-content-between">
                    <div class="firts_text">
                      <p class="title_item">Título del artículo</p>
                      <p class="hastags">#DeportesAcuaticos #Viajes</p>
                      <div class="image_authors">
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                        <figure>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T" alt="nombre autor" />
                        </figure>
                      </div>
                    </div>
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15"  viewBox="0 0 10.676 13.475">
                        <g id="Listas" transform="translate(0)">
                          <path id="Trazado_83" data-name="Trazado 83" d="M649.995,578.682l-4.61-2.882a.694.694,0,0,0-.725-.006l-4.8,2.9a.177.177,0,0,1-.268-.151V565.933a.692.692,0,0,1,.692-.693h9.291a.693.693,0,0,1,.693.693v12.6A.177.177,0,0,1,649.995,578.682Z" transform="translate(-639.59 -565.24)" fill="white"/>
                        </g>
                      </svg>
                    </figure>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="text-uppercase text_gray mt-3 mb-4">contactos</h2>
          <div class="contact_list text_gray">
            <div class="item_contact_list">
              <h2 class="text-uppercase text_gray mb-3">email</h2>
              <a href="mailto:proyectosjenni@gmail.com" target="_blank">
                <img src="/static/images/icons/i_mail.svg" alt="mail" />
                user_test@gmail.com
              </a>
            </div>
            <div class="item_contact_list">
              <h2 class="text-uppercase text_gray mb-3">teléfonos</h2>
              <a href="tel:5468215132" target="_blank">
                <img src="/static/images/icons/i_phone.svg" alt="phone" />
                +584125008896
              </a>
            </div>
            <div class="item_contact_list">
              <h2 class="text-uppercase text_gray mb-3">redes sociales</h2>
              <ul class="d-flex flex-row align-items-center justify-content-start">
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <img src="/static/images/icons/i_twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/" target="_blank">
                    <img src="/static/images/icons/i_instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/" target="_blank">
                    <img src="/static/images/icons/i_facebook.svg" alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
