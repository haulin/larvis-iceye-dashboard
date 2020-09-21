import React from "react";
import { Avatar, Button, Layout, Menu, Space, Typography } from "antd";
import {
  BarChartOutlined,
  HomeOutlined,
  PoweroffOutlined,
  RobotOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { AuthContext } from "utils";

import logo from "./larvis-logo.png";
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
  const { state, dispatch } = React.useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider className="home__sider">
        <div className="home__link">
          <Space>
            <img
              alt="L.A.R.V.I.S. grumpy cat"
              className="home__logo"
              src={logo}
            />
            <span>L.A.R.V.I.S.</span>
          </Space>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Acquisitions
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            Hoo-mans
          </Menu.Item>
          <Menu.Item key="4" icon={<RobotOutlined />}>
            LARVIS status
          </Menu.Item>
        </Menu>
        <div className="home__user">
          <Space direction="vertical" size="large">
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
              <span>{state.user_id}</span>
            </Space>
            <Button icon={<PoweroffOutlined />} onClick={logout}>
              Whisker away
            </Button>
          </Space>
        </div>
      </Layout.Sider>
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
