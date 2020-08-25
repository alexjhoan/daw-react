import React from "react"
import {Link} from "react-router-dom"
import "../assets/Login.css"
import ImgLogo from "../assets/images/logo.svg"
import MailIcon from '../assets/images/icons/i_mail.svg'
import {useHistory} from "react-router-dom"
import {useForm, Controller} from "react-hook-form"
import { FancyTextInput } from '../components/FancyComponents'
import * as yup from "yup"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import { requestChangePassword } from '../services/AuthService';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().required(), //wait for validation length
})

export default function PasswordRestore() {
  const history = useHistory();
  const dispatch = useDispatch();
  const methods = useForm({
    validationSchema: schema
  })

  const {handleSubmit, watch, errors, register, control} = methods
  const onSubmit = (userData: any) => {
    console.log(userData)
    requestChangePassword(userData, history, dispatch)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 closeModal">
          <Link to="/">
            <button
              type="button"
              className="closePassword"
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
          <form onSubmit={handleSubmit(onSubmit)}
            className="formRestore col-md-12 center-block px-0 pt-2">
            <div className="w-sm-60 mx-auto mt-3 font-weight-light text-center text-help h4">¿Deseas que te ayudemos con la contraseña?</div>
            <div className="w-sm-60 mx-auto font-weight-light text-center mt-4 text-email h6">Ingresa el correo electrónico que registraste en Dreamaway Travel y te ayudaremos a crear una nueva contraseña</div>
            <div className="form-group py-2 mx-auto w-sm-60">
              <Controller
              as={FancyTextInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={MailIcon} className="ml-n1" />
                  </InputAdornment>
                ),
              }}
              control={control}
              ref={register}
              name="email"
              className="form-control"
              type="email"
              // name="csrfmiddlewaretoken"
              />
            </div>
            <div className="row py-3">
              <div className="col-12 d-flex flex-column align-items-center" id="links">
                <button
                  type="submit"
                  className="DawBtn"
                  disabled={!watch("email" || errors.email)}
                >
                  Recuperar contraseña
                </button>
                <div className="mt-4"><Link to="/help" className="text-yellow">Olvide correo electrónico</Link></div>
                <div className="mt-5"><Link to="/" className="text-yellow">Volver al inicio de sesión de Dreamaway Travel</Link></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
