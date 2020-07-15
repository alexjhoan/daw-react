import axios from "axios"
import {apiUrl} from "./global"

export function Register(userData: any) {
  return axios
    .post(`${apiUrl}/users/register/`, userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access)
      localStorage.setItem('itemsLocal', JSON.stringify(response.data))
      window.location.assign("/dashboard")
    })
    .catch((error) => console.log(error))
}

export function login(userData: any, history: any) {
  return axios
    .post(`${apiUrl}/token/`, userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access)
      localStorage.setItem('itemsLocal', JSON.stringify(response.data))
      window.location.assign("/dashboard")
    })
    .catch((error) => console.log(error))
}

export function logout(history: any) {
  localStorage.removeItem("token")
  window.location.assign("/")
}
