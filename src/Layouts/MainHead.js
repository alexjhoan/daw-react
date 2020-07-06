import React from 'react'
import {createStyles, fade, Theme, makeStyles} from "@material-ui/core/styles"
import Headroom from "react-headroom"
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import logo from "../assets/images/logo.svg"
import user from "../assets/images/icons/i_user.svg"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core"

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

export default function MainHead(props:any) {
  const classes = useStyles()
  return (
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
              <Button onClick={props.openDialog} className="nav-profile" style={{backgroundImage: "url(" + user + ")"}}></Button>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={props.openDrawer}>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Headroom>
  )
}
