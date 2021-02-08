import { useContext, useState, useEffect } from "react";
// ant design
import { Card, Col, Row } from "antd";
// icons
import { RiFireFill } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
      id: 0,
      title: "Su",
      className: "cardOne",
      icon: <IoWater />,
      thisMonth: thisMonthPriceForCards(2) ? thisMonthPriceForCards(2) : 0,
      averagePrice: averagePriceForCards(2),
      percantage: percantageForCards(2),
    },

    {
      id: 1,
      title: "Doğalgaz",
      className: "cardTwo",
      icon: <RiFireFill />,
      thisMonth: thisMonthPriceForCards(1) ? thisMonthPriceForCards(1) : 0,
      averagePrice: averagePriceForCards(1),
      percantage: percantageForCards(1),
    },
    {
      id: 2,
      title: "Elektrik",
      className: "cardThree",
      icon: <GiElectric />,
      thisMonth: thisMonthPriceForCards(0) ? thisMonthPriceForCards(0) : 0,
      averagePrice: averagePriceForCards(0),
      percantage: percantageForCards(0),
    },
    {
      id: 3,
      title: "Market",
      className: "cardFour",
      icon: <AiOutlineShoppingCart />,
      thisMonth: market.currentMonthMarketPrice
        ? market.currentMonthMarketPrice
        : 0,
      averagePrice: market.average !== "NaN" ? market.average : 0,
      percantage: market.percantage ? market.percantage : 0,
    },
  ];

  useEffect(() => {
    const orders = [...ordersPrice];
    const currentMonthMarketPrice = orders.pop();

    const totalMarketPrice = orders.reduce((a, b) => a + b.price, 0);

    const average = (totalMarketPrice / orders.length).toFixed(2);
    const percantage = parseInt(
      (((currentMonthMarketPrice?.price - average) / average) * 100).toFixed(1)
    );

    setMarket({
      currentMonthMarketPrice: currentMonthMarketPrice?.price,
      average: average,
      percantage: percantage,
    });
  }, [ordersPrice]);

  return (
    <div className="card-wrapper">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="card_row">
        {billsCards.map((card) => (
          <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="card_col"
            key={card.id}
          >
            <Card bordered={true} className={`card headCard ${card.className}`}>
              <Row className="card_head_row">
                <Col className="card_head_col">
                  <span className={`card_icon icon_${card.id + 1}`}>
                    {card.icon}
                  </span>
                  <h2 className="card_title">{card.title}</h2>
                </Col>
                <Col className="card_head">
                  <h1 className="card_price">{card.thisMonth} ₺</h1>
                </Col>
              </Row>
              <Row>
                <Col className="card_body"></Col>
              </Row>
              <Row>
                <Col className="card_body card_average">
                  <span>
                    Aylık ortalama <strong>{card.averagePrice} ₺</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col className="card_body card_percantage">
                  {card.percantage > 0 ? (
                    <span>
                      <p>Ortalamaya göre</p>
                      <b style={{ color: "red" }}>{card.percantage}% artış</b>
                    </span>
                  ) : (
                    <span>
                      <p>Ortalamaya göre</p>
                      <b style={{ color: "darkcyan" }}>
                        {card.percantage !== "NaN" ? card.percantage : 0}% düşüş
                      </b>
                    </span>
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
