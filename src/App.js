import "./App.css";
//router
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// ant design style
import "antd/dist/antd.css";
import { Layout } from "antd";
//moment
import "moment/locale/tr"; //for a turkish date format
// components
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import Login from "./routes/Login/Login";

function App() {
  const user = true;
  return (
    <Layout id="layout__root">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Sidebar />
          <Layout>
            <Navbar />
            <Main />
          </Layout>
        </Router>
      )}
    </Layout>
  );
}

export default App;
