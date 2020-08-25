import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import usersReducer from './reducers/usersReducers';
import dialogReducer from  './reducers/dialogReducer';
import infoUserReducer from './reducers/infoUserReducer';
import regionReducer from './reducers/regionReducer';
import countryReducer from './reducers/countryReducer';
import cityReducer from './reducers/cityReducer'

const rootReducers = combineReducers({
     auth: authReducer,
     alert: alertReducer,
     users: usersReducer,
     user: infoUserReducer,
     dialog: dialogReducer,
     regions: regionReducer,
     country: countryReducer,
     city: cityReducer,
});


export type RootState = ReturnType< typeof rootReducers >;
export default rootReducers;
