import React from "react";

import { Button, Form, Input, Space, Typography } from "antd";

import "./Login.less";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login: React.FC = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space className="login" direction="vertical">
      <Typography.Title level={2} type="secondary">
        Please login for access
      </Typography.Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ user_id: "alice" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="User ID"
          name="user_id"
          rules={[{ required: true, message: "Please input your user ID!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
