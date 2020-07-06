import React from "react"
import MainHead from "./MainHead"
import Dialog from '../components/DialogLogin'
import NotLoggedNav from './NotLoggedNav'
import "./styles/MainMenu.css"

export default function MainMenu() {

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setDrawerIsOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);
  }

  const handleDialogOpen = () => {
    setDialogIsOpen(true);
  }

  const handleDialogClose = () => {
    setDialogIsOpen(false);
  }


  return (
    <React.Fragment>
      <MainHead openDrawer={handleDrawerOpen} openDialog={handleDialogOpen} />
      <NotLoggedNav isDrawerOpen={drawerIsOpen} closeDrawer={handleDrawerClose}/>
      <Dialog isDialogOpen={dialogIsOpen} closeDialog={handleDialogClose}/>
    </React.Fragment>
  )
}
