import React from "react"
import {Link} from "react-router-dom"
import "../assets/Login.css"
import ImgLogo from "../assets/images/logo.svg"
import MailIcon from "../assets/images/icons/i_mail.svg"
import LockIcon from "../assets/images/icons/i_lock.svg"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import {FancyAutocomplete, FancyTextInput} from "../components/FancyComponents"
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup';
import { newPassword } from '../services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"
import { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const schema = yup.object().shape({
  password: yup.string().required(), //wait for validation length
  passwordConfirm: yup.string().required(), //wait for validation length
})

export default function NewPasswordViews() {
  const {pin}= useParams();
  const user = useSelector((state:RootState)=> state.user)
  const history = useHistory();
  const dispatch = useDispatch();
  const methods = useForm({
    validationSchema: schema
  })
  const {handleSubmit, watch, errors, register, control} = methods
  const onSubmit = (formData: any) => {
    const userData= {
      password: formData.password,
      pin: pin,
    }
    console.log(userData)
    newPassword(userData, history, dispatch)
  }
  const [valuePassword, setValuePassword] = React.useState({showPassword: false,})
  const handleClickShowPassword = () => {
    setValuePassword({ showPassword: !valuePassword.showPassword });
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="formRestore col-md-12 center-block px-0 pt-2">
            <div className="w-sm-60 mx-auto font-weight-light text-center text-help">
             Ingres su correo
            </div>
            <div className="form-group mx-auto w-sm-60">
              <Controller
                as={FancyTextInput}
                control={control}
                ref={register}
                className="form-control"
                type="email"
                name="email"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={MailIcon} />
                      </InputAdornment>
                    ),
                  }}
              />
            </div>
            <div className="w-sm-60 mx-auto font-weight-light text-center text-help">
             Por favor ingresa tu nueva contraseña
            </div>
            <div className="form-group mx-auto w-sm-60">
              <Controller
                as={FancyTextInput}
                control={control}
                ref={register}
                className="form-control"
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
                      edge="end"
                    >
                      {valuePassword.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
            </div>
            <div className="w-sm-60 mx-auto font-weight-light text-center text-help">
             confirma tu nueva contraseña
            </div>
            <div className="form-group mx-auto w-sm-60">
              <Controller
                as={FancyTextInput}
                control={control}
                ref={register}
                className="form-control"
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
                      edge="end"
                    >
                      {valuePassword.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className="row py-3">
              <div
                className="col-12 d-flex flex-column align-items-center"
                id="links">
                <button
                  type="submit"
                  className="DawBtn"
                  disabled={
                    !watch("password" || errors.password) ||
                    (watch('password') != watch('passwordConfirm'))
                  }
                >
                  Cambiar contraseña
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
