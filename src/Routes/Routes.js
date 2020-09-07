import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {ProtectedRoute} from "./ProtectedRoute"
import {PublicRoute} from "./PublicRoute"
import Landing from "../views/Landing"
import DashboardInformationViews from "../views/Dashboard/DashboardInformationViews"
import DashboardPublicacionsViews from "../views/Dashboard/DashboardPublicationViews"
import DashboardExperiencesViews from "../views/Dashboard/DashboardExperiencesViews"
import DashboardTravelingNetworkViews from "../views/Dashboard/DashboardTravelingNetworkViews"
import PasswordRestore from "../views/PasswordRestore"
import NewPasswordViews from "../views/NewPasswordViews"
import Help from "../views/Help"
import PasswordEmail from "../views/PasswordEmail"
import PasswordSuccess from "../views/PasswordSuccess"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PublicRoute exact path="/passwordrestore" component={PasswordRestore} />
        <PublicRoute exact path="/change/password/:pin" component={NewPasswordViews} />
        <PublicRoute exact path="/passwordemail" component={PasswordEmail} />
        <PublicRoute exact path="/passwordsuccess" component={PasswordSuccess} />
        <PublicRoute exact path="/help" component={Help} />
        <ProtectedRoute exact path="/dashboard/aboutme" component={DashboardInformationViews} />
        <ProtectedRoute exact path="/dashboard/publications" component={DashboardPublicacionsViews} />
        <ProtectedRoute exact path="/dashboard/experiences" component={DashboardExperiencesViews} />
        <ProtectedRoute exact path="/dashboard/travelingnetwork" component={DashboardTravelingNetworkViews} />
        <Redirect from="*" exact to="/" />
      </Switch>
    </Router>
  )
}
