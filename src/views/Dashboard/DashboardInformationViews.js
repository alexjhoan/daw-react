import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import {LightBox} from '../../components/Miscellaneous/LightBox'
import UserInformations from '../../components/Dashboard/LightBox/UserInformations'
import AboutMeComponent from '../../components/Dashboard/AboutMeComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import CreateIcon from '@material-ui/icons/Create'

export default function DashboardInformationViews(props: any) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <DashboardComponent
        titleChildren="Informacion"
        typeBtnOnClick={() => setModalShow(true)}
        typeBtn={<CreateIcon />}
        children={
          <AboutMeComponent/>
        }
      />
      <LightBox
        show={modalShow}
        onHide={() => setModalShow(false)}
        children={
          <UserInformations/>
        }
      />
    </React.Fragment>
  )
}
