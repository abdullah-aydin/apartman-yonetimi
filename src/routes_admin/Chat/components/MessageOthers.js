// ant design
import { Avatar, Image } from "antd";
// moment
import moment from "moment";

function MessageOthers({msg}) {
  return (
    <>
      <Avatar
        className="message_avatar"
        src={
          <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
      />
      <p className="message">
        <strong style={{ display: "flex" }}>{msg.userName}</strong>
        {msg.message}
        <span className="message_date">
          {moment(msg.date?.seconds * 1000).format("LT")}
        </span>
      </p>
    </>
  );
}

export default MessageOthers;
