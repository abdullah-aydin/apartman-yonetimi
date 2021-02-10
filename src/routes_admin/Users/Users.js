//components
import TableUsers from "./components/TableUsers";
//router
import { useHistory } from "react-router-dom";
// ant design
import { Card, Col, Row, Button } from "antd";

function Users() {
  const history = useHistory();

  // go to new-sug-com page
  const newUsers = () => {
    return history.push(`/new-users`);
  };

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
            <TableUsers />

            <Button
            className="new_sug_com_button"
              type="primary"
              shape="round"
              size="large"
              onClick={newUsers}
            >
              ÜYE EKLE
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default Users;
