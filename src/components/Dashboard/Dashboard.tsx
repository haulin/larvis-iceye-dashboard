import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login, PrivateRoute } from "components";
import { AuthProvider } from "utils";

export const Dashboard: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
