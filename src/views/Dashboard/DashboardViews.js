import React from 'react'
import MainMenu from '../../Layouts/MainMenu'
import HeadPerfil from '../../components/Dashboard/HeadPerfil'
import NavDashboard from '../../components/Dashboard/NavDashboard'
import AboutMe from '../../components/Dashboard/AboutMe'
import BottomNav from '../../Layouts/BottomNav'

export default function Dashboard(props: any) {
  return (
    <React.Fragment>
      <MainMenu />
      <HeadPerfil />
      <NavDashboard />
      <AboutMe />
      <BottomNav />
    </React.Fragment>
  )
}
