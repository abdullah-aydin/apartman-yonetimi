import "./App.css";
//router
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// ant design style
import "antd/dist/antd.css";
import { Layout } from "antd";
// components
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";

function App() {
  return (
    <Layout id="layout__root">
      <Router>
        <Sidebar />
        <Layout>
          <Navbar />
          <Main />
        </Layout>
      </Router>
    </Layout>
  );
}

export default App;
