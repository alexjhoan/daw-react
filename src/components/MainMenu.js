import React from "react"
import { Link } from "react-router-dom"
import Headroom from "react-headroom"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from "@material-ui/core"
import {createStyles, fade, Theme, makeStyles} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import CloseIcon from "@material-ui/icons/Close"

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
import twitter from "../assets/images/icons/i_twitter.svg"
import facebook from "../assets/images/icons/i_facebook.svg"
import instagram from "../assets/images/icons/i_instagram.svg"
import register from "../assets/images/icons/i_register.svg"

import "./css/MainMenu.css"

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

export default function MainMenu() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    drawerIsOpen: false
  })

  const handleDrawerOpen = () => {
    setState({drawerIsOpen: true})
  }

  const handleDrawerClose = () => {
    setState({drawerIsOpen: false})
  }

  return (
    <React.Fragment>
      <Headroom className="header">
        <div className={classes.root}>
          <AppBar position="static" className={classes.barRoot}>
            <Toolbar>
              <div className="logo-text d-flex justify-content-center align-items-center">
                <img src={logo} className="img-fluid" />
                <Typography variant="body1" noWrap>
                  DREAM<span className="textYellow">AWAY</span>
                  <br />
                  <span>TRAVEL</span>
                </Typography>
              </div>
              <div className="right-menu">
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Buscar…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{"aria-label": "search"}}
                  />
                </div>
                <Link to="/login" className="nav-profile" style={{backgroundImage: "url(" + user + ")"}}></Link>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Headroom>
      <Drawer anchor="right" variant="persistent" open={state.drawerIsOpen}>
        <IconButton onClick={handleDrawerClose} className="close">
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
    </React.Fragment>
  )
}
