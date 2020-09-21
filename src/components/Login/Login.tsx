import React from "react";
import { Button, Form, Input, Space, Typography, notification } from "antd";
import { Redirect } from "react-router-dom";

import { AuthContext, token } from "utils";

import "./Login.less";

interface LoginProps {
  location: Location;
}

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

export const Login: React.FC<LoginProps> = ({ location }) => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onFinish = async (payload: LoginPayload) => {
    try {
      const response = await token(payload);
      dispatch({
        type: "LOGIN",
        payload: {
          user_id: payload.user_id,
          access: response.parsedBody?.access,
        },
      });
    } catch (ex) {
      if (ex instanceof Error) {
        notification.open({
          message: "Login Failed",
          description: `Error: ${ex.message}`,
        });
      }
    }
  };

  if (state.isAuthenticated) {
    const redirect = new URLSearchParams(location.search).get("redirect");
    return <Redirect to={redirect ?? "/"} />;
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
            initialValues={{ password: "", user_id: "alice" }}
            name="basic"
            onFinish={onFinish}
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
