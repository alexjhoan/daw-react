import React from "react"
import {Link} from "react-router-dom"
import MailIcon from "../assets/images/icons/i_mail.svg"
import OpenLockIcon from "../assets/images/icons/i_lockOpen.svg"
import {useForm, Controller} from "react-hook-form"
import * as yup from "yup"
import {useHistory} from "react-router-dom"
import {login} from "../services/AuthService"
import { useDispatch } from 'react-redux';
import { FancyTextInput } from '../components/FancyComponents'
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const schema = yup.object().shape({
  email: yup.string().required(), //wait for validation length
  password: yup.string().required() //wait for validation length
})

export default function LoginForm(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const methods = useForm({
    validationSchema: schema
  })
  const {handleSubmit, watch, errors, register, control} = methods
  const onSubmit = (userData: any) => {
    login(userData, history, dispatch)
  }
  const [valuePassword, setValuePassword] = React.useState({showPassword: false,})
  const handleClickShowPassword = () => {
    setValuePassword({ showPassword: !valuePassword.showPassword });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form col-md-12 center-block px-0 pt-2">
      <div className="form-group py-2 mb-0">
        {/* <label htmlFor="InputEmail1" className="w-100"> */}
          <Controller
            as={FancyTextInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={MailIcon} />
                </InputAdornment>
              ),
            }}
            control={control}
            type="username"
            ref={register}
            defaultValue=""
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Nombre de usuario o email"
          />
          {errors.username && errors.username.message}
        {/* </label> */}
      </div>
      <div className="form-group py-2 mb-0">
        {/* <label htmlFor="InputPassword1" className="w-100"> */}
          <Controller
            as={FancyTextInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={OpenLockIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {valuePassword.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              )
            }}
            control={control}
            type={valuePassword.showPassword ? "text" : "password"}
            ref={register}
            defaultValue=""
            className="form-control"
            id="InputPassword1"
            name="password"
            placeholder="contraseña"
          />
        {/* </label> */}
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
        to="/passwordrestore"
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
              !watch("email" || errors.username) ||
              !watch("password" || errors.password)
            }>
            Iniciar<i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </form>
  )
}
