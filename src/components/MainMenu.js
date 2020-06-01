import React from "react"
import {Container, Row, Col, Form, Image, Nav, Navbar, Figure} from "react-bootstrap"
import Headroom from "react-headroom"
import logo from "../assets/images/logo.svg"
import search from "../assets/images/icons/i_search.svg"
import user from "../assets/images/icons/i_user.svg"
import userLight from "../assets/images/icons/i_user_lightgray.svg"
import manifest from "../assets/images/icons/i_manifest.svg"
import rules from "../assets/images/icons/i_rules.svg"
import frequentQuestions from "../assets/images/icons/i_frequent_questions.svg"
import privacy from "../assets/images/icons/i_privacy.svg"
import inviteFriends from "../assets/images/icons/i_invite_friends.svg"
import feedback from "../assets/images/icons/i_feedback.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import "./css/MainMenu.css"

export default function MainMenu() {
  return (
    <Headroom>
      <header className="head-menu">
        <Container fluid className="p-0 sticky-top-menu menu-top">
          <Row className="m-0">
            <Col xs={12} md={12} className="px-md-0">
              <Navbar expand={false} variant="light" bg="light" className="navbar-custom">
                <div className="left-menu">
                  <Navbar.Brand href="#">
                    <div className="logo-text-lightbox d-flex justify-content-center align-items-center">
                      <Image src={logo} fluid />
                      <p>
                        DREAM<span className="textYellow">AWAY</span>
                        <br />
                        <span>TRAVEL</span>
                      </p>
                    </div>
                  </Navbar.Brand>
                </div>
                <div className="right-menu right-menu-user-authenticated">
                  <Form className="search">
                    <Form.Control type="seacrh" placeholder="Buscar" />
                    <Image className="img-search" src={search} alt="search" />
                  </Form>
                  <Nav.Link href="#" className="nav-profile" style={{backgroundImage: "url(" + user + ")"}}></Nav.Link>
                  <Navbar.Toggle aria-controls="navCollapse-profile" className="border-0" />
                  <Navbar.Collapse id="navCollapse-profile">
                    <Nav className="mr-auto">
                      <Navbar.Toggle aria-controls="navCollapse-profile" className="border-0" />
                      <div className="top_profile d-flex flex-column align-items-center justify-content-center">
                        <Figure className="mb-3">
                          <Figure.Image width={30} height={33.5} alt="user" className="mb-0" src={userLight} />
                        </Figure>
                        <Nav.Link href="#" className="btn bg-yellow mb-2">
                          Acceder
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Nav.Link>
                      </div>
                      <div className="linksMenu">
                        <Nav.Link href="#manifiesto">
                          <Figure>
                            <Figure.Image width={18} alt="manifest" src={manifest} />
                          </Figure>
                          Manifiesto
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          <Figure>
                            <Figure.Image width={18} alt="rules" src={rules} />
                          </Figure>
                          Reglas generales
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          <Figure>
                            <Figure.Image width={18} alt="frequentQuestions" src={frequentQuestions} />
                          </Figure>
                          Preguntas Frecuentes
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          <Figure>
                            <Figure.Image width={18} alt="privacy" src={privacy} />
                          </Figure>
                          Políticas de privacidad <br />y uso de datos
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          <Figure>
                            <Figure.Image width={18} alt="inviteFriends" src={inviteFriends} />
                          </Figure>
                          Invitar a amigos
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          <Figure>
                            <Figure.Image width={18} alt="feedback" src={feedback} />
                          </Figure>
                          Feedback
                        </Nav.Link>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    </Headroom>
  )
}
