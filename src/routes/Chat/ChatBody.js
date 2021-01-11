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
// moment
import moment from "moment";
import "moment/locale/tr"; //for a turkish date format
//component
import Loading from "../../components/Loading";

function ChatBody({ room }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [meetingMessages, setMeetingMessages] = useState([]);
  const [text, setText] = useState("");
  const messageRef = useRef();
  const numberRoom = parseInt(room);
  const [loading, setLoading] = useState(true);

  // messages data fetch from firebase
  useEffect(() => {
    db.collection("chats")
      .doc(numberRoom === 1 ? "chat" : "meeting")
      .collection("messages")
      .orderBy("date", "asc")
      .onSnapshot((snapshot) =>
        numberRoom === 1
          ? setChatMessages(snapshot.docs.map((doc) => doc.data()))
          : setMeetingMessages(snapshot.docs.map((doc) => doc.data()))
      );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [numberRoom]);

  //message adding to database
  function handleOnEnter(text) {
    db.collection("chats")
      .doc(numberRoom === 1 ? "chat" : "meeting")
      .collection("messages")
      .add({
        userName: "abdullah",
        message: text,
        owner: true,
        date: new Date(),
        numberRoom,
      })
      .then((e) => console.log("mesaj eklendi"))
      .catch((e) => console.error(e));

    setText("");
  }

  //for a chat screen scroll to bottom
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

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
            {loading && <Loading />}
            {!loading && (
              <div className="message_body">
                {(numberRoom === 1 ? chatMessages : meetingMessages).map(
                  (msg, index) => (
                    <div
                      className="message_wrapper"
                      key={index}
                      ref={messageRef}
                    >
                      {!msg.owner && (
                        <>
                          <Avatar
                            className="message_avatar"
                            src={
                              <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                          />
                          <p className="message">
                            <strong style={{ display: "flex" }}>
                              {msg.userName}
                            </strong>
                            {msg.message}
                            <span className="message_date">
                              {moment(msg.date?.seconds * 1000).format("LT")}
                            </span>
                          </p>
                        </>
                      )}

                      <p className="message chat_receiver">
                        {msg.message}
                        <span className="message_date">
                          {moment(msg.date?.seconds * 1000).format("LT")}
                        </span>
                      </p>
                    </div>
                  )
                )}
              </div>
            )}
            <div className="message_footer">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="bir şeyler yazın"
              />
              {/* <Tooltip title="mesajı gönder">
                <Button
                  disabled={text === ""}
                  onClick={() => handleOnEnter(text)}
                  icon={<SendOutlined />}
                  className="send_message"
                />
              </Tooltip> */}
            </div>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

export default ChatBody;
