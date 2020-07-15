import React from 'react'
import PublicacionsComponent from '../../components/Dashboard/PublicationsComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      children={
        <PublicacionsComponent/>
      }
      />

    </React.Fragment>
  )
}
