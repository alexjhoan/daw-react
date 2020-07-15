import React from 'react';
import NavDashboard from './NavDashboard';
import HeadPerfil from './HeadPerfil';
import MainMenu from '../../Layouts/MainMenu'
import BottomNav from '../../Layouts/BottomNav'

export default function DashboardComponnet(props: any) {
  return(
    <React.Fragment>
      <MainMenu/>
      <HeadPerfil/>
      <NavDashboard/>
      {props.children}
      <BottomNav />
    </React.Fragment>
  )
}
