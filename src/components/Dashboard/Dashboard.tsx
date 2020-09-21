import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";

import { AuthProvider } from "utils";
import { Home, Login, PrivateRoute, Sider, Users } from "components";

const getLarvisQuote = (): string => {
  const quotes = [
    "All ur ore r belong to us",
    "Can I haz cheezburger?",
    "Do you liek teh API I made 4 u?",
    "Ur UI looks purrfect, hoo-man!",
    "If I fits, I deposits.",
    "Im in ur orbit, mappin ur soil...",
    "U gotta b kitten me!!1",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

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
                <Layout.Header className="home__header">
                  <Typography.Title className="home__title">
                    {getLarvisQuote()}
                  </Typography.Title>
                </Layout.Header>
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
