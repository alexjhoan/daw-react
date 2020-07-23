import {
  SHOW_SUCCESS_SNACKBAR,
  SHOW_ERROR_SNACKBAR,
  DISMISS_SNACKBAR,
  SnackBar
  } from '../types/alertTypes'


const initialState: SnackBar = {
open: false,
snackbarMessage: '',
styles: {},
}

export default function alertReducer (state= initialState, action:any) {
  switch (action.type) {
    case SHOW_SUCCESS_SNACKBAR:
      return {
        ...state,
        ...action.payload
      };

    case SHOW_ERROR_SNACKBAR:
      return {
        ...state,
        ...action.payload
      };
    case DISMISS_SNACKBAR:
      return {
        initialState
        };

      default:
          return state
  }
}
