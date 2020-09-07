import React from "react"
import {Button} from "react-bootstrap"
import NavDashboard from "./NavDashboard"
import HeadPerfil from "./HeadPerfil"
import MainMenu from "../../Layouts/MainMenu"
import BottomNav from "../../Layouts/BottomNav"

export default function DashboardComponnet(props: any) {
  let buttonHidden
  if (props.hiddenBtn) {
    buttonHidden = "d-none"
  }
  return (
    <React.Fragment>
      <MainMenu />
      <HeadPerfil />
      <NavDashboard />
      <div id="about_me" className="container-fluid">
        <div className="row">
          <div className="col-12 titlePublication">
            <h1 className="text-uppercase text_gray">{props.titleChildren}</h1>
            <Button
              className={`DawBtn btnAdd ${buttonHidden}`}
              onClick={props.typeBtnOnClick}>
              {props.typeBtn}
            </Button>
          </div>
        </div>
        {props.children}
      </div>
      <BottomNav />
    </React.Fragment>
  )
}
