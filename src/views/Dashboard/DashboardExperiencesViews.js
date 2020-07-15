import React from 'react'
import ExperiencesComponent from '../../components/Dashboard/ExperiencesComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      children={
        <ExperiencesComponent/>
      }
      />

    </React.Fragment>
  )
}
