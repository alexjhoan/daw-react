import React from 'react'
import AboutMeComponent from '../../components/Dashboard/AboutMeComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import CreateIcon from '@material-ui/icons/Create'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      titleChildren="Informacion"
      typeBtn={<CreateIcon />}
      children={
        <AboutMeComponent/>
      }
      />

    </React.Fragment>
  )
}
