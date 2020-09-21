import React from "react";
import { Layout, Typography } from "antd";

import { Sider } from "components";

import "./Home.less"; // LOL, homeless

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

export const Home: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Layout.Header className="home__header">
          <Typography.Title className="home__title">
            {getLarvisQuote()}
          </Typography.Title>
        </Layout.Header>
        <Layout.Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Here be dragons
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
