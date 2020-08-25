import React from 'react'
import {Link} from "react-router-dom"
import ImgLogo from "../assets/images/logo.svg"
import "../assets/Login.css"

export default function Help() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 body-modal-inter">
          <div className="logo-text-lightbox d-flex justify-content-center align-items-center">
            <img src={ImgLogo} alt="logo Dreamaway" />
          </div>
          <div className="formRestore col-md-12 center-block px-0 pt-2">
            <div className="w-sm-50 mx-auto mt-5 font-weight-light text-center text-help h4">¿Tienes problemas con tu usuario o con algún aspecto de nuestra plataforma? Comunícate con nosotros.</div>
            <div className="w-sm-50 mx-auto font-weight-light text-center mt-4 text-email h5">Escribe al correo <a href="mailto:soporte@dreamaway.travel" target="_blank" className="text-reset textYellow">soporte@dreamaway.travel</a> exponiendo tu caso, estaremos a tu disposición para resolverlo.</div>
            <div className="row py-3">
              <div className="col-12 d-flex flex-column align-items-center" id="links">
                <div className="mt-5">
                  <Link to="/" className="text-yellow">Volver al inicio de Dreamaway Travel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
