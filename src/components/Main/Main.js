// router
import { Switch, Route } from "react-router-dom";
// ant design style
import { Layout } from "antd";

const { Content } = Layout;

function Main() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Switch>
        <Route path="/anasayfa">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            anasayfa
          </div>
        </Route>
      </Switch>
    </Content>
  );
}

export default Main;
