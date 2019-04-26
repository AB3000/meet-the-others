import React from "react"
import { Route, Redirect } from "react-router-dom";
//We use this to only restrict authenticated users to see the chat page
export default function PrivateRoute({
    component: Component,
    authenticated,
    ...rest
  }) {
    return (
      <Route
        {...rest}
        render={props =>
          authenticated === true ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/App" />
          )
        }
      />
    );
  }