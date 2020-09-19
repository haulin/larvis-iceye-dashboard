import React from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "utils";

export const PrivateRoute = ({ children, ...rest }) => {
  const { state } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
