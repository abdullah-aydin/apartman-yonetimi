//ant design
import { Modal } from "antd";

function ConfirmModal({ modalVisible, modalIsVisible, confirmFunction }) {
  return (
    <Modal
      title="20px to Top"
      visible={modalVisible}
      onOk={() => {
        confirmFunction();
        modalIsVisible(false);
      }}
      onCancel={() => modalIsVisible(!modalVisible)}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
}

export default ConfirmModal;
