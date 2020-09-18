import React from "react";

import { Typography } from "antd";

import { Login } from "components";

import "./Dashboard.less";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard--header">
        <Typography.Title>Monthly Ore Deposits</Typography.Title>
      </header>
      <main className="dashboard--login">
        <Login />
      </main>
    </div>
  );
};
