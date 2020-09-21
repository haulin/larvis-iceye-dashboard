import React from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "utils";

export const PrivateRoute = ({ children, ...rest }) => {
  const { state } = React.useContext(AuthContext);

  const getQuery = (location) => {
    return `?redirect=${location.pathname}`;
  };

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
              search: getQuery(location),
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
