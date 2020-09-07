import React from "react"
import {Link, useHistory} from "react-router-dom"
import {logout} from "../services/AuthService"
import {
  // AppBar,
  // Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  // List,
  // Divider,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Avatar
} from "@material-ui/core"
import {createStyles, fade, Theme, makeStyles} from "@material-ui/core/styles"
// import ChevronRightIcon from "@material-ui/icons/ChevronRight"
// import InboxIcon from "@material-ui/icons/MoveToInbox"
import CloseIcon from "@material-ui/icons/Close"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"

//import logo from "../assets/images/logo.svg"
//import search from "../assets/images/icons/i_search.svg"
// import userLight from "../assets/images/icons/i_user_lightgray.svg"
import manifest from "../assets/images/icons/i_manifest.svg"
import frequentQuestions from "../assets/images/icons/i_frequent_questions.svg"
import privacy from "../assets/images/icons/i_privacy.svg"
import inviteFriends from "../assets/images/icons/i_invite_friends.svg"
import feedback from "../assets/images/icons/i_feedback.svg"
import twitter from "../assets/images/icons/i_twitter.svg"
import facebook from "../assets/images/icons/i_facebook.svg"
import instagram from "../assets/images/icons/i_instagram.svg"
import register from "../assets/images/icons/i_register.svg"

import mapWhite from "../assets/images/icons/i_map_white.svg"
import user from "../assets/images/icons/i_user_darkgray.svg"
import information from "../assets/images/icons/i_information2.svg"
import publication from "../assets/images/icons/i_book_small.svg"
import experience from "../assets/images/icons/i_experience.svg"
import forum from "../assets/images/icons/i_forum.svg"
import list from "../assets/images/icons/i_list.svg"
import like from "../assets/images/icons/i_like.svg"
import travelingnets from "../assets/images/icons/i_travelingnets.svg"
import coupons from "../assets/images/icons/i_coupons.svg"
import reservation from "../assets/images/icons/i_reservation.svg"
import map from "../assets/images/icons/i_mapMarkerGray.svg"
import configuration from "../assets/images/icons/i_configuration.svg"
import shared from "../assets/images/icons/i_sharedDarkGray.svg"
import singout from "../assets/images/icons/i_off.svg"
import security from "../assets/images/icons/i_security.svg"
import rules from "../assets/images/icons/i_rules.svg"
import cookies from "../assets/images/icons/i_cookies.svg"
import {useDispatch} from "react-redux"

export default function LoggedNav(props: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      barRoot: {
        backgroundColor: fade(theme.palette.common.white, 0.7)
      },
      root: {
        flexGrow: 1
      },

      menuButton: {
        marginRight: theme.spacing(2)
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0),
        "&:focus": {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto"
        }
      },
      searchIcon: {
        padding: theme.spacing(0, 1.5),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
        right: 0
      },
      inputRoot: {
        color: "inherit"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("xs")]: {
          width: "0ch",
          "&:focus": {
            width: "20ch",
            backgroundColor: fade(theme.palette.common.white, 1),
            borderRadius: "25em"
          }
        }
      },
      list: {
        width: 250
      },
      fullList: {
        width: "auto"
      }
    })
  )
  const classes = useStyles
  const dispatch = useDispatch()
  const history = useHistory()

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  let userImg: any
  const localStg = JSON.parse(localStorage.getItem("itemsLocal") || "{}")

  if (localStg) {
    if (localStg.picture) {
      userImg = localStg.picture
    } else {
      userImg =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbJyc6sWxtjw88Hy9zvPOVo_W7xyivpoDSWPGFrecavQYI057T"
    }
  }

  return (
    <Drawer anchor="right" variant="persistent" open={props.isDrawerOpen}>
      <IconButton onClick={props.closeDrawer} className="close closeDrawerNav">
        <CloseIcon />
      </IconButton>
      <div className="top_profile top_profileLogged">
        <div>
          <Avatar alt="Ana" className="mb-0" src={userImg} />
          <p>Usuario</p>
          <address>
            <img alt="map" src={mapWhite} /> España, Madrid
          </address>
        </div>
      </div>
      <div className="linksMenu">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography>
              <img alt="manifest" src={user} />
              Mi perfil
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/dashboard/aboutme">
              <img alt="information" src={information} />
              Información
            </Link>
            <a>
              <img alt="publication" src={publication} />
              Publicaciones
            </a>
            <a>
              <img alt="experience" src={experience} />
              Experiencias
            </a>
            <a>
              <img alt="forum" src={forum} />
              Foro
            </a>
            <a>
              <img alt="list" src={list} />
              Listas
            </a>
            <a>
              <img alt="like" src={like} />
              Favoritos
            </a>
            <Link to="/dashboard/travelingnetwork">
              <img alt="travelingnets" src={travelingnets} />
              Redes Viajeras
            </Link>
            <a>
              <img alt="coupons" src={coupons} />
              Cupones
            </a>
            <a>
              <img alt="reservation" src={reservation} />
              Reservas
            </a>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography>
              <img alt="map" src={map} />
              Cerca de mi
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <a>
              <img alt="publication" src={publication} />
              Publicaciones
            </a>
            <a>
              <img alt="experience" src={experience} />
              Experiencias
            </a>
          </AccordionDetails>
        </Accordion>
        <a href="#sharedPerfil">
          <img alt="shared" src={shared} />
          Compartir mi perfil
        </a>
        <a href="#sharedPerfil">
          <img alt="configuration" src={configuration} />
          Configuración
        </a>
        <button
          onClick={() => {
            logout(history, dispatch)
          }}>
          <img alt="singout" src={singout} />
          Cerrar sesión
        </button>
        <div className="divider"></div>
        <a href="#manifiesto">
          <img alt="manifest" src={manifest} />
          Manifiesto
        </a>
        <a href="#pricing">
          <img alt="frequentQuestions" src={frequentQuestions} />
          Preguntas Frecuentes
        </a>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header">
            <Typography>
              <img alt="privacy" src={privacy} />
              Términos y condiciones
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <a>
              <img alt="security" src={security} />
              Políticas y <br />
              protección de datos
            </a>
            <a>
              <img alt="rules" src={rules} />
              Condiciones generales
            </a>
            <a>
              <img alt="cookies" src={cookies} />
              Políticas de cookies
            </a>
          </AccordionDetails>
        </Accordion>
        <a href="#pricing">
          <img alt="inviteFriends" src={inviteFriends} />
          Invitar a amigos
        </a>
        <a href="#pricing">
          <img alt="feedback" src={feedback} />
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
