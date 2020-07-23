export const GET_USERS_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USER_FAILURE';
export const GET_USERS_REFRESH = 'GET_USERS_REFRESH';

export const INFO_USER = 'INFO_USER';

export interface Users {
   users: {
    username: string
    lastname: string
    email:  string
    }
}

export interface User{
    id: string
    name: string
    lastName: string
    email:  string
    username:  string
    phone: string
    country: string
    city: string
    region: string
    facebook: string
    instagram: string
    twitter: string
    webSite: string
}

interface GetUserSucces {
    type:  typeof GET_USERS_SUCCESS
}

interface GetUserFailure {
    type: typeof GET_USERS_FAILURE
}

interface GetUserReresh {
    type: typeof GET_USERS_REFRESH
}
interface InfoUserSuccess {
    type:  typeof GET_USERS_SUCCESS
}

export type GetUserActions = GetUserFailure | GetUserSucces | GetUserReresh

export type InfoUserActions =  InfoUserSuccess
