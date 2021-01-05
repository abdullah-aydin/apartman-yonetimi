//router
import { Link } from "react-router-dom";
// ant design style
import { Layout, Menu } from "antd";
// ant design icons
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
// paths
import { sidebarMenu } from "../../constant/paths";
//style
import "./Sidebar.css";

const { Sider } = Layout;

function Sidebar() {
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
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
