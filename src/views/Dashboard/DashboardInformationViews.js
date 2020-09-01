import React from 'react'
import {Button,Modal} from 'react-bootstrap'

import FirstUser from '../../components/Dashboard/FirstUser'
import AboutMeComponent from '../../components/Dashboard/AboutMeComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import CreateIcon from '@material-ui/icons/Create'
//redux
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { showDialogEdit, dismissDialogEdit } from '../../redux/Actions/DialogActions'

export default function DashboardInformationViews(props: any) {
  const disptach = useDispatch();

  let impComponent
  let titleChildren
  if (true) {
    impComponent = <FirstUser />
    titleChildren = ""
  } else {
    impComponent = <AboutMeComponent/>
    titleChildren = "Informacion"
  }

  return (
    <React.Fragment>
      <DashboardComponent
        titleChildren={titleChildren}
        typeBtnOnClick={() => disptach(showDialogEdit())}
        typeBtn={<CreateIcon />}
        hiddenButton={true}
        children={impComponent}
      />

    </React.Fragment>
  )
}
