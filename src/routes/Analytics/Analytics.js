// ant design
import { Card, Col, Row } from "antd";
//components
import ColumnChart from "../../components/ColumnChat";

function Analytics() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xl={12} lg={12} md={16} sm={16} xs={16}>
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
      </Row>
    </div>
  );
}

export default Analytics;
