import React, { useEffect} from 'react'
import {Link} from "react-router-dom"
import ImgLogo from "../assets/images/logo.svg"
import "../assets/Login.css"
import {useHistory} from "react-router-dom"


export default function PasswordEmail() {
  const history =useHistory();
  useEffect(() => {
    setTimeout(
      ()=>{history.push('/')}, 6000)
  },[]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 body-modal-inter">
          <div className="logo-text-lightbox d-flex justify-content-center align-items-center">
            <img src={ImgLogo} alt="logo Dreamaway" />
          </div>
          <div className="formRestore col-md-12 center-block px-0 pt-2">
            <div className="w-sm-50 mx-auto mt-5 font-weight-light text-center text-help h4">Revisa el correo que acabas de suministrar</div>
            <div className="w-sm-50 w-md-30 mx-auto font-weight-light text-center mt-4 text-email h5">Te hemos enviado al correo un enlace para que puedas restablecer la contraseña.</div>
            <div className="row py-3">
              <div className="col-12 d-flex flex-column align-items-center" id="links">
                <div className="mt-4">
                  <Link to="/passwordrestore" className="text-yellow">No me ha llegado el correo electrónico</Link>
                </div>
                <div className="mt-4">
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
