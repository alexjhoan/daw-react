import {
  UserAuth,
  USER_AUTHENTICATE,
  USER_UNATHENTICATE,
  USER_CHECK_AUTHENTICATE,
  AuthActionTypes
  } from '../types/authTypes'

  export const logIn= (payload: any) =>{
    return{
      type: USER_AUTHENTICATE,
      payload: payload,
    }

  }


  export const logOut= () =>{
    return{
      type: USER_UNATHENTICATE
    }
  }


  export function checkSesion(session: UserAuth): AuthActionTypes {
      return {
        type: USER_CHECK_AUTHENTICATE,
        payload: session
      }
  }

