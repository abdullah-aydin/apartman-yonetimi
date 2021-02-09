import { useState, useEffect } from "react";
//ant design
import "antd/dist/antd.css";
import { Card, Col, Table } from "antd";
//styles
import "../Dashboard.css";
// db
import db from "../../../config/firebase";
//moment
import moment from "moment";

function ExpenseTable() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    db.collection("expense").onSnapshot((snapshot) =>
      setExpense(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const columns = [
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      // sorter: (a, b) => console.log(a.seconds * 1000),
      render: (a) => <span>{moment(a * 1000).format("DD.MM.YYYY")}</span>,
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
      key: "price",
      dataIndex: "price",
      render: (text) => <span>{text} ₺</span>,
    },
  ];

  // expanded row menu
  const expandedRow = (data) => {
    return (
      <>
        <h3>{data.title}</h3>
        <p>{data.explanation}</p>
        <b>{data.price} ₺</b>
      </>
    );
  };

  return (
    <Col
      xxl={12}
      xl={16}
      lg={16}
      md={24}
      sm={24}
      xs={24}
      className="dashboard_col"
    >
      <Card bordered={true} className="card">
        <h2
          style={{
            color: "#3b4cb8",
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Apartman Giderleri
        </h2>
        <Col style={{ overflowY: "auto", maxHeight: "455px" }}>
          <Table
            columns={columns}
            dataSource={expense}
            pagination={{
              defaultPageSize: 6,
              position: ["bottomRight"],
            }}
            expandable={{
              expandedRowRender: (data) => expandedRow(data),
              rowExpandable: () => true,
            }}
          />
        </Col>
      </Card>
    </Col>
  );
}

export default ExpenseTable;
