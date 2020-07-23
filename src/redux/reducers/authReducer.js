import {
  USER_AUTHENTICATE,
  USER_UNATHENTICATE,
  USER_CHECK_AUTHENTICATE,
  UserAuth
  } from '../types/authTypes'


const initialState: UserAuth = {
  username: '',
  loggeIn: false,
}

export default function authReducer (state= initialState, action:any) {
  switch (action.type) {
      case USER_AUTHENTICATE:
          return {
              ...state,
              username: action.payload,
              loggeIn:true,
          };
      break;
      case USER_UNATHENTICATE:
          return {
              initialState
          }
      default:
          return state
  }
}
