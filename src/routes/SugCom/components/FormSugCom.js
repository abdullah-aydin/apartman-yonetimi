import { useContext } from "react";
//hook-form
import { useForm, Controller } from "react-hook-form";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Card, Col, Row, Button, Input, Select } from "antd";
//styles
import "../SugCom.css";
//firebase
import db from "../../../config/firebase";
//context
import { AuthContext } from "../../../context/AuthContext";

const { Option } = Select;
const { TextArea } = Input;

function FormSugCom() {
  const { handleSubmit, control } = useForm();

  const { userState } = useContext(AuthContext);
  const history = useHistory();

  const backSugCom = () => {
    return history.push(`/sug-com`);
  };

  // TODO: USERID'Yİ DİNAMİK YAP

  const submit = (e) => {
    db.collection("sugcom")
      .add({
        userID: userState.uid,
        title: e.title,
        message: e.message,
        sugOrCom: e.sugcom,
        priority: [`${e.urgent}`],
        status: [true],
        date: new Date(),
      })
      .then((e) => console.log("mesaj eklendi"))
      .catch((e) => console.error(e))
      .finally(backSugCom);
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
            <form onSubmit={handleSubmit(submit)}>
              <div className="form_section">
                <label>
                  Yöneticiye hangi konuda mesaj göndermek istiyorsunuz?
                </label>
                <Controller
                  control={control}
                  name="sugcom"
                  defaultValue="com"
                  as={
                    <Select defaultValue="com">
                      <Option value="com">Şikayet</Option>
                      <Option value="sug">İstek</Option>
                    </Select>
                  }
                />
              </div>
              <div className="form_section">
                <label>Aciliyet Derecesini Seçiniz</label>
                <Controller
                  control={control}
                  name="urgent"
                  defaultValue="notUrgent"
                  as={
                    <Select defaultValue="notUrgent">
                      <Option value="notUrgent">Acil Değil</Option>
                      <Option value="urgent">Acil</Option>
                    </Select>
                  }
                />
              </div>
              <div className="form_section">
                <label>Konu Başlığını Yazınız</label>
                <Controller
                  placeholder="konu başlığını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="title"
                />
              </div>
              <div className="form_section">
                <label>Mesajınızı Yazınız</label>
                <Controller
                  placeholder="mesajınızı yazınız..."
                  as={TextArea}
                  rows={6}
                  required
                  defaultValue={""}
                  control={control}
                  name="message"
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
                  onClick={backSugCom}
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

export default FormSugCom;
