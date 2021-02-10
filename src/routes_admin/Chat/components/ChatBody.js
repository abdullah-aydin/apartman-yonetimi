import { useState, useEffect, useRef, useContext } from "react";
//context
import { AuthContext } from "../../../context/AuthContext";
//input emoji
import InputEmoji from "react-input-emoji";
// ant design
import { Card, Col, Row } from "antd";
//styles
import "../Chat.css";
//firebase
import db from "../../../config/firebase";
//component
import Loading from "../../../components/Loading";
import MessageOthers from "./MessageOthers";
import MessageOwner from "./MessageOwner";

function ChatBody({ room }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [meetingMessages, setMeetingMessages] = useState([]);
  const [bottom, setBottom] = useState(true);
  const [text, setText] = useState("");
  const messageRef = useRef();
  const numberRoom = parseInt(room);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { userState } = useContext(AuthContext);

  useEffect(() => {
    db.collection("users")
      .doc(userState.uid)
      .onSnapshot((snapshot) => setUser(snapshot.data()));
  }, [userState.uid]);


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
    }, 1500);

    return () => {
      setChatMessages([]);
    };
  }, [numberRoom]);

  //message adding to database
  function handleOnEnter(text) {
    db.collection("chats")
      .doc(numberRoom === 1 ? "chat" : "meeting")
      .collection("messages")
      .add({
        userName: user.userName,
        flatNumber: user.flatNumber,
        message: text,
        date: new Date(),
        numberRoom,
      })
      .then()
      .catch((e) => console.error(e));

    setText("");
  }

  //for a chat screen scroll to bottom
  useEffect(() => {
    if (bottom && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

  const handleScroll = (event) => {
    const target = event.target;
    // **** +10 padding ****
    target.scrollHeight - target.scrollTop <= target.clientHeight + 10
      ? setBottom(true)
      : setBottom(false);
  };

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
              <div className="message_body" onScroll={handleScroll}>
                {(numberRoom === 1 ? chatMessages : meetingMessages).map(
                  (msg, index) => (
                    <div
                      className="message_wrapper"
                      key={index}
                      ref={messageRef}
                    >
                      {msg.userName === user.userName && (
                        <MessageOwner msg={msg} />
                      )}
                      {msg.userName !== user.userName && (
                        <MessageOthers msg={msg} />
                      )}
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
