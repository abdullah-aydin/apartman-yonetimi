import { useState, useEffect, useContext } from "react";
//styles
import "../Market.css";
// router
import { useHistory } from "react-router-dom";
// ant design
import { Button, Tag, Table, Row, Col } from "antd";
//context
import { MarketContext } from "../../../context/MarketContext";
//moment
import moment from "moment";

function ShoppingList() {
  const [list, setList] = useState([]);
  const { previousOrders } = useContext(MarketContext);

  const history = useHistory();

  useEffect(() => {
    let data = [];
    for (let i = 0; i < previousOrders.length; i++) {
      for (let j = 0; j < previousOrders[i].length; j++) {
        const element = previousOrders[i][j];
        data.push(element);
      }
    }
    // orders sorting new to old
    data.sort(function (a, b) {
      if (a.date.seconds > b.date.seconds) return -1;
      if (a.date.seconds < b.date.seconds) return 1;
      return 0;
    });

    setList(data);
  }, [previousOrders]);

  const backshoppinglist = () => {
    return history.push(`/market`);
  };

  const columns = [
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.seconds - b.date.seconds,
      render: (a) => (
        <span>{moment(a.seconds * 1000).format("DD.MM.YYYY")}</span>
      ),
      sortDirections: ["descend"],
      // defaultSortOrder: ["descend"],
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
      <Row className="shoppinglist_row">
        <Col xl={16} lg={18} md={24} sm={24} xs={24}>
          <Table
            columns={columns}
            dataSource={list}
            pagination={{ position: ["bottomRight"] }}
            expandable={{
              expandedRowRender: (data) => expandedRow(data),
              rowExpandable: (data) => data.delivered !== [],
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ShoppingList;
