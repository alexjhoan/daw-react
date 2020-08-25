import {
  COUNTRY,
  Country,

} from '../types/countryTypes';

const initialState: Country = {
    countries :  {
      geoname: '',
      id: '',
      name: '',
    }

}

export default function coutryReducer (state= initialState, action:any) {
  switch (action.type) {
    case COUNTRY:
      return {
        ...action.payload
      };

    default:
      return state
  }
}
