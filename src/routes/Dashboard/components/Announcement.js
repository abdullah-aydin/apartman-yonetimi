import { useState, useEffect } from "react";
//ant design
import "antd/dist/antd.css";
import { List, Card, Col } from "antd";
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
      <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24} className="dashboard_col">
        <Card bordered={true} className="card">
          <h2
            style={{
              color: "#3b4cb8",
              textAlign: "center",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Duyurular
          </h2>
          <Col style={{ overflowY: "auto" }}>
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
      <AnnoModal
        modalVisible={modalVisible}
        modalIsVisible={modalIsVisible}
        item={item}
      />
    </>
  );
}

export default Announcement;
