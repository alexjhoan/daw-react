import React from "react"
// Material UI
import MailIcon from '@material-ui/icons/Mail'
import LockOpenIcon from '@material-ui/icons/LockOpen'

export default function RegisterForm(props: any ){
  return(
    <form
    action="."
    method="POST"
    className="form col-md-12 center-block px-0 pt-2">
    <div className="form-group py-2 mb-0">
      <label htmlFor="InputEmail2" className="w-100">
        <i><MailIcon /></i>
        <input
          type="email"
          className="form-control"
          id="InputEmail2"
          aria-describedby="emailHelp"
          name="email"
          placeholder="Correo electrónico"
        />
      </label>
    </div>
    <div className="form-group py-2 mb-0">
      <label htmlFor="InputPassword2" className="w-100">
        <i><LockOpenIcon /></i>
        <input
          type="password"
          className="form-control"
          id="InputPassword2"
          name="password1"
          placeholder="Contraseña"
        />
      </label>
    </div>
    <div className="form-group py-2 mb-0">
      <label htmlFor="InputPassword-repeat" className="w-100">
        <i><LockOpenIcon /></i>
        <input
          type="password"
          className="form-control"
          id="InputPassword-repeat"
          name="password2"
          placeholder="Repita contraseña"
        />
      </label>
    </div>
    <div className="form-group form-check py-2">
      <input
        type="checkbox"
        className="form-check-input"
        id="not_receive_mail"
      />
      <label
        className="form-check-label"
        htmlFor="not_receive_mail">
        No deseo recibir ofertas y comunicaciones comerciales de
        Dreamaway Travel por correo electrónico.
      </label>
    </div>
    <div className="row py-3">
      <div
        className="col-12 d-flex flex-column align-items-center"
        id="links">
        <button
          type="submit"
          name="submit"
          value="sign_up"
          className="DawBtn">
          Crear Cuenta<i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  </form>
  )
}
