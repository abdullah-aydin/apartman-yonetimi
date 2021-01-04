import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
// ant design style
import { Layout } from "antd";
// components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Navbar />
        <Main />
      </Layout>
    </Layout>
  );
}

export default App;
