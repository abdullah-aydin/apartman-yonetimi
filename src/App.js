import "./App.css";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
// ant design style
import "antd/dist/antd.css";
import { Layout } from "antd";
// components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

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
