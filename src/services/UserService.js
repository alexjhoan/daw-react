import axios from 'axios';
import { apiUrl } from './global';
import { infoUser } from '../redux/Actions/UsersActions'


export async function getUser(username: any, dispatch: any){

    const optionRequest = {
        headers: {authorization: `Bearer `+ localStorage.getItem('token')}
    }
    try {
        const data = await axios.get(`${apiUrl}${username}/information/`,optionRequest);
        const user = await data.data
        console.log(user)
        dispatch(infoUser(user));
        return user
    } catch (error) {
        console.log(error);
    }
}

export async function editUser(username: any, userData: any ){
    const optionRequest = {
        headers: {authorization: `Bearer `+ localStorage.getItem('token')}
    }
    try {
        const data = await axios.patch(`${apiUrl}${username}/information/update/`,userData);
        const user = await data.data
        return user
    } catch (error) {
        console.log(error);
    }
}

