import React from 'react'
import MainMenu from '../components/MainMenu'
import LandingHome from "../components/LandingHome"
import BottomNav from '../components/BottomNav'

export default function Landing() {
  return (
    <React.Fragment>
      <MainMenu />
      <LandingHome />
      <BottomNav />
    </React.Fragment>
  )
}
