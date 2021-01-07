// ant design
import { Card, Col, Row, Tabs, Input, Avatar, Image } from "antd";
// ant design icons
import {
  AppleOutlined,
  AndroidOutlined,
  UserOutlined,
} from "@ant-design/icons";
//styles
import "./Chat.css";

const { TabPane } = Tabs;

const messages = [
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },
  {
    message: "iyi",
    userName: "abdullah",
  },

  {
    message: "gibiyim",
    ben: true,
    userName: "aydın",
  },
];

function Chat() {
  return (
    <Tabs defaultActiveKey="1" className="tabs">
      <TabPane
        className="iyi"
        tab={
          <span>
            <AppleOutlined />
            Sohbet Odası
          </span>
        }
        key="1"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card bordered={true} className="card_chat">
              <Col
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                className="message_section"
              >
                <div className="message_body">
                  {messages.map((message) => (
                    <div className="message_wrapper">
                      {!message.ben && (
                        <Avatar
                          className="message_avatar"
                          src={
                            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                        />
                      )}
                      <p
                        className={`message ${message.ben && "chat_receiver"}`}
                      >
                        {!message.ben && (
                          <strong style={{ display: "flex" }}>
                            {message.userName}
                          </strong>
                        )}
                        {message.message}
                      </p>
                    </div>
                  ))}
                </div>
                <Input
                  placeholder="bir mesaj yazın"
                  className="message_input"
                />
              </Col>
            </Card>
          </Col>
        </Row>
      </TabPane>

      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Toplantı Odası
          </span>
        }
        key="2"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card bordered={true} className="card_chat">
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <h1>Duyurular2</h1>
              </Col>
            </Card>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
}

export default Chat;
