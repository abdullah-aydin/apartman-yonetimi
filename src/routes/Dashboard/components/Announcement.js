import { useState } from "react";
//ant design
import "antd/dist/antd.css";
import { List, Card, Col, Row } from "antd";
//styles
import "../Dashboard.css";
//icons
import { IoMdNotificationsOutline } from "react-icons/io";
import AnnoModal from "../../../components/AnnoModal";

function Announcement() {
  // confirm modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalIsVisible = () => setModalVisible(!modalVisible);

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title:
        "Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

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
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item onClick={() => modalIsVisible(true)}>
                      <List.Item.Meta
                        className="announcement_list_item"
                        avatar={<IoMdNotificationsOutline />}
                        title={<b>{item.title}</b>}
                        description="11.01.2021"
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
      <AnnoModal modalVisible={modalVisible} modalIsVisible={modalIsVisible} />
    </>
  );
}

export default Announcement;
