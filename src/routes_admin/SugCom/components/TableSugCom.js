import { useState, useEffect } from "react";
// ant design
import { Table, Tag, Button, Tooltip, Input } from "antd";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";
// moment
import moment from "moment";
//hook-form
import { useForm, Controller } from "react-hook-form";

const { TextArea } = Input;

function TableSugCom() {
  const [sugCom, setSugCom] = useState([]);
  const { handleSubmit, control } = useForm();

  // messages data fetch from firebase
  useEffect(() => {
    db.collection("sugcom").onSnapshot((snapshot) =>
      setSugCom(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
    );
  }, []);

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
    const submit = ({ answer }) => {
      db.collection("sugcom")
        .doc(data.key)
        .update({ answer: answer, status: [false] })
        .then(() => {
          console.log("Başarıyla eklendi");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    };

    return (
      <>
        <h3>
          Kullanıcıdan Gelen {data.sugOrCom === "sug" ? "İstek" : "Şikayet"}
        </h3>
        <h4>{data.title}</h4>
        <p style={{ margin: 0 }}>{data.message}</p>
        <hr />

        {data.status[0] === false ? (
          <>
            <h3>Sizin Verdiğiniz Cevap</h3>
            <h4>{`Cevap: ${data.title}`}</h4>
            <p>{data.answer}</p>
          </>
        ) : (
          <h3>
            <form onSubmit={handleSubmit(submit)}>
              <div className="form_section">
                <div className="form_section">
                  <label>Mesajınızı Yazınız</label>
                  <Controller
                    placeholder="mesajınızı yazınız..."
                    as={TextArea}
                    rows={6}
                    required
                    defaultValue={""}
                    control={control}
                    name="answer"
                  />
                </div>
                <div className="form_buttons">
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    htmlType="submit"
                    className="form_button"
                  >
                    {" "}
                    GÖNDER
                  </Button>
                </div>
              </div>
            </form>
          </h3>
        )}
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
                {tag ? "Devam ediyor" : "Cevaplandı."}
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
        rowExpandable: () => true,
      }}
    />
  );
}

export default TableSugCom;
