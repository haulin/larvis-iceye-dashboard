import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { AuthProvider } from "utils";
import {
  Acquisitions,
  Header,
  Login,
  PrivateRoute,
  Sider,
  Status,
  Users,
} from "components";

export const Dashboard: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route component={Login} path="/login" />
          <PrivateRoute path="/">
            <Layout style={{ minHeight: "100vh" }}>
              <Sider />
              <Layout>
                <Header />
                <Layout.Content style={{ margin: "0 16px" }}>
                  <Route component={Acquisitions} exact path="/" />
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route component={Status} path="/status" />
                </Layout.Content>
              </Layout>
            </Layout>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
