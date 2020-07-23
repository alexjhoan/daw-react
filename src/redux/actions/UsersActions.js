import { GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REFRESH,
  INFO_USER,
  } from '../types/userTypes';

  export const getUserSuccess = ( results: any ) =>{
    return{
        type: GET_USERS_SUCCESS,
        payload: results
    }
  };

  export const infoUser = (results: any) =>{
    return{
      type: INFO_USER,
      payload: results
    }
  }

  export const getIdUser = (id: any ) =>{
    return{
      type: INFO_USER,
      payload: {
        id: id
      }
    }
  }
