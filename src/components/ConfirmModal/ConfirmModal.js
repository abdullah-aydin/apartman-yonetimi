//ant design
import { Modal } from "antd";

function ConfirmModal({
  modalVisible,
  modalIsVisible,
  confirmFunction,
  title,
  subtitle,
}) {
  return (
    <Modal
      getContainer={false}
      title={title}
      centered
      visible={modalVisible}
      zIndex={1001}
      onOk={confirmFunction}
      okText="Onaylıyorum"
      cancelText="Vazgeç"
      onCancel={() => {
        modalIsVisible(!modalVisible);
      }}
    >
      <p>{subtitle}</p>
    </Modal>
  );
}

export default ConfirmModal;
