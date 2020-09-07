import React from 'react'
import TravelingNetwork from '../../components/Dashboard/TravelingNetworkComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import AddIcon from '@material-ui/icons/Add'

export default function DashboardTravelingNetworkViews(props: any) {
  return (
    <React.Fragment>
      <DashboardComponent
      titleChildren="Red Viajera"
      hiddenBtn={true}
      children={
        <TravelingNetwork/>
      }
      />

    </React.Fragment>
  )
}
