// ant design style
import { Layout } from "antd";
//style
import  "./Navbar.css";
const { Header } = Layout;

function Navbar() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0, backgroundColor:"#F6F6F6" }}
    />
  );
}

export default Navbar;
