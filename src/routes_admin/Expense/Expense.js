//components
import TableExpense from "./components/TableExpense";
//router
import { useHistory } from "react-router-dom";
// ant design
import { Col, Row, Button } from "antd";

function Expense() {
  const history = useHistory();

  // go to new-sug-com page
  const newExpense = () => {
    return history.push(`/new-expense`);
  };

  return (
    <>
      <Row className="sug_com_row">
        <Col xl={16} lg={18} md={24} sm={24} xs={24}>
          <TableExpense />
        </Col>
      </Row>
      <Button
        className="new_sug_com_button"
        type="primary"
        shape="round"
        size="large"
        onClick={newExpense}
      >
        YENİ GİDER EKLE
      </Button>
    </>
  );
}

export default Expense;
