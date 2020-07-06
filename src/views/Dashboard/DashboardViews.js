import React from 'react'
import MainMenu from '../../Layouts/MainMenu'
import HeadPerfil from '../../components/Dashboard/HeadPerfil'
import NavDashboard from '../../components/Dashboard/NavDashboard'
import BottomNav from '../../Layouts/BottomNav'

export default function Dashboard(props: any) {
  return (
    <React.Fragment>
      <MainMenu />
      <HeadPerfil />
      <NavDashboard />
      <BottomNav />
    </React.Fragment>
  )
}
