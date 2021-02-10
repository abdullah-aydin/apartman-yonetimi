import { useState, useEffect } from "react";
// ant design
import { Table, Button, Tooltip} from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";
// moment
import moment from "moment";


function TableExpense() {
  const [expense, setExpense] = useState([]);

  //TODO: dynamic user id
  // messages data fetch from firebase
  useEffect(() => {
    db.collection("expense")
      .onSnapshot((snapshot) =>
        setExpense(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
      );
  }, []);

  // delete sug-com from firebase
  const deleteExpense = (docID) => {
    db.collection("expense")
      .doc(docID)
      .delete()
      .then(() => {
        console.log("Başarıyla sildiniz.");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  

  // expanded row menu
  const expandedRow = (data) => {
    return (
      <>
        <h3>{data.title}</h3>
        <p style={{ margin: 0 }}>{data.explanation}</p>
      </>
    );
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
      title: "Başlık",
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Harcanan Miktar",
      dataIndex: "price",
      key: "price",
      render: (text) => <span>{text}</span>,
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
            onClick={() => deleteExpense(text.key)}
          />
        </Tooltip>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={expense}
      pagination={{ position: ["bottomRight"] }}
      expandable={{
        expandedRowRender: (data) => expandedRow(data),
        rowExpandable: () => true,
      }}
    />
  );
}

export default TableExpense;
