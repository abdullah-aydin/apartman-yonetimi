import { useState, useEffect } from "react";
// ant design
import { Table, Button, Tooltip } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";

function TableUsers() {
  const [users, setUsers] = useState([]);
  //TODO: dynamic user id
  // messages data fetch from firebase
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
    );
  }, []);

  // delete sug-com from firebase
  const deleteUsers = (docID) => {
    db.collection("users")
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
        <p style={{ margin: 0 }}>{data.message}</p>
      </>
    );
  };

  const columns = [
    {
      title: "Daire No",
      dataIndex: "flatNumber",
      key: "flatNumber",
      // sorter: (a, b) => console.log(a.seconds * 1000),
      render: (text) => <span>{text}</span>,
      sortDirections: ["ascend"],
    },
    {
      title: "Adı Soyadı",
      dataIndex: "userName",
      key: "userName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            onClick={() => deleteUsers(text.key)}
          />
        </Tooltip>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={{ position: ["bottomRight"] }}
      expandable={{
        expandedRowRender: (data) => expandedRow(data),
        rowExpandable: () => false,
      }}
    />
  );
}

export default TableUsers;
