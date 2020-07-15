import React from 'react'
import AboutMeComponent from '../../components/Dashboard/AboutMeComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      children={
        <AboutMeComponent/>
      }
      />

    </React.Fragment>
  )
}
