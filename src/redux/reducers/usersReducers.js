import { GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REFRESH, Users } from '../types/userTypes';

  const initialState: Users = {
      users:{
      username: '',
      lastname: '',
      email: '',
      }

  }

  export default function usersReducer (state= initialState, action:any) {
      switch (action.type) {
          case GET_USERS_SUCCESS:
              return {
                  ...action.payload
              };
          case GET_USERS_FAILURE:
              return {
                  initialState,

              }
          default:
              return state
  }
}
