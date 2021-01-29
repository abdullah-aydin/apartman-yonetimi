import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// hook-form
import { useForm, Controller } from "react-hook-form";
// ant design
import { Card, Col, Row, Button, Input } from "antd";
// styles
import logo from "../../assets/images/logo.png";
import "./Login.css";

function Login() {
  const { handleSubmit, control } = useForm();
  const { signIn } = useContext(AuthContext);

  const submit = (e) => {
    signIn(e.email, e.password);
  };

  return (
    <Row>
      <Col xl={24} xs={24} className="login_root">
        <Card bordered={true} className="login_body">
          <Col xl={24} xs={24} className="sugcom_section">
            <div className="logo_login">
              <img src={logo} alt="" />
            </div>

            <form onSubmit={handleSubmit(submit)}>
              <div className="login_layout">
                <label>E-posta</label>
                <Controller
                  placeholder="email adresinizi giriniz"
                  as={Input}
                  size="large"
                  required
                  defaultValue={""}
                  control={control}
                  name="email"
                />
              </div>

              <div className="login_layout">
                <label>Parola</label>
                <Controller
                  placeholder="şifrenizi giriniz"
                  as={Input.Password}
                  size="large"
                  required
                  defaultValue={""}
                  control={control}
                  name="password"
                />
              </div>
              <div className="login_button">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  htmlType="submit"
                  className="form_button"
                >
                  Giriş Yap
                </Button>
              </div>
            </form>
            <div className="login_forgot_pass">
              <Button type="link" shape="round" size="large">
                Şifremi Unuttum
              </Button>
            </div>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
