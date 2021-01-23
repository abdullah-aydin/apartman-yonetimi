import { useState, useEffect } from "react";
//styles
import "../Market.css";
// router
import { useHistory } from "react-router-dom";
// ant design
import {
  
  Button,
  Tag,
  Table,
  Tooltip,
} from "antd";
//firebase
import db from "../../../firebase";

import moment from "moment";

function ShoppingList() {
  const [orders, setOrders] = useState([]);

  // orders data fetch from firebase
  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>
        setOrders(snapshot.docs.map((doc) => console.log(doc.data())))
      );
  }, [orders]);

  console.log(orders);
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
      title: "Toplam Tutar",
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },

    {
      title: "Sipariş Durumu",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag ? "geekblue" : "green";

            return (
              <Tag color={color} key={tag}>
                {tag ? "Devam ediyor" : "Tamamlandı"}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "İşlem Yap",
      key: "delete",
      render: (text) => <Tooltip title="Sil"></Tooltip>,
    },
  ];

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
        dataSource={orders}
        pagination={{ position: ["bottomRight"] }}
        expandable={{
          // expandedRowRender: (data) => expandedRow(data),
          // rowExpandable: (data) => data.status[0] === false,
        }}
      />
    </div>
  );
}

export default ShoppingList;
