import React from 'react'
import UserDefault from '../../assets/images/icons/user_default.jpg'
import UserExpert from '../../assets/images/icons/i_expert.svg'
import IconConfiguration from '../../assets/images/icons/i_configuration_white.svg'
import IconShared from '../../assets/images/icons/i_share_white.svg'
import '../Styles/HeadPerfil.css'

const localStg = JSON.parse(localStorage.getItem("itemsLocal"))

  let userImg
  let imgGroups

  if (localStg) {
    if (localStg.picture) {
      userImg = {backgroundImage: 'url(' + localStg.picture + ')'}
    } else {
      userImg = {backgroundImage: 'url(' + UserDefault + ')'}
    }
    if (localStg.groups.experto) {
      imgGroups = <figure>
                    <img className="mr-2" src={UserExpert} alt="" />
                    Experto
                  </figure>
    }else {
      imgGroups = "Viajero"
    }
  }

export default function HeadPerfil() {
  return (
    <div className="container-fluid" id="head-perfil">
      <div className="row">
        <div className="col-12">
          <div className="profile_user d-md-flex flex-md-row justify-content-md-start w-md-80 mx-auto">
            <div className="image_profile" style={userImg}></div>
              <div className="grid_data_user d-flex flex-column justify-content-between align-items-start">
                <div className="data_user">
                  <p className="name_user">{localStg.username}</p>
                  <div className="role_user d-flex flex-row align-items-center">
                    {imgGroups}
                  </div>
                </div>
              </div>
              <div className="followers_user d-flex flex-column align-items-start align-items-md-end justify-content-end mt-4">
                <ul className="d-flex flex-row align-items-start mb-0">
                  <li>
                    <p>Seguidores</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>Seguidos</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>Recorrido</p>
                    <p>0 <span>km</span></p>
                  </li>
                </ul>
              </div>
              <div className="buttons_profile d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center align-items-sm-end">
                <a className="shared">
                  <img src={IconShared} alt="share" />
                </a>
                <a href="" className="configuration" data-toggle="modal" data-target="#lightbox_profile">
                  <img src={IconConfiguration} alt="configuration" />
                </a>
              </div>
              <button className="btn bg-yellow d-none">Seguir<i className="fa fa-angle-right" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
