import { SHOW_DIALOG,
  DISMISS_DIALOG,
  SHOW_DIALOG_EDIT,
  DISMISS_DIALOG_EDIT,
  Dialog
} from '../types/dialogTypes';

const initialState: Dialog = {
  open: false,
  openEdit: false,

}


export default function dialogReducer  (state=initialState, action:any){
  switch(action.type){
      case SHOW_DIALOG:
          return {
              ...state,
              ...action.payload
          }
      case DISMISS_DIALOG:
          return{
              ...state,
              ...action.payload
          }
      case SHOW_DIALOG_EDIT:
          return {
              ...state,
              ...action.payload
          }
      case DISMISS_DIALOG_EDIT:
          return{
              ...state,
              ...action.payload
          }

      default:
          return state
  };

}
