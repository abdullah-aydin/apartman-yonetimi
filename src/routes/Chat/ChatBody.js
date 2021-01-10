import { useState, useEffect, useRef } from "react";
//input emoji
import InputEmoji from "react-input-emoji";
// ant design
import { Card, Col, Row, Avatar, Button, Image, Tooltip } from "antd";
// ant design icons
import { SendOutlined } from "@ant-design/icons";
//styles
import "./Chat.css";
//firebase
import db from "../../firebase";
import firebase from "firebase";
// moment
import moment from "moment";
import "moment/locale/tr"; //for a turkish date format

function ChatBody({ room }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  function handleOnEnter(text) {
    inputEl.current.value = "";
    //message adding to database
    db.collection("chats")
      .doc("meeting")
      .collection("messages")
      .add({
        userName: "abdullah",
        message: text,
        owner: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((e) => console.log("mesaj eklendi"))
      .catch((e) => console.error(e));

    setText("");
  }

  console.log(room);

  useEffect(() => {
    db.collection("chats")
      .doc("meeting")
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);



  return (
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
              {messages.map((message, index) => (
                <div className="message_wrapper" key={index}>
                  {!message.owner && (
                    <Avatar
                      className="message_avatar"
                      src={
                        <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                    />
                  )}
                  <p className={`message ${message.owner && "chat_receiver"}`}>
                    {!message.owner && (
                      <strong style={{ display: "flex" }}>
                        {message.userName}
                      </strong>
                    )}
                    {message.message}
                    <span className="message_date">
                      {moment(message.timestamp.seconds * 1000).format("LT")}
                    </span>
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
  );
}

export default ChatBody;
