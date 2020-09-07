import React from 'react'
import {Grid, Box, Typography} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import UserExpert from "../../assets/images/icons/i_userExpert-yellow.svg"
import UserAssociation from "../../assets/images/icons/i_userAssociation-yellow.svg"
import UserTraveler from "../../assets/images/icons/i_userTravel-yellow.svg"
import MapMarker from "../../assets/images/icons/i_mapMarkerGray.svg"
import UserDefault from "../../assets/images/icons/user_default.jpg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box:{
      marginTop:"20px"
    },
    boxImage:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingRight: "10px"
    },
    cardUser:{
      height: '200px',
      color: "var(--daw-darkGray)"
    },
    img: {
      maxWidth: '100%',
      maxHeight: '200px'
    },
    userGroup: {
      height: '22px',
      marginRight: '6px',
      transform: 'translateY(-5px)'
    },
    userMapMarker: {
      height: '20px',
      marginRight: '6px',
      marginLeft: '22px',
      transform: 'translateY(-5px)'
    },
    boxAbout:{
      display: "flex",
      alignItems: "center",
      height: "120px",
      marginRight: "15px"
    },
    boxText:{
      borderLeft: "solid 2px var(--daw-yellow)",
      paddingLeft: "10px",
      lineHeight: "25px"
    }
  })
)

export function CardUser(props:any) {
  const classes = useStyles();

  let userImg: any
  let imgGroups: any

  if (props.userImg) {
    userImg = props.userImg
  } else {
    userImg = UserDefault
  }
  if (props.groups == "Experto") {
    imgGroups = UserExpert
  } else if (props.groups == "Asociacion") {
    imgGroups = UserAssociation
  } else {
    imgGroups = UserTraveler
  }

  return (
    <Grid container className={classes.cardUser}>
      <Grid item xs={5} className={classes.boxImage}>
        <img className={classes.img} src={userImg} alt="" />
      </Grid>
      <Grid item xs={7} className={classes.box}>
        <Typography variant="h6" gutterBottom>
          <img className={classes.userGroup} src={imgGroups} alt="" />
          {props.user}
        </Typography>
        <Typography variant="subtitle2">
          <img className={classes.userMapMarker} src={MapMarker} alt="" />
          {props.ubication}
        </Typography>
        <Box className={classes.boxAbout}>
          <Typography variant="body1" className={classes.boxText}>
            {props.userAbout}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  )
}

export function ListCardUser(props:any) {
   const DatalistUsersImp = props.data.map((a:any, i:any) => {
    return(
      <CardUser
        key={i}
        userImg={a.picture}
        groups={a.groups}
        user={a.user}
        ubication={a.ubication}
        userAbout={a.userAbout}
      />
    )
  })
  return(
    DatalistUsersImp
  )
}
