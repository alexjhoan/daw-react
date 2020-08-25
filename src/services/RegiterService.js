import axios from 'axios';
import { apiUrl } from './global';
import { errorHandler, showSuccessSnackBar } from '../redux/Actions/SnackbarActions';
import { dismissDialog } from '../redux/Actions/DialogActions'




export async function registerUser( UserRegister: any, dispatch: any) {
    // const optionRequest= {
    //     headers: {authorization: `Bearer `+ localStorage.getItem('token')}
    // }
    try {
    const response = await axios.post( `${apiUrl}users/register/`, UserRegister );
    console.log(response.status);
    dispatch(dismissDialog())
    dispatch(showSuccessSnackBar("Registro exitoso"));

   } catch (error) {
      errorHandler(error, dispatch)

   }
};
