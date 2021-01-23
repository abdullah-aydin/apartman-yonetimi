// hook-form
import { useForm, Controller } from "react-hook-form";
// ant design
import { Card, Col, Row, Button, Input } from "antd";
// styles
import logo from "../../assets/images/logo.png";
import "./Login.css";

function Login() {
  const { handleSubmit, control } = useForm();
  const submit = (e) => {
    console.log(e);
  };

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xl={24} lg={24} md={24} sm={24} xs={24} className="login_root">
        <Card bordered={true} className="login_body">
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="sugcom_section"
          >
            <div className="logo_login">
              <img src={logo} alt="" />
            </div>

            <form onSubmit={handleSubmit(submit)}>
              <div className="login_layout">
                <label>E-posta</label>
                <Controller
                  placeholder="konu başlığını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="eposta"
                />
              </div>

              <div className="login_layout">
                <label>Parola</label>
                <Controller
                  placeholder="konu başlığını yazınız..."
                  as={Input.Password}
                  required
                  defaultValue={""}
                  control={control}
                  name="parola"
                />
              </div>
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
                className="form_button"
              >
                Giriş
              </Button>
            </form>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
