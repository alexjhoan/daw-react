import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import usersReducer from './reducers/usersReducers';
import dialogReducer from  './reducers/dialogReducer';
import infoUserReducer from './reducers/infoUserReducer';

const rootReducers = combineReducers({
     auth: authReducer,
     alert: alertReducer,
     users: usersReducer,
     user: infoUserReducer,
     dialog: dialogReducer,
});


export type RootState = ReturnType< typeof rootReducers >;
export default rootReducers;
