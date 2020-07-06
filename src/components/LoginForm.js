import React from "react"
import {Link} from "react-router-dom"
import MailIcon from "@material-ui/icons/Mail"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {useHistory} from "react-router-dom"
import {login} from "../services/AuthService"

const schema = yup.object().shape({
  username: yup.string().required(), //wait for validation length
  password: yup.string().required() //wait for validation length
})

export default function LoginForm(props: any) {
  const history = useHistory()
  const methods = useForm({
    validationSchema: schema
  })

  const {handleSubmit, watch, errors, register} = methods
  const onSubmit = (userData: any) => {
    login(userData, history)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form col-md-12 center-block px-0 pt-2">
      <div className="form-group py-2 mb-0">
        <label htmlFor="InputEmail1" className="w-100">
          <i>
            <MailIcon />
          </i>
          <input
            type="username"
            ref={register}
            defaultValue=""
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            name="username"
            placeholder="Nombre de usuario o email"
          />
          {errors.username && errors.username.message}
        </label>
      </div>
      <div className="form-group py-2 mb-0">
        <label htmlFor="InputPassword1" className="w-100">
          <i>
            <LockOpenIcon />
          </i>
          <input
            type="password"
            ref={register}
            defaultValue=""
            className="form-control"
            id="InputPassword1"
            name="password"
            placeholder="contraseña"
          />
        </label>
      </div>
      <div className="form-group form-check py-2 mb-0">
        <input
          type="checkbox"
          className="form-check-input"
          id="recorder_users"
        />
        <label className="form-check-label" htmlFor="recorder_user">
          Recordarme
        </label>
      </div>
      <Link
        to="/PasswordRestore"
        className="pb-3 d-block text-right text-yellow">
        ¿Olvidaste la contraseña?
      </Link>
      <div className="row py-3">
        <div
          className="col-12 d-flex flex-column align-items-center"
          id="links">
          <button
            type="submit"
            className="DawBtn"
            name="submit"
            value="sign_in"
            disabled={
              !watch("username" || errors.username) ||
              !watch("password" || errors.password)
            }>
            Iniciar<i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </form>
  )
}
