import React from 'react'
import {Button, Tab, Row, Col, Nav, Modal} from 'react-bootstrap'
import UserData from './UserData'
import UserInterests from './UserInterests'
import '../../Styles/Dashboard/LightBox/UserInformations.css'

export default function PublicationsCreate(props: any) {
  return (
    <Tab.Container id="UserInfor" defaultActiveKey="first">
      <Row className="UserInformations">
        <Col sm={3} className="colUserNav">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="linksInformations" eventKey="first">Información Básica</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="linksInformations" eventKey="second">Intereses y Especialidades</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
               <UserData fetchInfoUser={props.fetchInfoUser} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UserInterests />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}
