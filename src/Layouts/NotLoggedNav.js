import React from "react"
import { Link } from "react-router-dom"
import {
  IconButton,
  Drawer,
  Avatar
} from "@material-ui/core"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import CloseIcon from "@material-ui/icons/Close"
import userLight from "../assets/images/icons/i_user_lightgray.svg"
import manifest from "../assets/images/icons/i_manifest.svg"
import rules from "../assets/images/icons/i_rules.svg"
import frequentQuestions from "../assets/images/icons/i_frequent_questions.svg"
import privacy from "../assets/images/icons/i_privacy.svg"
import inviteFriends from "../assets/images/icons/i_invite_friends.svg"
import feedback from "../assets/images/icons/i_feedback.svg"
import twitter from "../assets/images/icons/i_twitter.svg"
import facebook from "../assets/images/icons/i_facebook.svg"
import instagram from "../assets/images/icons/i_instagram.svg"
import register from "../assets/images/icons/i_register.svg"

export default function notLoggedNav(props:any) {

  return (
    <Drawer anchor="right" variant="persistent" open={props.isDrawerOpen}>
      <IconButton onClick={props.closeDrawer} className="close">
        <CloseIcon />
      </IconButton>
      <div className="top_profile d-flex flex-column align-items-center justify-content-center">
        <Avatar alt="user" className="mb-0" src={userLight} />
        <Link to="/login" className="btn bg-yellow mb-2">
          Acceder
          <ChevronRightIcon />
        </Link>
      </div>
      <div className="linksMenu">
        <a href="#manifiesto">
          <figure>
            <img alt="manifest" src={manifest} />
          </figure>
          Manifiesto
        </a>
        <a href="#pricing">
          <figure>
            <img alt="rules" src={rules} />
          </figure>
          Reglas generales
        </a>
        <a href="#pricing">
          <figure>
            <img alt="frequentQuestions" src={frequentQuestions} />
          </figure>
          Preguntas Frecuentes
        </a>
        <a href="#pricing">
          <figure>
            <img alt="privacy" src={privacy} />
          </figure>
          Políticas de privacidad <br />y uso de datos
        </a>
        <a href="#pricing">
          <figure>
            <img alt="inviteFriends" src={inviteFriends} />
          </figure>
          Invitar a amigos
        </a>
        <a href="#pricing">
          <figure>
            <img alt="feedback" src={feedback} />
          </figure>
          Feedback
        </a>
      </div>
      <div className="footer_nav">
        <p className="text-yellow">
          <img src={register} alt="register" />
          Dreamaway, 2020
        </p>
        <p className="small">Comunidad Viajera</p>
        <ul className="d-flex flex-row aling-items-center justify-content-center">
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </Drawer>
  )
}
