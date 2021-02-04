// components
import Cards from "./components/Cards";
// ant design
import { Card, Col, Row } from "antd";
//styles
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      {/* AYLIK FATURA KISMI */}
      <Cards />

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
