import React from "react"
import {Form, Button} from "react-bootstrap"
import LockIcon from "../../../assets/images/icons/i_lock.svg"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import {
  FancyAutocomplete,
  FancyTextInput
} from "../../../components/FancyComponents"
import {useForm, Controller} from "react-hook-form"
import * as yup from "yup"
import {newPassword} from "../../../services/AuthService"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const schema = yup.object().shape({
  password: yup.string().required(), //wait for validation length
  passwordConfirm: yup.string().required() //wait for validation length
})

export default function UserSecurity() {
  const history = useHistory()
  const dispatch = useDispatch()
  const methods = useForm({
    validationSchema: schema
  })
  const {handleSubmit, watch, errors, register, control} = methods
  const onSubmit = (formData: any) => {
    const userData = {
      password: formData.password
    }
    console.log(userData)
    newPassword(userData, history, dispatch)
  }
  const [valuePassword, setValuePassword] = React.useState({
    showPassword: false
  })
  const handleClickShowPassword = () => {
    setValuePassword({showPassword: !valuePassword.showPassword})
  }
  return (
    <form
      id="UserConfiguration"
      onSubmit={handleSubmit(onSubmit)}
      className="formRestore col-md-12 center-block px-0 mt-4">
      <div className="firstRow">
        <p className="h4">Cambio de contraseña:</p>
        <p>
          Haz que tu contraseña sea segura y no la compartas con nadie, de esa
          forma podemos asegurarnos de que tus datos están a salvo en nuestras
          manos.
        </p>
        <div className="font-weight-light text-help">
          Por favor ingresa tu contraseña actual
        </div>
        <div className="form-group w-sm-50">
          <Controller
            as={FancyTextInput}
            control={control}
            className="form-control required"
            type={valuePassword.showPassword ? "text" : "password"}
            name="passwordActual"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={LockIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {valuePassword.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              )
            }}
          />
        </div>
        <div className="font-weight-light text-help">
          Por favor ingresa tu nueva contraseña
        </div>
        <div className="form-group w-sm-50">
          <Controller
            as={FancyTextInput}
            control={control}
            ref={register}
            className="form-control required"
            type={valuePassword.showPassword ? "text" : "password"}
            name="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={LockIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {valuePassword.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              )
            }}
          />
        </div>
        <div className="font-weight-light text-help">
          confirma tu nueva contraseña
        </div>
        <div className="form-group w-sm-50">
          <Controller
            as={FancyTextInput}
            control={control}
            ref={register}
            className="form-control required"
            type={valuePassword.showPassword ? "text" : "password"}
            name="passwordConfirm"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={LockIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {valuePassword.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              )
            }}
          />
        </div>
      </div>
      <div className="SaveButtons d-flex align-items-center justify-content-center flex-md-row-reverse justify-content-md-start">
        <button
          type="submit"
          className="DawBtn"
          disabled={
            !watch("password" || errors.password) ||
            watch("password") != watch("passwordConfirm")
          }>
          Cambiar contraseña
        </button>
        <Button type="button" className="BtnCancel">
          Descartar
        </Button>
      </div>
    </form>
  )
}
