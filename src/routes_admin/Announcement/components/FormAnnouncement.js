//hook-form
import { useForm, Controller } from "react-hook-form";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Card, Col, Row, Button, Input } from "antd";
//styles
import "../Announcement.css";
//firebase
import db from "../../../config/firebase";

const { TextArea } = Input;

function FormAnnouncement() {
  const { handleSubmit, control } = useForm();

  const history = useHistory();

  const backAnnouncement = () => {
    return history.push(`/announcement`);
  };

  // TODO: USERID'Yİ DİNAMİK YAP

  const submit = (e) => {
    db.collection("announcements")
      .add({
        title: e.title,
        message: e.message,
        date: new Date(),
      })
      .then((e) => console.log("duyuru eklendi"))
      .catch((e) => console.error(e))
      .finally(backAnnouncement);
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
                <label>Duyuru Başlığını Yazınız</label>
                <Controller
                  placeholder="Duyuru başlığını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="title"
                />
              </div>
              <div className="form_section">
                <label>Duyuru içeriğini Yazınız</label>
                <Controller
                  placeholder="Duyuru İçeriğini yazınız..."
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
                  onClick={backAnnouncement}
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

export default FormAnnouncement;
