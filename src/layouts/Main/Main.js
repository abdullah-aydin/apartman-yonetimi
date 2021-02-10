// router
import { Switch, Route, Redirect } from "react-router-dom";
// ant design style
import { Layout } from "antd";
//style
import "./Main.css";
//routes
import { routes } from "../../constant/routes";

const { Content } = Layout;

function Main() {
  return (
    <Content className="main-content">
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Redirect exact from="/login" to="/dashboard" />

        {routes.map((route) => (
          <Route path={route.path} key={route.id}>
            <div className="site-layout-background">
              {route.id < 7 && (
                <>
                  <h1>{route.title}</h1>
                  <hr />
                </>
              )}
              {route.components}
            </div>
          </Route>
        ))}
      </Switch>
    </Content>
  );
}

export default Main;
