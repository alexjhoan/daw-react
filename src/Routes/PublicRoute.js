import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ render: Component, ...rest }:any) => {
  const userLogged = localStorage.getItem('token')
  // const userLogged = true
  if ( userLogged ) {
    return <Redirect to="/dashboard/aboutme" />
  }else {
    return <Route {...rest} render={Component} />
  }
}
