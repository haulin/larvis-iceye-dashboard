import React from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import { Redirect } from "react-router-dom";

import { AuthContext } from "utils";

import "./Login.less";

interface LoginPayload {
  password: string;
  user_id: string;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login: React.FC = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onFinish = (payload: LoginPayload) => {
    dispatch({ type: "LOGIN", payload });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (state.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <header className="login__header">
        <Typography.Title>Monthly Ore Deposits</Typography.Title>
      </header>
      <main className="login__content">
        <Space className="login__form" direction="vertical">
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
              rules={[
                { required: true, message: "Please input your user ID!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button htmlType="submit">Login</Button>
            </Form.Item>
          </Form>
        </Space>
      </main>
    </div>
  );
};
