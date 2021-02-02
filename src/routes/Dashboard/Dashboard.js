import { useState, useEffect } from "react";
// ant design
import { Card, Col, Row } from "antd";
// ant design icon
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
//styles
import "./Dashboard.css";
//firebase
import db from "../../config/firebase";

function Dashboard() {
  const [bills, setBills] = useState([]);
  const [orders, setOrders] = useState([]);
  const [market, setMarket] = useState({
    currentMonthMarketPrice: 0,
    totalMarketPrice: 0,
    average: 0,
    percantage: 0,
  });

  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("bill")
      .onSnapshot((snapshot) =>
        setBills(
          snapshot.docs.map((doc) => ({
            bill: doc.id,
            data: doc.data(),
          }))
        )
      );

    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>
        setOrders(snapshot.docs.map((doc) => doc.data().totalPrice))
      );
  }, []);

  useEffect(() => {
    const currentMonthMarketPrice = orders.pop();

    const totalMarketPrice = orders.reduce((a, b) => a + b, 0);
    const average = totalMarketPrice / orders.length;
    const percantage = parseInt(
      (
        ((currentMonthMarketPrice - average) / currentMonthMarketPrice) *
        100
      ).toFixed(1)
    );

    setMarket({
      currentMonthMarketPrice: currentMonthMarketPrice,
      average: average,
      percantage: percantage,
    });
  }, [orders]);

  const avarage = (dt) => {
    if (dt) {
      const allMonthBills = Object.values(dt);

      // dt items sorts from first date to last date
      allMonthBills.sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });

      const lastBill = allMonthBills.pop();

      let totalPrice = 0;
      allMonthBills.forEach((d) => (totalPrice += d.price));

      let avrg = totalPrice / allMonthBills.length;

      return { avrg: avrg.toFixed(2), lastBill: lastBill };
    }

    return { avrg: 0, lastBill: 0 };
  };

  const thisMonthPrice = (count) => {
    let price = avarage(bills[count]?.data).lastBill.price;
    return price;
  };

  const averagePrice = (count) => {
    let price = avarage(bills[count]?.data).avrg;
    return price;
  };

  const percantage = (count) => {
    let per = (
      ((thisMonthPrice(count) - averagePrice(count)) / thisMonthPrice(count)) *
      100
    ).toFixed(1);
    return per;
  };

  const billsCards = [
    {
      title: "Elektrik",
      className: "cardOne",
      no: 0,
    },
    {
      title: "Doğalgaz",
      className: "cardTwo",
      no: 1,
    },
    {
      title: "Su",
      className: "cardThree",
      no: 2,
    },
  ];

  return (
    <>
      {/* AYLIK FATURA KISMI */}
      <div className="card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {billsCards.map((card) => (
            <Col
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="card_col"
              key={card.no}
            >
              <Card bordered={true} className={`card ${card.className}`}>
                <Row>
                  <Col flex={3.5}>
                    <h2 className="card_title">{thisMonthPrice(card.no)} ₺</h2>
                    <h3 className="card_detail">
                      {`Aylık ${card.title} Faturası `}
                    </h3>
                    <p className="card_p">
                      Aylık ortalama <b>{averagePrice(card.no)} ₺</b>
                    </p>
                  </Col>
                  <Col flex={1.5}>
                    {percantage(card.no) > 0 ? (
                      <h2 className="card_percantage negative">
                        <CaretUpOutlined />
                        {percantage(card.no)}%
                      </h2>
                    ) : (
                      <h2 className="card_percantage positive">
                        <CaretDownOutlined />
                        {percantage(card.no)}%
                      </h2>
                    )}
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col xl={6} lg={6} md={12} sm={12} xs={12} className="card_col">
            <Card bordered={true} className="card cardFour">
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">
                    {market.currentMonthMarketPrice} ₺
                  </h2>
                  <h3 className="card_detail">Aylık Market Gideri</h3>
                  <p className="card_p">
                    Aylık ortalama <b>{market.average} ₺</b>
                  </p>
                </Col>
                <Col flex={1.5}>
                  {market.percantage > 0 ? (
                    <h2 className="card_percantage negative">
                      <CaretUpOutlined />
                      {market.percantage}%
                    </h2>
                  ) : (
                    <h2 className="card_percantage positive">
                      <CaretDownOutlined />
                      {market.percantage}%
                    </h2>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      {/* ./ AYLIK FATURA KISMI */}
      <div className="site-card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            xl={6}
            lg={6}
            md={24}
            sm={24}
            xs={24}
            className="card_charts_noti"
          >
            <Card bordered={true} className="card">
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <h1>Duyurular</h1>
              </Col>
            </Card>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={24}
            sm={24}
            xs={24}
            className="card_charts_noti"
          >
            <Card bordered={true} className="card">
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <h1>Duyurular</h1>
              </Col>
            </Card>
          </Col>

          {/* CUSTOMER REVIEW */}
          {/* <Col xl={6} lg={6} md={24} sm={24} xs={24}>
            <Card title={`${123123}`} bordered={true}>
              Aylık Elektrik Faturası
            </Card>
          </Col> */}
          {/* CUSTOMER REVIEW */}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
