//components
import TableUsers from "./components/TableUsers";
//router
import { useHistory } from "react-router-dom";
// ant design
import { Col, Row, Button } from "antd";

function Users() {
  const history = useHistory();

  // go to new-sug-com page
  const newUsers = () => {
    return history.push(`/new-users`);
  };

  return (
    <>
      <Row className="sug_com_row">
        <Col xl={16} lg={18} md={24} sm={24} xs={24}>
          <TableUsers />
        </Col>
      </Row>
      <Button
        className="new_sug_com_button"
        type="primary"
        shape="round"
        size="large"
        onClick={newUsers}
      >
        YENİ KULLANICI EKLE
      </Button>
    </>
  );
}

export default Users;
