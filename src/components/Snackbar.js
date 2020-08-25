import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import { Icon, styled } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { clearSnackbar } from '../redux/Actions/SnackbarActions'
import { RootState } from '../redux/store';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';



const ShowSnackbar = () => {
    const dispatch = useDispatch();
    const snackbar = useSelector((state: RootState) => state)
    function handleClose() {
        dispatch(clearSnackbar());
   }


  return (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    open={snackbar.alert.open}
    onClose={handleClose}
    autoHideDuration={snackbar.alert.duration}
    message={
      <span id="client-snackbar">
        {snackbar.alert.snackbarMessage}
      </span>
    }
    action={[
      <IconButton
        key="close"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseRoundedIcon/>
      </IconButton>
    ]}
  />
  );
}

export default ShowSnackbar;
