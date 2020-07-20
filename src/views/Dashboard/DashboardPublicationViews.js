import React from 'react'
import PublicacionsComponent from '../../components/Dashboard/PublicationsComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import AddIcon from '@material-ui/icons/Add'

export default function DashboardInformationViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      titleChildren="Publicaciones"
      typeBtn={<AddIcon />}
      children={
        <PublicacionsComponent/>
      }
      />

    </React.Fragment>
  )
}
