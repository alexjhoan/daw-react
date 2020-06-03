import React, { useState } from "react"
import clsx from 'clsx';
import Headroom from "react-headroom"
import {AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
import "./css/MainMenu.css"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    barRoot:{
      backgroundColor: fade(theme.palette.common.white, 0.7),
    },
    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0),
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1.5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5,
      right: 0,

    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
          backgroundColor: fade(theme.palette.common.white, 1),
          borderRadius: '25em',
        },
      },
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

export default function MainMenu() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    drawerIsOpen: false,
  });

  const handleDrawerOpen = () => {
    setState({ drawerIsOpen: true });
  };

  const handleDrawerClose = () => {
    setState({ drawerIsOpen: false });
  };

  return (
    <React.Fragment>
    <Headroom>
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
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <a href="#" className="nav-profile" style={{backgroundImage: "url(" + user + ")"}}></a>
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
    <Drawer anchor='right' variant="persistent" open={state.drawerIsOpen}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        <ListItem>drawer content</ListItem>
        <ListItem>drawer content</ListItem>
        <ListItem>drawer content</ListItem>
        <ListItem>drawer content</ListItem>
        <ListItem>drawer content</ListItem>
      </List>
    </Drawer>
    </React.Fragment>
  )
}
