import { useState, useEffect } from "react";
// ant design
import { Table, Tag, Button, Tooltip } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../firebase";
// moment
import moment from "moment";

function TableSugCom() {
  const [sugCom, setSugCom] = useState([]);

  //TODO: dynamic user id
  // messages data fetch from firebase
  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("sugcom")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) =>
        setSugCom(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
      );
  }, []);

  // delete sug-com from firebase
  const deleteSugCom = (docID) => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("sugcom")
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
        <h3>
          <em>Yöneticiden Gelen Cevap</em>
        </h3>
        <h4>{`Cevap: ${data.title}`}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          pariatur, quas vero consequatur odit, consectetur sit laboriosam
          mollitia necessitatibus aperiam praesentium corrupti, ea esse facilis
          sint id ex corporis placeat.
        </p>
        <hr />
        <h3>
          <em>Sizin yazınız</em>
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
