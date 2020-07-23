import { INFO_USER, User } from '../types/userTypes';

const initialState: User = {
    id: ' ',
    name: ' ',
    lastName: ' ',
    email:  ' ',
    username:  ' ',
    phone: ' ',
    country: ' ',
    city: ' ',
    region: ' ',
    facebook: ' ',
    instagram: ' ',
    twitter: ' ',
    webSite: ' ',
}

    export default function usersReducer (state= initialState, action:any) {
        switch (action.type) {
            case INFO_USER:
                return {
                    ...action.payload
                };

            default:
                return state
    }
}
