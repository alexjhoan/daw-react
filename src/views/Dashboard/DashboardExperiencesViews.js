import React from 'react'
import ExperiencesComponent from '../../components/Dashboard/ExperiencesComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import AddIcon from '@material-ui/icons/Add'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      titleChildren="Experiencias"
      typeBtn={<AddIcon />}
      children={
        <ExperiencesComponent/>
      }
      />

    </React.Fragment>
  )
}
