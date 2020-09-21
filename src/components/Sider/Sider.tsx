import React from "react";
import { Avatar, Button, Layout, Menu, Space } from "antd";
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
import "./Sider.less";

export const Sider: React.FC = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  const [isFixed, setFixed] = React.useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Layout.Sider
      breakpoint="md"
      className={`sider ${isFixed ? "sider--fixed" : ""}`}
      collapsedWidth={0}
      onBreakpoint={setFixed}
      zeroWidthTriggerStyle={{
        top: "12px",
      }}
    >
      <div className="sider__link">
        <Space>
          <img
            alt="L.A.R.V.I.S. grumpy cat"
            className="sider__logo"
            height={64}
            src={logo}
          />
          <span>L.A.R.V.I.S.</span>
        </Space>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        mode="inline"
        onClick={(props) => console.log(props)}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/acquisitions" icon={<BarChartOutlined />}>
          Acquisitions
        </Menu.Item>
        <Menu.Item key="/users" icon={<TeamOutlined />}>
          Hoo-mans
        </Menu.Item>
        <Menu.Item key="/status" icon={<RobotOutlined />}>
          LARVIS status
        </Menu.Item>
      </Menu>
      <div className="sider__user">
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
  );
};