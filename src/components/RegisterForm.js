import React from "react"
// Material UI
import MailIcon from "../assets/images/icons/i_mail.svg"
import OpenLockIcon from "../assets/images/icons/i_lockOpen.svg"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import {useForm, Controller} from "react-hook-form"
import {useHistory} from "react-router-dom"
import * as yup from "yup"
import Checkbox from '@material-ui/core/Checkbox'

//Service
import { registerUser } from '../services/RegiterService';
//Redux
import { useDispatch } from "react-redux"

import { FancyAutocomplete, FancyTextInput } from './FancyComponents'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const schema = yup.object().shape({
  email: yup.string().required(), //wait for validation length
  password: yup.string().required(), //wait for validation length
  passwordConfirm: yup.string().required(),
  want_offers: yup.bool(),
})

export default function RegisterForm(props: any ){
  const history = useHistory();
  const dispatch = useDispatch();
  const methods = useForm({
    validationSchema: schema
  })

  const {handleSubmit, watch, errors, register, control} = methods

  const onSubmit = (UserRegister: any) => {
    const Registration={username: UserRegister.email, ...UserRegister}
    registerUser(Registration, dispatch);
  }
  const [valuePassword, setValuePassword] = React.useState({showPassword: false,})
  const handleClickShowPassword = () => {
    setValuePassword({ showPassword: !valuePassword.showPassword });
  }
  return(
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="form col-md-12 center-block px-0 pt-2">
    <div className="form-group py-2 mb-0">
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
          type="email"
          ref={register}
          defaultValue=""
          className="form-control"
          id="InputEmail2"
          aria-describedby="emailHelp"
          name="email"
          placeholder="Correo electrónico"
        />
    </div>
    <div className="form-group py-2 mb-0">
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
          id="InputPassword2"
          name="password"
          placeholder="Contraseña"
        />
    </div>
    <div className="form-group py-2 mb-0">
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
          id="InputPassword-repeat"
          name="passwordConfirm"
          placeholder="Repita contraseña"
        />
    </div>
    <div className="form-group form-check py-2">
      <input
        type="checkbox"
        className="form-check-input"
        id="not_receive_mail"
        name="want_offers"
        defaultChecked={true}
        ref={register}
      />
      <label
        className="form-check-label"
        htmlFor="not_receive_mail">
        Deseo recibir ofertas y comunicaciones comerciales de
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
          className="DawBtn"
          disabled={
            !watch('email') ||
            !watch('password' ) ||
            (watch('password') != watch('passwordConfirm'))
          }
        >

          Crear Cuenta<i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  </form>
  )
}
