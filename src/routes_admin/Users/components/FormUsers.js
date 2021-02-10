import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
//hook-form
import { useForm, Controller } from "react-hook-form";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Card, Col, Row, Button, Input } from "antd";
//styles
import "../Users.css";
//firebase
import db from "../../../config/firebase";


function FormUsers() {
  const { handleSubmit, control } = useForm();

  const { signUp } = useContext(AuthContext);

  const history = useHistory();

  const backUsers = () => {
    return history.push(`/users`);
  };

  // TODO: USERID'Yİ DİNAMİK YAP

  const submit = (e) => {
   signUp(e.email, e.password)
      .then(({ user }) => {
        console.log("burda", user);
        db.collection("users")
          .doc(user.uid)
          .set({
            email: e.email,
            flatNumber: e.flatNumber,
            photoURL: "",
            userName: e.userName,
            key: user.uid,
          })
          .then((res) => {
            console.log("Hesabınız başarıyla oluşturuldu.");
          })
          .catch((err) => console.log(err.message || "Bir sorun oluştu"));
      })
      .catch((err) => {
        console.log("Hata oluştu",err);
      })
     .finally(backUsers);
  };

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xl={12} lg={16} md={16} sm={24} xs={24} className="new_sug_com">
        <Card bordered={true} className="sug_com_body">
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="sugcom_section"
          >
          <h1 style={{textAlign:'center'}}>Yeni Üye Ekle</h1>
            <form onSubmit={handleSubmit(submit)}>
              <div className="form_section">
                <label>Üye Adını Soyadını Yazınız</label>
                <Controller
                  placeholder="Üye adını soyadını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="userName"
                />
              </div>
              <div className="form_section">
                <label>Üye Email Yazınız</label>
                <Controller
                  placeholder="Üye Email yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="email"
                />
              </div>
              <div className="form_section">
                <label>Üye Daire Numarasını Yazınız</label>
                <Controller
                  placeholder="Üye Daire Numarasını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="flatNumber"
                />
              </div>
              <div className="form_section">
                <label>Üye Şifresini Yazınız</label>
                <Controller
                  placeholder="Üye Şifresini yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="password"
                />
              </div>
              <div className="form_buttons">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  htmlType="submit"
                  className="form_button"
                >
                  GÖNDER
                </Button>

                <Button
                  shape="round"
                  size="large"
                  onClick={backUsers}
                  className="form_button"
                >
                  Geri Dön
                </Button>
              </div>
            </form>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default FormUsers;
