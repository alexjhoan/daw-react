import React from "react"
import {Link} from "react-router-dom"
import { Tabs, Tab, Nav, Row, Col } from 'react-bootstrap'
import "../assets/Login.css"
import ImgLogo from "../assets/images/logo.svg"
import IconGoogle from "../assets/images/icons/i_google.svg"
import IconFacebook from "../assets/images/icons/i_facebook.png"
import MailIcon from '@material-ui/icons/Mail'
import LockOpenIcon from '@material-ui/icons/LockOpen'

export default function Login() {
  return (
    <div className="container-fluid content-social-auth">
      <div className="row">
        <div className="col-12 header-modal-inter">
          <Link to="/">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </Link>
        </div>
        <div className="col-12 body-modal-inter">
          <div className="logo-text-lightbox d-flex justify-content-center align-items-center">
            <img src={ImgLogo} alt="logo Dreamaway" />
            <p>
              DREAM<span className="text-yellow">AWAY</span>
              <br />
              <span>TRAVEL</span>
            </p>
          </div>
          <div className="info-auth">
            <p>
              Al registrarte, estas aceptando nuestros
              <a href="#"> Términos de uso</a> y
              <a href="#"> Política de privacidad</a>
            </p>
          </div>
          <div className="body-social-auth mx-auto">
            <Tab.Container defaultActiveKey="login">
              <Nav>
                <div className="nav nav-tabs d-flex flex-row justify-content-center w-100" id="nav-tab" role="tablist">
                  <Nav.Link eventKey="register" id="nav-signup-tab" className="nav-item nav-link w-50 text-center">
                    Registrarse
                  </Nav.Link>
                  <Nav.Link eventKey="login" id="nav-signup-tab" className="nav-item nav-link w-50 text-center">
                    Iniciar Sesión
                  </Nav.Link>
                </div>
              </Nav>
              <Tab.Content className="tab-content" id="nav-tabContent">
                <Tab.Pane eventKey="register"
                  className="tab-pane fade"
                  id="nav-signup"
                  role="tabpanel"
                  aria-labelledby="nav-signup-tab"
                  >
                  <p className="text-center mb-0">Con tus redes sociales</p>
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
                  </div>
                  <form
                    action="."
                    method="POST"
                    className="form col-md-12 center-block px-0 pt-2">
                    <div className="form-group py-2 mb-0">
                      <label htmlFor="InputEmail2" className="w-100">
                        <i><MailIcon /></i>
                        <input
                          type="email"
                          className="form-control"
                          id="InputEmail2"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="Correo electrónico"
                        />
                      </label>
                    </div>
                    <div className="form-group py-2 mb-0">
                      <label htmlFor="InputPassword2" className="w-100">
                        <i><LockOpenIcon /></i>
                        <input
                          type="password"
                          className="form-control"
                          id="InputPassword2"
                          name="password1"
                          placeholder="Contraseña"
                        />
                      </label>
                    </div>
                    <div className="form-group py-2 mb-0">
                      <label htmlFor="InputPassword-repeat" className="w-100">
                        <i><LockOpenIcon /></i>
                        <input
                          type="password"
                          className="form-control"
                          id="InputPassword-repeat"
                          name="password2"
                          placeholder="Repita contraseña"
                        />
                      </label>
                    </div>
                    <div className="form-group form-check py-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="not_receive_mail"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="not_receive_mail">
                        No deseo recibir ofertas y comunicaciones comerciales de
                        Dreamaway Travel por correo electrónico.
                      </label>
                    </div>
                    <div className="row py-3">
                      <div
                        className="col-12 d-flex flex-column align-items-center"
                        id="links">
                        <button
                          type="submit"
                          name="submit"
                          value="sign_up"
                          className="btn bg-yellow">
                          Crear Cuenta<i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </Tab.Pane>
                <Tab.Pane eventKey="login"
                  className="tab-pane fade"
                  id="nav-login">
                  <p className="text-center mb-0">Con tus redes sociales</p>
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
                  </div>
                  <form
                    action="."
                    method="POST"
                    className="form col-md-12 center-block px-0 pt-2">
                    <div className="form-group py-2 mb-0">
                      <label htmlFor="InputEmail1" className="w-100">
                        <i><MailIcon /></i>
                        <input
                          type="email"
                          className="form-control"
                          id="InputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="Nombre de usuario o email"
                        />
                      </label>
                    </div>
                    <div className="form-group py-2 mb-0">
                      <label htmlFor="InputPassword1" className="w-100">
                        <i><LockOpenIcon /></i>
                        <input
                          type="password"
                          className="form-control"
                          id="InputPassword1"
                          name="password"
                          placeholder="contraseña"
                        />
                      </label>
                    </div>
                    <div className="form-group form-check py-2 mb-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="recorder_users"
                      />
                      <label className="form-check-label" htmlFor="recorder_user">
                        Recordarme
                      </label>
                    </div>
                    <a
                      href="{% url 'password_reset' %}"
                      className="pb-3 d-block text-right text-yellow">
                      ¿Olvidaste la contraseña?
                    </a>
                    <div className="row py-3">
                      <div
                        className="col-12 d-flex flex-column align-items-center"
                        id="links">
                        <button
                          type="submit"
                          className="btn bg-yellow"
                          name="submit"
                          value="sign_in">
                          Iniciar<i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  )
}
