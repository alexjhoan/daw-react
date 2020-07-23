export const SHOW_DIALOG = 'SHOW_SUCCESS_DIALOG'
export const DISMISS_DIALOG = 'DISMISS_DIALOG'
export const SHOW_DIALOG_EDIT = 'SHOW_DIALOG_EDIT'
export const DISMISS_DIALOG_EDIT = 'DISMISS_DIALOG_EDIT'

export interface Dialog {
    open: boolean,
    openEdit: boolean

}


interface ShowSuccessDialog {
    type:  typeof SHOW_DIALOG,
    payload: Dialog
}

interface DismissDialog {
    type: typeof DISMISS_DIALOG,
    payload: Dialog
}

interface ShowSuccessDialogEdit {
    type:  typeof SHOW_DIALOG_EDIT,
    payload: Dialog
}

interface DismissDialogEdit {
    type: typeof DISMISS_DIALOG_EDIT,
    payload: Dialog
}


export type DialogActionTypes =  ShowSuccessDialog | DismissDialog

export type DialogEditActionTypes = ShowSuccessDialogEdit | DismissDialogEdit
