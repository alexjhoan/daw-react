export const SHOW_SUCCESS_SNACKBAR = 'SHOW_SUCCESS_SNACKBAR'
export const SHOW_ERROR_SNACKBAR = 'SHOW_ERROR_SNACKBAR'

export const DISMISS_SNACKBAR = 'DISMISS_SNACKBAR'

export interface SnackBar {
    open: boolean,
    snackbarMessage: String,
    styles: object
}

interface ShowSuccessSnackBar {
    type:  typeof SHOW_SUCCESS_SNACKBAR,
    payload: SnackBar
}

interface ShowErrorSnackBar{
    type: typeof SHOW_ERROR_SNACKBAR,
    payload: SnackBar
}

interface DismissSnackBar {
    type: typeof DISMISS_SNACKBAR,
    payload: SnackBar
}

export type SnackBarActionTypes =  ShowSuccessSnackBar| ShowErrorSnackBar | DismissSnackBar
