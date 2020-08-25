import axios from "axios"
import {apiUrl} from "./global"
import { showSuccessSnackBar, errorHandler, showErrorSnackBar } from '../redux/Actions/SnackbarActions'
import { dismissDialog } from '../redux/Actions/DialogActions'
import { getUsername } from '../redux/Actions/UsersActions'
import { logIn, logOut } from '../redux/Actions/AuthActions'
import { infoUser } from '../redux/Actions/UsersActions'


export async function login (userData: any, history: any, dispatch: any){
  try {
    const response = await axios.post(`${apiUrl}token/`, userData)
    localStorage.setItem('token', response.data.access)
    localStorage.setItem('refresh', response.data.refresh)
    localStorage.setItem('username',response.data.username)
    localStorage.setItem('itemsLocal', JSON.stringify(response.data))
    window.location.assign("/dashboard/aboutme")
    dispatch(dismissDialog())
    dispatch(showSuccessSnackBar("Ha iniciado sesion exitosamente"));
    dispatch( logIn(userData.username));
  } catch (error) {
    errorHandler(error, dispatch)
  }
}

export function logout(history: any , dispatch: any) {
  try {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh')
  localStorage.removeItem('username');
  localStorage.removeItem('itemsLocal');
  dispatch(showSuccessSnackBar("Ha cerrado sesión exitosamente"))
  dispatch(logOut());
  history.push("/");
  } catch (error) {
    console.log(error)
    errorHandler(error, dispatch)
  }
}

export async function requestChangePassword (userData: any, history:any, dispatch: any) {
  try {
    const response = await axios.post(`${apiUrl}request/change/password/`, userData)
    console.log(response)
    // dispatch(showSuccessSnackBar(`Se ha enviado un link a su correo ${userData.email}`))
    history.push('/passwordemail');
    dispatch(infoUser(userData));
  } catch (error) {
    errorHandler(error, dispatch)
  }
}

export async function newPassword (userData: any, history:any, dispatch: any) {
  try {
    const response = await axios.post(`${apiUrl}change/password/`, userData)
    console.log(response)
    // dispatch(showSuccessSnackBar(`Su contraseña se ha cambiado de manera exitosa`))
    history.push('/passwordsuccess');
  } catch (error) {
    errorHandler(error, dispatch)
  }
}
