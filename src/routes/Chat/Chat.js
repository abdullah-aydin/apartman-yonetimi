import { useState, useRef } from "react";
import InputEmoji from "react-input-emoji";
// ant design
import { Card, Col, Row, Tabs, Avatar, Button, Image, Tooltip } from "antd";
// ant design icons
import {
  AppleOutlined,
  AndroidOutlined,
  SendOutlined,
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
    message: "iyiasdasdasdasdasd",
    userName: "abdullah",
  },

  {
    message: "gibiyim",
    ben: true,
    userName: "aydın",
  },
];

function Chat() {
  const [text, setText] = useState("");
  const inputEl = useRef(null);
  console.log(text);
  function handleOnEnter(text) {
    console.log("enter", text);
    console.log();
    inputEl.current.value = "";
    setText("");
  }

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
                        <span className="message_date">17.34</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="message_footer">
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="bir şeyler yazın"
                  />

                  <Tooltip title="mesajı gönder">
                    <Button
                      ref={inputEl}
                      disabled={text === ""}
                      onClick={() => handleOnEnter(text)}
                      icon={<SendOutlined />}
                      className="sende_message"
                    />
                  </Tooltip>
                </div>
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
