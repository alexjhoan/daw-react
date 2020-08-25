import {
  CITY,
  City,

} from '../types/countryTypes';

const initialState: City = {
    cities :  {
      geoname: '',
      id: '',
      name: '',
    }

}

export default function coutryReducer (state= initialState, action:any) {
  switch (action.type) {
    case CITY:
      return {
        ...action.payload
      };

    default:
      return state
  }
}
