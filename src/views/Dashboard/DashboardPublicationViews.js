import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import {LightBox} from '../../components/Miscellaneous/LightBox'
import PublicationsCreate from '../../components/Dashboard/LightBox/PublicationsCreate'
import PublicacionsComponent from '../../components/Dashboard/PublicationsComponent'
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
import AddIcon from '@material-ui/icons/Add'

export default function DashboardPublicationsViews(props: any) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <DashboardComponent
        titleChildren="Publicaciones"
        typeBtnOnClick={() => setModalShow(true)}
        typeBtn={<AddIcon />}
        children={
          <PublicacionsComponent/>
        }
      />
      <LightBox
        show={modalShow}
        onHide={() => setModalShow(false)}
        children={
          <PublicationsCreate/>
        }
      />
    </React.Fragment>
  )
}

