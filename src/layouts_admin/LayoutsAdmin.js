//router
import { BrowserRouter as Router } from "react-router-dom";
// ant design style
import { Layout } from "antd";
//components
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Main from "./Main";

function LayoutsAdmin() {
  return (
    <Router>
      <Sidebar />
      <Layout>
        <Navbar />
        <Main />
      </Layout>
    </Router>
  );
}

export default LayoutsAdmin;
