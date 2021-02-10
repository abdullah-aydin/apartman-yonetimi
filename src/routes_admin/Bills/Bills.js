//components
import TableSugCom from "./components/TableBills";
// ant design
import { Col, Row } from "antd";

function Bills() {
  return (
    <Row className="sug_com_row">
      <Col xl={16} lg={18} md={24} sm={24} xs={24}>
        <TableSugCom />
      </Col>
    </Row>
  );
}

export default Bills;
