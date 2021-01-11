// moment
import moment from "moment";

function MessageOwner({ msg }) {
  return (
    <p className="message chat_receiver">
      {msg.message}
      <span className="message_date">
        {moment(msg.date?.seconds * 1000).format("LT")}
      </span>
    </p>
  );
}

export default MessageOwner;
