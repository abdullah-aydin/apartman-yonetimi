// ant design
import { Avatar } from "antd";
// moment
import moment from "moment";

function MessageOthers({ msg }) {
  return (
    <>
      <Avatar
        className="message_avatar"
        style={{ color: "#3b4cb8", fontWeight: "bold" }}
      >
        {msg.flatNumber === "0" ? "Y" : msg.flatNumber}
      </Avatar>

      <p className="message">
        <strong style={{ display: "flex" }}>{msg.userName} </strong>
        {msg.message}
        <span className="message_date">
          {moment(msg.date?.seconds * 1000).format("LT")}
        </span>
      </p>
    </>
  );
}

export default MessageOthers;
