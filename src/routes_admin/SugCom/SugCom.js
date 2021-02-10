//components
import TableSugCom from "./components/TableSugCom";
//router
import { useHistory } from "react-router-dom";
// ant design
import { Col, Row, Button } from "antd";

function SugCom() {
  const history = useHistory();

  // go to new-sug-com page
  const newSugCom = () => {
    return history.push(`/new-sug-com`);
  };

  return (
    <>
      <Row className="sug_com_row">
        <Col xl={16} lg={18} md={24} sm={24} xs={24}>
          <TableSugCom />
        </Col>
      </Row>
      <Button
        className="new_sug_com_button"
        type="primary"
        shape="round"
        size="large"
        onClick={newSugCom}
      >
        İSTEK veya ŞİKAYET EKLE
      </Button>
    </>
  );
}

export default SugCom;
