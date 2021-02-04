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
      key: 0,
      title: "Elektrik",
      className: "cardOne",
      thisMonth: thisMonthPriceForCards(0),
      averagePrice: averagePriceForCards(0),
      percantage: percantageForCards(0),
    },
    {
      key: 1,
      title: "Doğalgaz",
      className: "cardTwo",
      thisMonth: thisMonthPriceForCards(1),
      averagePrice: averagePriceForCards(1),
      percantage: percantageForCards(1),
    },
    {
      key: 2,
      title: "Su",
      className: "cardThree",
      thisMonth: thisMonthPriceForCards(2),
      averagePrice: averagePriceForCards(2),
      percantage: percantageForCards(2),
    },
    {
      key: 3,
      title: "Market",
      className: "cardFour",
      thisMonth: market.currentMonthMarketPrice,
      averagePrice: market.average,
      percantage: market.percantage,
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
            key={card.key}
          >
            <Card bordered={true} className={`card ${card.className}`}>
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">{card.thisMonth} ₺</h2>
                  <h3 className="card_detail">
                    {`Aylık ${card.title} Faturası `}
                  </h3>
                  <p className="card_p">
                    Aylık ortalama <b>{card.averagePrice} ₺</b>
                  </p>
                </Col>
                <Col flex={1.5}>
                  {card.percantage > 0 ? (
                    <h2 className="card_percantage negative">
                      <CaretUpOutlined />
                      {card.percantage}%
                    </h2>
                  ) : (
                    <h2 className="card_percantage positive">
                      <CaretDownOutlined />
                      {card.percantage}%
                    </h2>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
