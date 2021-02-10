import { useState, useEffect, useContext } from "react";
// ant design
import { Table, Tag, Button, Tooltip } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";
// moment
import moment from "moment";
//context
import { AuthContext } from "../../../context/AuthContext";

function TableSugCom() {
  const [sugCom, setSugCom] = useState([]);

  const { userState } = useContext(AuthContext);

  useEffect(() => {
    db.collection("sugcom")
      .where("userID", "==", userState.uid)
      .onSnapshot((snapshot) =>
        setSugCom(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
      );
  }, [userState.uid]);

  // delete sug-com from firebase
  const deleteSugCom = (docID) => {
    db.collection("sugcom")
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
        
        <h3>Yöneticiden Gelen Cevap</h3>
        <h4>{data.answer}</h4>

        <hr />

        <h3>
          Sizin Gönderdiğiniz {data.sugOrCom === "sug" ? "İstek" : "Şikayet"}
        </h3>
        <h4>{data.title}</h4>
        <p style={{ margin: 0 }}>{data.message}</p>
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
      title: "Konu Başlığı",
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Öncelik Derecesi",
      key: "priority",
      dataIndex: "priority",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag === "urgent" ? "red" : "purple";

            return (
              <Tag color={color} key={tag}>
                {tag === "urgent" ? "Acil" : "Acil Değil"}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Durum",
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
      render: (text) => (
        <Tooltip title="Sil">
          <Button
            type="text"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => deleteSugCom(text.key)}
          />
        </Tooltip>
      ),
    },
  ];

  // sugCom sorting new to old
  sugCom.sort(function (a, b) {
    if (a.date.seconds > b.date.seconds) return -1;
    if (a.date.seconds < b.date.seconds) return 1;
    return 0;
  });

  return (
    <Table
      columns={columns}
      dataSource={sugCom}
      pagination={{ position: ["bottomRight"] }}
      expandable={{
        expandedRowRender: (data) => expandedRow(data),
        rowExpandable: (data) => data.status[0] === false,
      }}
    />
  );
}

export default TableSugCom;
