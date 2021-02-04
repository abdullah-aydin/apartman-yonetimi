import { useState, useEffect } from "react";
//styles
import "../Market.css";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Button, Tag, Table, Tooltip } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";
//moment
import moment from "moment";

function ShoppingList() {
  const [orderList, setOrderList] = useState([]);

  // setOrderList([...orderList, ...doc.data().orders])
  // orders data fetch from firebase
  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => 
          setOrderList(doc.data().orders)
        )
      );
  }, []);


  const history = useHistory();

  const backshoppinglist = () => {
    return history.push(`/market`);
  };

  const columns = [
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      // sorter: (a, b) => console.log(a.seconds * 1000),
      render: (a) => (
        <span>{moment(a.seconds * 1000).format("DD.MM.YYYY")}</span>
      ),
      sortDirections: ["ascend"],
    },
    {
      title: "Sipariş Durumu",
      key: "delivered",
      dataIndex: "delivered",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag === false ? "geekblue" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag === false ? "Devam ediyor" : "Teslim edildi"}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Toplam Tutar",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => <span>{`${text} ₺`}</span>,
    },
    {
      title: "İşlem Yap",
      key: "delete",
      render: (text) => (
        <Tooltip title="Sil">
          <Button
            type="text"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            // onClick={() => deleteSugCom(text.key)}
          />
        </Tooltip>
      ),
    },
  ];

  // expanded row menu
  const expandedRow = (data) => {
    return (
      <>
        <h3>Satın Aldığınız Ürünler</h3>
        <ul>
          {data.orderList.map((order) => (
            <li>{`${order.title} (${order.count} adet) - ${
              order.price * order.count
            } ₺`}</li>
          ))}
        </ul>
        <h4>{`Toplam Fiyatı: ${data.totalPrice} ₺`}</h4>
      </>
    );
  };

  return (
    <div className="shoppinglist_container">
      <div className="container_title">
        <h1 className="Market_title">Market</h1>

        <div className="market_badge_shoppinglist">
          <Button
            className="shoppinglist_button"
            type="default"
            shape="round"
            size="medium"
            onClick={backshoppinglist}
          >
            Alışverişe Devam
          </Button>
        </div>
      </div>
      <hr className="container_hr" />

      <Table
        className="shoppinglist_table"
        columns={columns}
        dataSource={orderList}
        pagination={{ position: ["bottomRight"] }}
        expandable={
          {
            expandedRowRender: (data) => expandedRow(data),
            rowExpandable: (data) => data.delivered !== [],
          }
        }
      />
    </div>
  );
}

export default ShoppingList;
