import { Modal } from "antd";
//moment
import moment from "moment";

function AnnoModal({ modalVisible, modalIsVisible, item }) {
  return (
    <Modal
      title={item.title}
      centered
      visible={modalVisible}
      zIndex={1001}
      footer={null}
      onCancel={() => {
        modalIsVisible(!modalVisible);
      }}
    >
      <p>{item.message}</p>
      <br/><br/>
      <p>{moment(item?.date?.seconds * 1000).format("DD.MM.YYYY")}</p>
    </Modal>
  );
}

export default AnnoModal;
