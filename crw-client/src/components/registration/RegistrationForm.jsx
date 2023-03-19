import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleOnFinish = (values) => {
    console.log(values);
    navigate("/");
  };
  return (
    <div className="section-login">
      <div>
        <div className="login-header">
          <h2>Registration</h2>
          <p>Your kindness journey starts here</p>
        </div>

        <Form onFinish={handleOnFinish} className="login-form">
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Name is required!" }]}
          >
            <Input
              className="input-form"
              size="large"
              placeholder="Fullname"
              prefix={<UserOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              {
                type: "email",
                message: "Please input valid email",
              },
            ]}
          >
            <Input
              className="input-form"
              size="large"
              placeholder="Email"
              prefix={<MailOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
            ]}
          >
            <Input.Password
              size="large"
              className="input-form"
              placeholder="Password"
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            rules={[
              {
                required: true,
                message: "Confirm Password is required!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              className="input-form"
              placeholder="Confirm Password"
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/login">Already have account?</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
