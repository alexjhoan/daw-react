import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ render: Component, ...rest }:any) => {
  const userLogged = localStorage.getItem('token')
  // const userLogged = true
  if ( !userLogged ) {
    return <Redirect to="/" />
  }else {
    return <Route {...rest} render={Component} />
  }
}
