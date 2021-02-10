//components
import TableSugCom from "./components/TableBills";
// ant design
import { Card, Col, Row } from "antd";

function Bills() {


  return (
    <Row>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card bordered={true} className="sug_com_body">
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="sugcom_section"
          >
            <TableSugCom />
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default Bills;
