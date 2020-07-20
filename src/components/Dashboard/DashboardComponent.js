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
      <div id="about_me" className="container-fluid">
        <div className="row">
          <div className="col-12 titlePublication">
            <h1 className="text-uppercase text_gray">{props.titleChildren}</h1>
            <button className="DawBtn btnAdd">
              {props.typeBtn}
            </button>
          </div>
        </div>
        {props.children}
      </div>
      <BottomNav />
    </React.Fragment>
  )
}
