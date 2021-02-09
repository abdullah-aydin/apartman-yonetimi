import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// ant design style
import { Layout, Button, Tooltip, Modal } from "antd";
import { LogoutOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
//style
import "./Navbar.css";

const { Header } = Layout;

function Navbar() {
  const { signOut } = useContext(AuthContext);

  function confirmModal() {
    Modal.confirm({
      title: "Çıkış Yap",
      icon: <ExclamationCircleOutlined />,
      content: "Gerçekten çıkış yapmak istiyor musunuz?",
      okText: "Evet",
      cancelText: "Hayır",
      centered: true,
      onOk: signOut,
    });
  }

  return (
    <>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: "0px 24px", backgroundColor: "#F6F6F6" }}
      >
        <div style={{ textAlign: "right" }}>
          <Tooltip title="Çıkış Yap">
            <Button
              type="link"
              icon={<LogoutOutlined />}
              size="large "
              className="logout_btn"
              onClick={() => confirmModal()}
            />
          </Tooltip>
        </div>
      </Header>
    </>
  );
}

export default Navbar;
