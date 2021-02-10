//components
import TableAnnouncement from "./components/TableAnnouncement";
//router
import { useHistory } from "react-router-dom";
// ant design
import { Col, Row, Button } from "antd";

function Announcement() {
  const history = useHistory();

  // go to new-sug-com page
  const newAnnouncement = () => {
    return history.push(`/new-announcement`);
  };

  return (
    <>
      <Row className="sug_com_row">
        <Col xl={16} lg={18} md={24} sm={24} xs={24}>
          <TableAnnouncement />
        </Col>
      </Row>
      <Button
        className="new_sug_com_button"
        type="primary"
        shape="round"
        size="large"
        onClick={newAnnouncement}
      >
        YENİ DUYURU EKLE
      </Button>
    </>
  );
}

export default Announcement;
