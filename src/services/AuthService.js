import axios from "axios"
import {apiUrl} from "./global"
import { showSuccessSnackBar, errorHandler } from '../redux/actions/SnackbarActions'
import { dismissDialog } from '../redux/actions/DialogActions'
import { logIn, logOut } from '../redux/actions/AuthActions'

export async function login (userData: any, history: any, dispatch: any){
  try {
    const response = await axios.post(`${apiUrl}token/`, userData)
    localStorage.setItem('token', response.data.access)
    localStorage.setItem('itemsLocal', JSON.stringify(response.data))
    window.location.assign("/dashboard/aboutme")
    dispatch(dismissDialog())
    dispatch(showSuccessSnackBar("Ha iniciado sesion exitosamente"));
    dispatch( logIn(userData.username));
  } catch (error) {
    dispatch(errorHandler(error, dispatch))
  }
}

export function logout(history: any , dispatch: any) {
  try {
  localStorage.removeItem('token');
  dispatch(showSuccessSnackBar("Ha cerrado sesión exitosamente"))
  dispatch(logOut());
  window.location.assign("/");
  } catch (error) {
    dispatch(showSuccessSnackBar("Error inesperado"))
  }
  // remove user from local storage to log user out
}
