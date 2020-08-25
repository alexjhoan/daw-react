import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import {Tab, Nav} from "react-bootstrap"
import IconGoogle from "../assets/images/icons/i_google.svg"
import IconFacebook from "../assets/images/icons/i_facebook.png"
// Components
import RegisterForm from "../components/RegisterForm"
import LoginForm from "../components/LoginForm"
import "../assets/Login.css"

export default function Modal(props: any) {

  return (
    <div>
      <Dialog
        open={props.isDialogOpen}
        onClose={props.closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={'body'}
      >
        <Button
          onClick={props.closeDialog}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
        <div className="body-social-auth">
          <Tab.Container defaultActiveKey="login">
            <Nav>
              <div
                className="nav nav-tabs d-flex flex-row justify-content-center w-100"
                id="nav-tab"
                role="tablist">
                <Nav.Link
                  eventKey="register"
                  id="nav-signup-tab"
                  className="nav-item nav-link w-50 text-center">
                  Registrarse
                </Nav.Link>
                <Nav.Link
                  eventKey="login"
                  id="nav-signup-tab"
                  className="nav-item nav-link w-50 text-center">
                  Iniciar Sesión
                </Nav.Link>
              </div>
            </Nav>
            <Tab.Content className="tab-content" id="nav-tabContent">
              <Tab.Pane
                eventKey="register"
                className="tab-pane fade"
                id="nav-signup"
                role="tabpanel"
                aria-labelledby="nav-signup-tab">
                {/*<p className="text-center mb-0">Con tus redes sociales</p>
                <span className="separator mx-auto w-100 text-center d-block">
                  o
                </span>
                <div className="container-btn-social-login d-flex flex-row align-items-center justify-content-between mt-3">
                  <a href="">
                    <button type="button" className="btn btn-google">
                      <img src={IconGoogle} alt="" width="20" /> Google
                    </button>
                  </a>
                  <a href="">
                    <button type="button" className="btn btn-facebook">
                      <img src={IconFacebook} alt="" width="20" /> Facebook
                    </button>
                  </a>
                </div>*/}
                <RegisterForm />
              </Tab.Pane>
              <Tab.Pane
                eventKey="login"
                className="tab-pane fade"
                id="nav-login">
                {/*<p className="text-center mb-0">Con tus redes sociales</p>
                <span className="separator mx-auto w-100 text-center d-block">
                  o
                </span>
                <div className="container-btn-social-login d-flex flex-row align-items-center justify-content-between mt-3">
                  <a href="">
                    <button type="button" className="btn btn-google">
                      <img src={IconGoogle} alt="" width="20" /> Google
                    </button>
                  </a>
                  <a href="">
                    <button type="button" className="btn btn-facebook">
                      <img src={IconFacebook} alt="" width="20" /> Facebook
                    </button>
                  </a>
                </div>*/}
                <LoginForm />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="info-auth">
          <p>
            Al registrarte, estas aceptando nuestros
            <a href="#"> Términos de uso</a> y
            <a href="#"> Política de privacidad</a>
          </p>
        </div>
      </Dialog>
    </div>
  );
}
