import { CITY,
  COUNTRY,
  REGION,
  CITY_ID,
  REGION_ID,
  COUNTRY_ID,
  Region,

} from '../types/countryTypes';

const initialState: Region = {
    regions :  {
      geoname: '',
      id: '',
      name: '',
    }

}

    export default function usersReducer (state= initialState, action:any) {
        switch (action.type) {
            case REGION:
                return {
                    ...action.payload
                };

            default:
                return state
    }
}
