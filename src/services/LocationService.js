import axios from "axios"
import {apiUrl} from "./global"
import { showSuccessSnackBar, errorHandler } from '../redux/Actions/SnackbarActions'
import { dismissDialog } from '../redux/Actions/DialogActions'
import { getUsername } from '../redux/Actions/UsersActions'

export async function getRegion(paginate?: any,){

  const optionRequest = {
      headers: {authorization: `Bearer `+ localStorage.getItem('token')},
      params: {paginate:paginate}
  }
  try {
      const data = await axios.get(`${apiUrl}locations/continentalregions/`,optionRequest);
      const response = await data.data
      console.log(response)
      return response
  } catch (error) {
      console.log(error);
  }
}

export async function getCountry(id:any, paginate?: any, ){

  const optionRequest = {
      headers: {authorization: `Bearer `+ localStorage.getItem('token')},
      params: {paginate:paginate}
  }
  try {
      const data = await axios.get(`${apiUrl}locations/continentalregions/${id}/countries/`,optionRequest);
      const response = await data.data
      console.log(response)
      return response
  } catch (error) {
      console.log(error);
  }
}

export async function getCity(id:any, paginate?: any, ){

  const optionRequest = {
      headers: {authorization: `Bearer `+ localStorage.getItem('token')},
      params: {paginate:paginate}
  }
  try {
      const data = await axios.get(`${apiUrl}locations/countries/${id}/cities/`,optionRequest);
      const response = await data.data
      console.log(response)
      return response
  } catch (error) {
      console.log(error);
  }
}

