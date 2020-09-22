import React from "react";
import { Space, Table, Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import { User, userList } from "utils";

import "./Users.less";

const columns = [
  {
    dataIndex: "user_id",
    sorter: (a, b) => a.user_id.localeCompare(b.user_id),
    title: "User ID",
  },
  {
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    title: "Name",
  },
];

export const Users: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    async function getUsers() {
      const response = await userList();
      setUsers(response?.parsedBody ?? []);
    }
    getUsers();
  }, []);

  return (
    <div className="users">
      <Space>
        <TeamOutlined className="users__icon" />
        <Typography.Title>User list</Typography.Title>
      </Space>
      <Table
        columns={columns}
        dataSource={users}
        rowKey={(record) => record.user_id}
      />
    </div>
  );
};
