import React from "react"
import MainHead from "./MainHead"
import Dialog from '../components/DialogLogin'
import NotLoggedNav from './NotLoggedNav'
import LoggedNav from './LoggedNav'
import { RootState } from '../redux/store'
import {useDispatch, useSelector } from 'react-redux'
import { dismissDialog, showDialog } from '../redux/Actions/DialogActions'
import "./styles/MainMenu.css"

export default function MainMenu() {
  const dispatch = useDispatch();
  const open= useSelector((state: RootState) => state);
  const userLogged = localStorage.getItem('token')
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)
  // const [dialogIsOpen, setDialogIsOpen] = React.useState(false)


  const handleDrawerOpen = () => {
    setDrawerIsOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);

  }

  const handleDialogOpen = () => {
    // setDialogIsOpen(true);
    dispatch(showDialog());
  }

  const handleDialogClose = () => {
    // setDialogIsOpen(false);
    dispatch(dismissDialog());
  }

  let menuLogged: any
  if ( !userLogged ) {
    menuLogged = <NotLoggedNav openDialog={handleDialogOpen} isDrawerOpen={drawerIsOpen} closeDrawer={handleDrawerClose}/>
  } else {
    menuLogged = <LoggedNav isDrawerOpen={drawerIsOpen} closeDrawer={handleDrawerClose}/>
  }

  return (
    <React.Fragment>
      <MainHead openDrawer={handleDrawerOpen} openDialog={handleDialogOpen} />
      {menuLogged}
      <Dialog isDialogOpen={open.dialog.open} closeDialog={handleDialogClose}/>
    </React.Fragment>
  )
}
