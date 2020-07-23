export const USER_AUTHENTICATE = 'USER_AUTHENTICATE'
export const USER_UNATHENTICATE = 'USER_UNATHENTICATE'
export const USER_CHECK_AUTHENTICATE = 'USER_CHECK_AUTHENTICATE'

export interface UserAuth {
    username: string,
    loggeIn: boolean
}

interface logIn {
    type:  typeof USER_AUTHENTICATE,
    payload: UserAuth
}

interface logOut {
    type: typeof USER_UNATHENTICATE,
    payload: UserAuth
}

interface checkAuth{
    type: typeof USER_CHECK_AUTHENTICATE,
    payload: UserAuth
}


export type AuthActionTypes = logIn | logOut | checkAuth
