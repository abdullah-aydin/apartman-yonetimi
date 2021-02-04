import { useState, useEffect, useContext } from "react";
// ant design
import { Card, Col, Row } from "antd";
// ant design icon
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
//styles
import "./Dashboard.css";
//firebase
import db from "../../config/firebase";
// context
import { BillsContext } from "../../context/BillsContext";
import { MarketContext } from "../../context/MarketContext";

function Dashboard() {
  const { averagePriceForCards, thisMonthPriceForCards, percantageForCards } = useContext(BillsContext);
  const { market } = useContext(MarketContext);

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
                    <h2 className="card_title">{thisMonthPriceForCards(card.no)} ₺</h2>
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
