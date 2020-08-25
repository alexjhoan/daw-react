import { CITY,
  COUNTRY,
  REGION,
  CITY_ID,
  REGION_ID,
  COUNTRY_ID,
  Region
} from '../../redux/types/countryTypes';

export const getRegions = (regions : any)=>{
  return{
    type: REGION,
    payload:{
      regions
    }
  }

}

export const getCountries = (countries : any)=>{
  return{
    type: COUNTRY,
    payload:{
      countries
    }
  }

}

export const getCities = (cities : any)=>{
  return{
    type: CITY,
    payload:{
      cities
    }
  }

}
