import { useState, useEffect } from "react";
// ant design
import { Table, Tag, Button, Input } from "antd";
// ant design icons
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
//firebase
import db from "../../../config/firebase";
// moment
import moment from "moment";
//hook-form
import { useForm, Controller } from "react-hook-form";

function TableBills() {
  const [bills, setBills] = useState([]);
  const { handleSubmit, control } = useForm();

  //console.log(bills)
  //TODO: dynamic user id
  // messages data fetch from firebase
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setBills(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
    );
  }, []);

  console.log(bills);

  // expanded row menu
  const expandedRow = (data) => {
    const submit = (e) => {
      console.log(e);
      db.collection("users")
        .get()
        .then((doc) => console.log(doc.data()));
    };

    return (
      <>
        <h3>
          <em> {moment().format("MMMM")} Dönemi</em>
        </h3>
        <hr />
        <form onSubmit={handleSubmit(submit)}>
          <div className="form_section">
            <label>Elektrik Faturası</label>
            <Controller
              placeholder="Elektrik faturasını giriniz..."
              as={Input}
              defaultValue={""}
              control={control}
              name="electric"
            />
          </div>
          <div className="form_section">
            <label>Doğalgaz Faturası</label>
            <Controller
              placeholder="Doğalgaz faturasını giriniz..."
              as={Input}
              defaultValue={""}
              control={control}
              name="naturalGas"
            />
          </div>
          <div className="form_section">
            <label>Su Faturası</label>
            <Controller
              placeholder="Su faturasını giriniz..."
              as={Input}
              defaultValue={""}
              control={control}
              name="water"
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
              EKLE
            </Button>
          </div>
        </form>
      </>
    );
  };

  const fakeData = [
    {
      key: "1",
      flatNumber: "1",
      userName: "Ahmet Aydın",
      electric: "99.50",
      naturalGas: "",
      water: "49.50",
    },
  ];

  const columns = [
    {
      title: "Daire",
      dataIndex: "flatNumber",
      key: "flatNumber",
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
      title: "Elektrik",
      key: "electric",
      dataIndex: "electric",
      render: (bill) => {
        let color = bill ? "red" : "green";

        return (
          <Tag color={color} key={bill}>
            {bill ? <CloseOutlined /> : <CheckOutlined />}
          </Tag>
        );
      },
    },
    {
      title: "Doğalgaz",
      key: "naturalGas",
      dataIndex: "naturalGas",
      render: (bill) => {
        let color = bill ? "red" : "green";

        return (
          <Tag color={color} key={bill}>
            {bill ? <CloseOutlined /> : <CheckOutlined />}
          </Tag>
        );
      },
    },
    {
      title: "Su",
      key: "water",
      dataIndex: "water",
      render: (bill) => {
        let color = bill ? "red" : "green";

        return (
          <Tag color={color} key={bill}>
            {bill ? <CloseOutlined /> : <CheckOutlined />}
          </Tag>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={fakeData}
      pagination={{ position: ["bottomRight"] }}
      expandable={{
        expandedRowRender: (data) => expandedRow(data),
        rowExpandable: () => true,
      }}
    />
  );
}

export default TableBills;
