import React from 'react'
import MainMenu from '../Layouts/MainMenu'
import LandingHome from "../components/LandingHome"
import BottomNav from '../Layouts/BottomNav'

export default function Landing() {
  return (
    <React.Fragment>
      <MainMenu />
      <LandingHome />
      <BottomNav />
    </React.Fragment>
  )
}
