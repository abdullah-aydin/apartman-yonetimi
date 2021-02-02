import { useState, useEffect } from "react";
//ant design
import { Drawer, InputNumber, Tooltip, Button, Row, Col } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase

import db from "../../../config/firebase";
import ConfirmModal from "../../../components/ConfirmModal";
import firebase from "firebase/app";
import moment from "moment";
import uniqid from "uniqid";

function MarketDrawer({ visible, setVisible, onClose, items, setItems }) {
  const [marketItems, setMarketItems] = useState(items);
  // confirm modal
  const [modalVisible, setModalVisible] = useState(false);
  const modalIsVisible = () => setModalVisible(!modalVisible);

  const [orderss, setOrderss] = useState([]);

  // const currentMonth = "2020-08";
  const currentMonth = moment().format("YYYY-MM");

  const dbRef = db
    .collection("users")
    .doc("903rfcO6sbX7hJISg1ND")
    .collection("orders")
    .doc(`${currentMonth}`);

  // orders data fetch from firebase
  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>
        setOrderss(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
      );
  }, []);

  let totalPrice = 0;
  let itemCount = 0;

  useEffect(() => {
    setMarketItems(items);
  }, [items]);

  items.forEach((item) => {
    totalPrice += item.price * item.count;
    itemCount += item.count;
  });

  const onChange = (id, cnt) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              count: cnt,
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    const newList = items.filter((todo) => todo.id !== id);
    setItems(newList);
  };

  // We check if there is an area of this month in firebase
  // if there is, count will be 1 & work array union method, else count will be 0 & work set method
  let count = 0;
  orderss.forEach((e) => {
    e.key === currentMonth && count++;
  });

  // order list saved to db
  const orderList = (orderList) => {
    count >= 1
      ? dbRef
          .update({
            orders: firebase.firestore.FieldValue.arrayUnion({
              orderList: [...orderList],
              date: new Date(),
              delivered: [false],
              totalPrice: totalPrice,
              month: currentMonth,
              key: uniqid(),
            }),
            totalPrice: firebase.firestore.FieldValue.increment(totalPrice),
          })
          .then((e) => console.log("ürünler eklendi"))
          .catch((e) => console.error(e))
          .finally(() => {
            setModalVisible(!modalVisible);
            setVisible(false);
            setItems([]);
          })
      : dbRef
          .set({
            orders: [
              {
                orderList: [...orderList],
                date: new Date(),
                delivered: [false],
                totalPrice: totalPrice,
                month: currentMonth,
                key: uniqid(),
              },
            ],
            totalPrice: firebase.firestore.FieldValue.increment(totalPrice),
          })
          .then((e) => console.log("ürünler eklendi"))
          .catch((e) => console.error(e))
          .finally(() => {
            setModalVisible(!modalVisible);
            setVisible(false);
            setItems([]);
          });
  };

  return (
    <>
      <Drawer
        title="Sepetim"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="right"
      >
        <>
          {marketItems.map((item, index) => (
            <div key={index}>
              <Row className="marketdrawer_count">
                <Col span={16}>{`${index + 1}. ${item.title}`}</Col>
                <Col span={6}>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={item.count}
                    value={item.count}
                    onChange={(cnt) => onChange(item.id, cnt)}
                    style={{ marginRight: 5, width: 70 }}
                  />
                </Col>
                <Col span={2}>
                  <Tooltip title="Sepetten çıkar">
                    <Button
                      type="text"
                      danger
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={() => deleteItem(item.id)}
                    />
                  </Tooltip>
                </Col>
              </Row>
              <Row>
                <Col span={16}></Col>
                <Col span={8}>{`Fiyat: ${item.count * item.price} ₺`}</Col>
              </Row>
              <hr />
            </div>
          ))}
        </>
        {items.length > 0 && (
          <>
            <Row>
              <Col span={16}>
                <h4>{`Toplam ${itemCount} ürün`}</h4>
              </Col>
              <Col span={8}>
                <h4>{`Fiyat: ${totalPrice} ₺`}</h4>
              </Col>
            </Row>
            <Row className="marketdrawer_button">
              <Col span={24}>
                <Button
                  type="ghost"
                  shape="round "
                  size="medium"
                  style={{ backgroundColor: "#3dc410", color: "white" }}
                  onClick={() => modalIsVisible(true)}
                >
                  Siparişi Tamamla
                </Button>
              </Col>
            </Row>
          </>
        )}
        {items.length === 0 && (
          <p className="Market_drawer_sepet"> Henüz Sepete Ürün Eklemediniz!</p>
        )}
      </Drawer>
      <ConfirmModal
        modalVisible={modalVisible}
        modalIsVisible={modalIsVisible}
        confirmFunction={() => orderList(marketItems)}
        title={"Siparişinizi onaylıyor musunuz?"}
        subtitle={`Toplam ${itemCount} ürün ve bu ürünlerin toplam fiyatı ${totalPrice} ₺`}
      />
    </>
  );
}

export default MarketDrawer;
