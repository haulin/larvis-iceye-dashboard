import React from "react";
import { Progress, Result, Space, Typography } from "antd";
import { MehOutlined, RobotOutlined } from "@ant-design/icons";

import "./Status.less";

export const Status: React.FC = () => {
  return (
    <div className="status">
      <Space>
        <RobotOutlined className="status__icon" />
        <Typography.Title>LARVIS status</Typography.Title>
      </Space>
      <Result
        className="status__result"
        icon={<MehOutlined style={{ color: "#f2a365" }} />}
        title="I'm not feline too good, hoo-man."
        extra={<div>Next</div>}
      >
        <div className="status__bars">
          Acquisitions: 100% transmitted
          <Progress percent={100} />
          API recovered
          <Progress percent={27} strokeColor="#c72c41" />
          Battery: charging
          <Progress percent={44} status="active" strokeColor="#f2a365" />
          Cat memes processed
          <Progress percent={78} strokeColor="#616f39" />
        </div>
      </Result>
    </div>
  );
};
