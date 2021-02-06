import { Modal } from "antd";

function AnnoModal({ modalVisible, modalIsVisible }) {
  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      getContainer={false}
      visible={modalVisible}
      zIndex={1001}
      cancelText="Kapat"
      onCancel={() => {
        modalIsVisible(!modalVisible);
      }}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
}

export default AnnoModal;
