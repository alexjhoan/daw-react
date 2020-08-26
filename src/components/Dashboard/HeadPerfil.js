import React from 'react'
import UserDefault from '../../assets/images/icons/user_default.jpg'
import UserExpert from '../../assets/images/icons/i_userExpert-white.svg'
import UserAssociation from '../../assets/images/icons/i_userAssociation-white.svg'
import UserTraveler from '../../assets/images/icons/i_userTravel-white.svg'
import IconConfiguration from '../../assets/images/icons/i_configuration_white.svg'
import IconShared from '../../assets/images/icons/i_share_white.svg'
import '../Styles/Dashboard/HeadPerfil.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const localStg = JSON.parse(localStorage.getItem("itemsLocal") || "{}")

  let userImg: any
  let imgGroups: any

  if (localStg) {
    if (localStg.picture) {
      userImg = {backgroundImage: 'url(' + localStg.picture + ')'}
    } else {
      userImg = {backgroundImage: 'url(' + UserDefault + ')'}
    }
    if (localStg.groups == "Experto") {
      imgGroups = <figure>
                    <img className="mr-2" src={UserExpert} alt="" />
                    Experto
                  </figure>
    }else if (localStg.groups == "Asociacion") {
      imgGroups = <figure>
                    <img className="mr-2" src={UserAssociation} alt="" />
                    Asociación
                  </figure>
    }else {
      imgGroups = <figure>
                    <img className="mr-2" src={UserTraveler} alt="" />
                    Viajero
                  </figure>
    }
  }

export default function HeadPerfil() {
  const user= useSelector((state:RootState)=> state.user)

  return (
    <div className="container-fluid" id="head-perfil">
      <div className="row">
        <div className="col-12">
          <div className="profile_user d-md-flex flex-md-row justify-content-md-start w-md-80 mx-auto">
            <div className="image_profile" style={userImg}></div>
              <div className="grid_data_user d-flex flex-column justify-content-between align-items-start">
                <div className="data_user">
                  <p className="name_user">{user.first_name} {user.last_name}</p>
                  <p className="name_user">(@{user.username})</p>
                  <div className="role_user d-flex flex-row align-items-center">
                    {imgGroups}
                  </div>
                </div>
              </div>
              <div className="followers_user d-flex flex-column align-items-start align-items-md-end justify-content-end mt-4">
                <ul className="d-flex flex-row align-items-start mb-0">
                  <li>
                    <p>Seguidores</p>
                    <p>{localStg.followers || "0"}</p>
                  </li>
                  <li>
                    <p>Seguidos</p>
                    <p>{localStg.followed || "0"}</p>
                  </li>
                  <li>
                    <p>Recorrido</p>
                    <p>{localStg.traveled || "0"} <span>km</span></p>
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
