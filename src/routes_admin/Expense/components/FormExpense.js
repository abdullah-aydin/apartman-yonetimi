//hook-form
import { useForm, Controller } from "react-hook-form";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Card, Col, Row, Button, Input } from "antd";

import uniqid from "uniqid";
//styles
import "../Expense.css";
//firebase
import db from "../../../config/firebase";

const { TextArea } = Input;

function FormExpense() {
  const { handleSubmit, control } = useForm();

  const history = useHistory();

  const backExpense = () => {
    return history.push(`/expense`);
  };

  // TODO: USERID'Yİ DİNAMİK YAP

  const submit = (e) => {
    db.collection("expense")
      .add({
        title: e.title,
        explanation: e.explanation,
        price:e.price,
        date: new Date(),
        key: uniqid(),
      })
      .then((e) => console.log("Gider eklendi"))
      .catch((e) => console.error(e))
      .finally(backExpense);
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
                <label>Gider Başlığını Yazınız</label>
                <Controller
                  placeholder="Gider başlığını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="title"
                />
              </div>
              <div className="form_section">
                <label>Gider Tutarını Yazınız</label>
                <Controller
                  placeholder="Gider Tutarını yazınız..."
                  as={Input}
                  required
                  defaultValue={""}
                  control={control}
                  name="price"
                />
              </div>
              <div className="form_section">
                <label>Gider İçeriğini Yazınız</label>
                <Controller
                  placeholder="Gider İçeriğini yazınız..."
                  as={TextArea}
                  rows={6}
                  required
                  defaultValue={""}
                  control={control}
                  name="explanation"
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
                  onClick={backExpense}
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

export default FormExpense;
