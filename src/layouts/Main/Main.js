// router
import { Switch, Route, Redirect } from "react-router-dom";
// ant design style
import { Layout } from "antd";
import Dashboard from "../../routes/Dashboard";
import Analytics from "../../routes/Analytics";
import Chat from "../../routes/Chat";
import SugCom from "../../routes/SugCom";
import FormSugCom from "../../routes/SugCom/components/FormSugCom";
import ShoppingList from "../../routes/Market/components/ShoppingList";

//style
import "./Main.css";
import Market from "../../routes/Market/Market";

const { Content } = Layout;

function Main() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />

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
        
        <Route path="/analytics">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Gider Tablosu</h1>
            <hr />
            <Analytics />
          </div>
        </Route>

        <Route path="/chat">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Sohbet Odası</h1>
            <hr />
            <Chat />
          </div>
        </Route>

        <Route path="/sug-com">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Şikayet ve İstek</h1>
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

        <Route path="/shopping-list">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <ShoppingList />
          </div>
        </Route>
      </Switch>
    </Content>
  );
}

export default Main;
