import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {ProtectedRoute} from "./ProtectedRoute"
import {PublicRoute} from "./PublicRoute"
import Landing from "../views/Landing"
import DashboardInformationViews from "../views/Dashboard/DashboardInformationViews"
import DashboardPublicacionsViews from "../views/Dashboard/DashboardPublicationViews"
import DashboardExperiencesViews from "../views/Dashboard/DashboardExperiencesViews"
import PasswordRestore from "../views/PasswordRestore"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PublicRoute exact path="/PasswordRestore" component={PasswordRestore} />
        <ProtectedRoute exact path="/dashboard/aboutme" component={DashboardInformationViews} />
        <ProtectedRoute exact path="/dashboard/publications" component={DashboardPublicacionsViews} />
        <ProtectedRoute exact path="/dashboard/experiences" component={DashboardExperiencesViews} />
        <Redirect from="*" exact to="/" />
      </Switch>
    </Router>
  )
}
