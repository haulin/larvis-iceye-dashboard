import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { AuthProvider } from "utils";
import { Header, Home, Login, PrivateRoute, Sider, Users } from "components";

export const Dashboard: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/">
            <Layout style={{ minHeight: "100vh" }}>
              <Sider />
              <Layout>
                <Header />
                <Layout.Content style={{ margin: "0 16px" }}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/acquisitions">Acquisitions</Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/status">LARVIS status</Route>
                </Layout.Content>
              </Layout>
            </Layout>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
