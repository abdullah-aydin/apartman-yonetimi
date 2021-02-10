import { useState } from "react";
// ant design
import { Tabs } from "antd";
// ant design icons
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
//styles
import "./Chat.css";
import ChatBody from "./components/ChatBody";

const { TabPane } = Tabs;

const tabPaneInfo = [
  { id: 1, roomName: "Sohbet Odası", icon: <AppleOutlined /> },
  { id: 2, roomName: "Toplantı Odası", icon: <AndroidOutlined /> },
];

function Chat() {
  const [room, setRoom] = useState(1);

  return (
    <Tabs
      defaultActiveKey={room}
      className="tabs"
      onTabClick={(tabKey) => setRoom(tabKey)}
    >
      {tabPaneInfo.map((tab) => (
        <TabPane
          tab={
            <span>
              {tab.icon}
              {tab.roomName}
            </span>
          }
          key={tab.id}
        >
          <ChatBody room={room} />
        </TabPane>
      ))}
    </Tabs>
  );
}

export default Chat;
