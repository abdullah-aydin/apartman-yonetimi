// router
import { Switch, Route, useRouteMatch } from "react-router-dom";
// ant design style
import { Layout } from "antd";
import Dashboard from "../../routes/Dashboard";
import Chat from "../../routes/Chat";
import Announcement from "../../routes/Announcement";
import SugCom from "../../routes/SugCom";
import FormSugCom from "../../routes/SugCom/components/FormSugCom";

//style
import "./Main.css";
import Market from "../../routes/Market/Market";

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
            <h1>Anasayfa</h1>
            <hr />
            <Dashboard />
          </div>
        </Route>

        <Route path="/chat">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Anasayfa</h1>
            <hr />
            <Chat />
          </div>
        </Route>

        <Route path="/announcement">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Anasayfa</h1>
            <hr />
            <Announcement />
          </div>
        </Route>

        <Route path="/sug-com">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Anasayfa</h1>
            <hr />
            <SugCom />
          </div>
        </Route>

        <Route path="/new-sug-com">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Yeni Şikayet veya İstek Ekle</h1>
            <hr />
            <FormSugCom />
          </div>
        </Route>

        <Route path="/market">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Market />
          </div>
        </Route>
      </Switch>
    </Content>
  );
}

export default Main;
