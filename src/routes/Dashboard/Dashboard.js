import { Card, Col, Row } from "antd";
import ColumnChart from "../../components/ColumnChat";

import "./Dashboard.css";
const style = { background: "#0092ff", padding: "8px 0" };

function Dashboard() {
  return (
    <>
      {/* AYLIK FATURA KISMI */}
      <div className="card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xl={6} lg={6} md={12} sm={6} xs={12}>
            <Card bordered={true} className="card">
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">259 TL</h2>
                  <h3 className="card_detail">Aylık Elektrik Faturası</h3>
                  <p className="card_p">Aylık ortalama 200 TL</p>
                </Col>
                <Col flex={1.5}>
                  <h2 className="card_percantage">7% </h2>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={12} sm={6} xs={12}>
            <Card bordered={true} className="card">
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">259 TL</h2>
                  <h3 className="card_detail">Aylık Elektrik Faturası</h3>
                  <p className="card_p">Aylık ortalama 200 TL</p>
                </Col>
                <Col flex={1.5}>
                  <h2 className="card_percantage">7% </h2>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={12} sm={6} xs={12}>
            <Card bordered={true} className="card">
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">259 TL</h2>
                  <h3 className="card_detail">Aylık Elektrik Faturası</h3>
                  <p className="card_p">Aylık ortalama 200 TL</p>
                </Col>
                <Col flex={1.5}>
                  <h2 className="card_percantage">7% </h2>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={12} sm={6} xs={12}>
            <Card bordered={true} className="card">
              <Row>
                <Col flex={3.5}>
                  <h2 className="card_title">259 TL</h2>
                  <h3 className="card_detail">Aylık Elektrik Faturası</h3>
                  <p className="card_p">Aylık ortalama 200 TL</p>
                </Col>
                <Col flex={1.5}>
                  <h2 className="card_percantage">7% </h2>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      {/* ./ AYLIK FATURA KISMI */}
      <div className="site-card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xl={18} lg={18} md={24} sm={24} xs={24}>
            <Card bordered={true} className="card">
              <Row>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <h3 className="card_detail">Aylık Toplam Gider</h3>
                  <Row>
                    <Col>
                      <h2 className="card_title">259 TL</h2>
                    </Col>
                    <Col className="card_charts_col">
                      <p className="card_charts_p">
                        Geçen ay harcanılan toplam tutar 200 TL
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <ColumnChart />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={24} sm={24} xs={24} className="card_charts_noti" >
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
