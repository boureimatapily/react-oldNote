import React from "react"
import { getAuthenticationStatus } from "../Config/fbconfig"
import { Route, Redirect } from "react-router-dom"

const AppRoute= ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getAuthenticationStatus() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  )
}
export default AppRoute