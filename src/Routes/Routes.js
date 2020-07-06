import React from "react"
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom"
import {ProtectedRoute} from "./ProtectedRoute"
import {PublicRoute} from "./PublicRoute"
import Landing from "../views/Landing"
import Dashboard from "../views/Dashboard/DashboardViews"
import PasswordRestore from "../views/PasswordRestore"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Landing} />
        <PublicRoute exact path="/PasswordRestore" component={PasswordRestore} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Redirect from="*" exact to="/" />
      </Switch>
    </Router>
  )
}
