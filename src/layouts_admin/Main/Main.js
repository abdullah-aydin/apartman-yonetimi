// router
import { Switch, Route, Redirect } from "react-router-dom";
// ant design style
import { Layout } from "antd";
//style
import "./Main.css";
//routes
import { routes } from "../../constant/routes_admin";

const { Content } = Layout;

function Main() {
  return (
    <Content className="main-content">
      <Switch>
        <Redirect exact from="/" to="/sug-com" />
        <Redirect exact from="/login" to="/sug-com" />

        {routes.map((route) => (
          <Route path={route.path} key={route.id}>
            <div className="site-layout-background">{route.components}</div>
          </Route>
        ))}
      </Switch>
    </Content>
  );
}

export default Main;
