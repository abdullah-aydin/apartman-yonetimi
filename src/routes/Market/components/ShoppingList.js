import React from "react";
import "../Market.css";
import { useState, useEffect } from "react";
// ant design icon
import { DeleteOutlined } from "@ant-design/icons";
//hook-form
import { useForm, Controller } from "react-hook-form";
// router
import { useHistory } from "react-router-dom";
// ant design
import {
  Card,
  Col,
  Row,
  Button,
  Input,
  Select,
  Tag,
  Space,
  Table,
  Tooltip,
} from "antd";

import moment from "moment";

function ShoppingList() {
  const [sugCom, setSugCom] = useState([]);
  const { handleSubmit, control } = useForm();

  const history = useHistory();

  const backshoppinglist = () => {
    return history.push(`/market`);
  };

  const expandedRow = (data) => {
    return <></>;
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
        dataSource={sugCom}
        pagination={{ position: ["bottomRight"] }}
        expandable={{
          expandedRowRender: (data) => expandedRow(data),
          rowExpandable: (data) => data.status[0] === false,
        }}
      />
    </div>
  );
}

export default ShoppingList;
