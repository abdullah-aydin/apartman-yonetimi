import { useContext, useState, useEffect } from "react";
// ant design
import { Card, Col, Row } from "antd";
// ant design icon
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
// context
import { BillsContext } from "../../../context/BillsContext";
import { MarketContext } from "../../../context/MarketContext";
//styles
import "../Dashboard.css";

function Cards() {
  const {
    averagePriceForCards,
    thisMonthPriceForCards,
    percantageForCards,
  } = useContext(BillsContext);
  const { ordersPrice } = useContext(MarketContext);

  const [market, setMarket] = useState({
    currentMonthMarketPrice: 0,
    totalMarketPrice: 0,
    average: 0,
    percantage: 0,
  });

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

  useEffect(() => {
    const orders = [...ordersPrice];

    const currentMonthMarketPrice = orders.pop();

    const totalMarketPrice = orders.reduce((a, b) => a + b, 0);
    const average = (totalMarketPrice / orders.length).toFixed(2);
    const percantage = parseInt(
      (((currentMonthMarketPrice - average) / average) * 100).toFixed(1)
    );

    setMarket({
      currentMonthMarketPrice: currentMonthMarketPrice,
      average: average,
      percantage: percantage,
    });
  }, [ordersPrice]);

  return (
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
                  <h2 className="card_title">
                    {thisMonthPriceForCards(card.no)} ₺
                  </h2>
                  <h3 className="card_detail">
                    {`Aylık ${card.title} Faturası `}
                  </h3>
                  <p className="card_p">
                    Aylık ortalama <b>{averagePriceForCards(card.no)} ₺</b>
                  </p>
                </Col>
                <Col flex={1.5}>
                  {percantageForCards(card.no) > 0 ? (
                    <h2 className="card_percantage negative">
                      <CaretUpOutlined />
                      {percantageForCards(card.no)}%
                    </h2>
                  ) : (
                    <h2 className="card_percantage positive">
                      <CaretDownOutlined />
                      {percantageForCards(card.no)}%
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
  );
}

export default Cards;
