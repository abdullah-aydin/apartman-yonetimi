import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// ant design style
import { Layout, Button, Tooltip } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
//style
import "./Navbar.css";
// component
import ConfirmModal from "../../components/ConfirmModal";

const { Header } = Layout;

function Navbar() {
  const { signOut } = useContext(AuthContext);
  // confirm modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalIsVisible = () => setModalVisible(!modalVisible);

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
              onClick={() => modalIsVisible(true)}
            />
          </Tooltip>
        </div>
      </Header>
      <ConfirmModal
        modalVisible={modalVisible}
        modalIsVisible={modalIsVisible}
        confirmFunction={() => signOut()}
        title={"Gerçekten çıkış yapmak istiyor musunuz"}
        // subtitle={`Toplam ${itemCount} ürün ve bu ürünlerin toplam fiyatı ${totalPrice} ₺`}
      />
    </>
  );
}

export default Navbar;
