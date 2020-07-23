import { SHOW_SUCCESS_SNACKBAR,
  SHOW_ERROR_SNACKBAR,
  DISMISS_SNACKBAR }
from '../types/alertTypes';

export const showSuccessSnackBar = (response: string ) => {
  return{
    type: SHOW_SUCCESS_SNACKBAR,
    payload:{
      open: true,
      duration: 1400,
      snackbarMessage: response,
    }
  };
};

export const clearSnackbar = () => {
  return {
    type: DISMISS_SNACKBAR
  };
};

export const showErrorSnackBar = (response: any) => {
  if (typeof response === 'string') {
    return{
      type: SHOW_ERROR_SNACKBAR,
      payload: {
        open: true,
        duration: 2000,
        snackbarMessage: 'Revise su conexión a internet',
        styles: { backgroundColor: 'red' }
      },
    }
  };
  for (let entry in response) {
    if (typeof response[entry] == 'object') {
      for (const key in response[entry]) {
        return{
          type: SHOW_ERROR_SNACKBAR,
          payload: {
            open: true,
            duration: 2000,
            snackbarMessage: response[entry][key],
          },
        };
      };
    } else {
      return{
        type: SHOW_ERROR_SNACKBAR,
        payload: {
          open: true,
          duration: 2000,
          snackbarMessage: response[entry],
        },
      };
    };
  };
};



export const errorHandler = (error: any, dispatch: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    dispatch(showErrorSnackBar(error.response.data));
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    dispatch(showErrorSnackBar(error.request));
  } else {
    // Something happened in setting up the request that triggered an Error
    dispatch(showErrorSnackBar(''));
  }
  console.log(error.config);
};
