// router
import { Switch, Route } from "react-router-dom";
// ant design style
import { Layout } from "antd";
import Dashboard from "../../routes/Dashboard";
import Chat from "../../routes/Chat";
import Announcement from "../../routes/Announcement";
import SugCom from "../../routes/SugCom";
//style
import "./Main.css";

const { Content } = Layout;

function Main() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Switch>
        <Route path="/dashboard">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Dashboard />
          </div>
        </Route>
        <Route path="/chat">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Chat />
          </div>
        </Route>
        <Route path="/announcement">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Announcement />
          </div>
        </Route>
        <Route path="/sug-com">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <SugCom />
          </div>
        </Route>
      </Switch>
    </Content>
  );
}

export default Main;
