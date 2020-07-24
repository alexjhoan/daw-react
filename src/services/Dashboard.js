import axios from "axios"
import {apiUrl} from "./global"

export async function GetPublications(){
  const localStg = JSON.parse(localStorage.getItem("itemsLocal") || "{}")
  try {
    const response = await axios.get(`${apiUrl}${localStg.username}/publications/`)
    return response
  } catch (error) {
    console.log(error)
  }
}
