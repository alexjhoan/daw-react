import React from "react"
import {Link} from "react-router-dom"
import "../assets/Login.css"
import ImgLogo from "../assets/images/logo.svg"
import MailIcon from '@material-ui/icons/Mail'

export default function PasswordRestore() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 closeModal">
          <Link to="/login">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </Link>
        </div>
        <div className="col-12 body-modal-inter">
          <div className="logo-text-lightbox d-flex justify-content-center align-items-center">
            <img src={ImgLogo} alt="logo Dreamaway" />
          </div>
          <div className="w-25 mx-auto mt-3 font-weight-light text-center text-help">¿Deseas que te ayudemos con la contraseña?</div>
          <div className="w-30 mx-auto font-weight-light text-center mt-4 text-email">Ingresa el correo electrónico que registraste en Dreamaway Travel y te ayudaremos a crear una nueva contraseña</div>
          <form action="" method="post" className="formRestore col-md-12 center-block px-0 pt-2">
            <div className="form-group py-2 mx-auto w-60">
              <label for="id_email" className="w-100"><MailIcon /></label>
              <input className="form-control" type="email" name="csrfmiddlewaretoken" />
            </div>
            <div className="row py-3">
              <div className="col-12 d-flex flex-column align-items-center" id="links">
                <button type="button" className="DawBtn">Siguiente<i className="fa fa-angle-right"></i></button>
                <center className="mt-2"><Link to="/login" className="text-yellow">Olvide correo electrónico</Link></center>
                <center className="mt-5"><Link to="/login" className="text-yellow">Volver al inicio de sesión de Dreamaway Travellllll</Link></center>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
