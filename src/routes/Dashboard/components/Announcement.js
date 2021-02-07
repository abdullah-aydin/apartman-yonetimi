import { useState, useEffect } from "react";
//ant design
import "antd/dist/antd.css";
import { List, Card, Col, Row } from "antd";
//styles
import "../Dashboard.css";
//icons
import { IoMdNotificationsOutline } from "react-icons/io";
import AnnoModal from "../../../components/AnnoModal";
// db
import db from "../../../config/firebase";
//moment
import moment from "moment";

function Announcement() {
  const [anno, setAnno] = useState([]);
  const [item, setItem] = useState({});

  // confirm modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalIsVisible = () => setModalVisible(!modalVisible);

  useEffect(() => {
    db.collection("announcements").onSnapshot((snapshot) =>
      snapshot.docs.map((doc) => setAnno((anno) => [doc.data(), ...anno]))
    );
  }, []);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xxl={6} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card bordered={true} className="card">
              <h2
                style={{
                  color: "#3b4cb8",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Duyurular
              </h2>
              <Col style={{ height: "500px", overflowY: "auto" }}>
                <List
                  itemLayout="horizontal"
                  dataSource={anno}
                  renderItem={(item) => (
                    <List.Item
                      className="announcement_list_item"
                      onClick={() => {
                        modalIsVisible(true);
                        setItem(item);
                      }}
                    >
                      <List.Item.Meta
                        className="announcement_list_item_meta"
                        avatar={<IoMdNotificationsOutline />}
                        title={<b>{item.title}</b>}
                        description={moment(item?.date?.seconds * 1000).format(
                          "DD.MM.YYYY"
                        )}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
      <AnnoModal
        modalVisible={modalVisible}
        modalIsVisible={modalIsVisible}
        item={item}
      />
    </>
  );
}

export default Announcement;
