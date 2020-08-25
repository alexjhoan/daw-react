export const REGION_ID = 'REGION_ID';
export const COUNTRY_ID = 'COUNTRY_ID';
export const CITY_ID = 'CITY_ID';
export const REGION = 'REGION';
export const COUNTRY = 'COUNTRY';
export const CITY = 'CITY';

export interface RegionId {
  id: string,
  region: string
}

export interface CountryId{
  id: string,
  region: string
}

export interface CityId{
  id: string,
  region: string
}

export interface Region{
  regions :  {
    geoname: string,
    id: string,
    name: string
  }
}

export interface Country{
  countries : {
    geoname: string,
    id: string,
    name: string
  }
}

export interface City{
  cities :  {
    geoname: string,
    id: string,
    name: string
  }
}
