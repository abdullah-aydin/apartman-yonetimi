// ant design style
import { Layout } from "antd";

const { Header } = Layout;

function Navbar() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0, backgroundColor:"yellow" }}
    />
  );
}

export default Navbar;
