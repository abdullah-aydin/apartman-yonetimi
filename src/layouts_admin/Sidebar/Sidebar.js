//router
import { Link } from "react-router-dom";
// ant design style
import { Layout, Menu } from "antd";
// paths
import { sidebarMenu } from "../../constant/paths_admin";
//style
import "./Sidebar.css";
//logo
import logo from "../../assets/images/logo.png";
const { Sider } = Layout;

function Sidebar() {
  return (
    <>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu mode="inline" defaultSelectedKeys={["0"]}>
          {sidebarMenu.map((menu) => (
            <Menu.Item
              key={menu.id}
              icon={menu.icon}
              style={{ backgroundClip: "red" }}
            >
              <Link to={menu.url} key={menu.id}>
                {menu.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
}

export default Sidebar;
