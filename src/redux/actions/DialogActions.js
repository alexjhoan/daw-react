import { SHOW_DIALOG,
  DISMISS_DIALOG,
  SHOW_DIALOG_EDIT,
  DISMISS_DIALOG_EDIT,
} from '../types/dialogTypes';

export const showDialog = () =>{
  return{
      type:SHOW_DIALOG,
      payload:{
          open: true
      }
  };
};

export const dismissDialog = () => {
  return{
      type:DISMISS_DIALOG,
      payload:{
          open: false
      }
  };
};

export const showDialogEdit = () =>{
  return{
      type:SHOW_DIALOG_EDIT,
      payload:{
          openEdit: true
      }
  };
};

export const dismissDialogEdit = () => {
  return{
      type:DISMISS_DIALOG_EDIT,
      payload:{
          openEdit: false
      }
  };
};
