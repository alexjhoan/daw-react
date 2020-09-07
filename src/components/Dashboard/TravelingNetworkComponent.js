import React from "react"
import {TextFilter} from "../Miscellaneous/Filters"
import {ListCardUser} from "../Miscellaneous/CardUser"
import {NetworkFirstFilter, NetworkSecondFilter} from "../../utils/Filters.json"
import {Grid, Typography} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import {DataTravelers} from "../../utils/TravelingNetwork.json"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerGrid: {
      display: "grid",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      gridTemplateColumns: "1fr",
      gridRowGap: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr",
        gridGap: theme.spacing(2)
      }
    }
  })
)

export default function TravelingNetwork() {
  const classes = useStyles()
  const localStg = JSON.parse(localStorage.getItem("itemsLocal") || "{}")
  return (
    <React.Fragment>
      <TextFilter className="firts" listFilter={NetworkFirstFilter} />
      <TextFilter className="second" listFilter={NetworkSecondFilter} />

      <Grid item className={classes.containerGrid}>
        <ListCardUser data={DataTravelers}/>
      </Grid>
    </React.Fragment>
  )
}
