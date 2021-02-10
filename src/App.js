import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
//router
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
// ant design style
import "antd/dist/antd.css";
import { Layout } from "antd";
//moment
import "moment/locale/tr"; //for a turkish date format
// components
import LayoutsAdmin from "./layouts_admin/LayoutsAdmin";
import LayoutsUser from "./layouts/LayoutsUser";
import Login from "./routes/Login/Login";

function App() {
  const { userState } = useContext(AuthContext);

  return (
    <Layout id="layout__root">
      {!userState ? (
        <Router>
          <Redirect to={{ pathname: "/login" }} />
          <Route path="/login">
            <Login />
          </Route>
        </Router>
      ) : userState.email === "yonetici@email.com" ? (
        <LayoutsAdmin />
      ) : (
        <LayoutsUser />
      )}
    </Layout>
  );
}

export default App;
