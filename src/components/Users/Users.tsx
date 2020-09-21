import React from "react";
import { Table, Typography } from "antd";

import { User, userList } from "utils";

import "./Users.less";

const columns = [
  {
    title: "User ID",
    dataIndex: "user_id",
    sorter: (a, b) => a.user_id.localeCompare(b.user_id),
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
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
      <Typography.Title>User List</Typography.Title>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};
