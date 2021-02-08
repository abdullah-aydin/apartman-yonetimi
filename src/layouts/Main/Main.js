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
    <Content style={{ margin: "24px 16px 0" }}>
      <Switch>
        
        <Redirect exact from="/" to="/dashboard" />

        {routes.map((route) => (
          <Route path={route.path} key={route.id}>
            <div className="site-layout-background">
              {route.id < 6 && (
                <>
                  {route.title}
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
