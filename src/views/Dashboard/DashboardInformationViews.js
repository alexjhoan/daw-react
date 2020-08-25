import React from 'react'
import {Button,Modal} from 'react-bootstrap'

import AboutMeComponent from '../../components/Dashboard/AboutMeComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import CreateIcon from '@material-ui/icons/Create'
//redux
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { showDialogEdit, dismissDialogEdit } from '../../redux/Actions/DialogActions'

export default function DashboardInformationViews(props: any) {
  const disptach = useDispatch();


  return (
    <React.Fragment>
      <DashboardComponent
        titleChildren="Informacion"
        typeBtnOnClick={() => disptach(showDialogEdit())}
        typeBtn={<CreateIcon />}
        children={
          <AboutMeComponent/>
        }
      />

    </React.Fragment>
  )
}
