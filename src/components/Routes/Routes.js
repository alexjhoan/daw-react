import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Landing from "../../views/Landing"
import Login from "../../views/Login"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={Landing} />
        <Route exact path="/login" render={Login} />
      </Switch>
    </Router>
  )
}
