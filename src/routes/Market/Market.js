import "./Market.css";

import { Card, Col, Row } from "antd";

function Market() {
  const { Meta } = Card;
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
                <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/1-Icecek-Kategorisi-2020-1_256x.png?v=1607096839%20256w"
              />
            }
          >
            <Row>
            <Meta title="İçecekler" className="card_category_name" />
            </Row>
          </Card>
        </Col>

        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
                <img className="card_img" 
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/2-Snacks-Kategorisi-2020-1_256x.png?v=1607096876%20256w"
              />
            }
          >
            <Row>
              <Meta title="Atıştırmalık" className="card_category_name" />
            </Row>
          </Card>
        </Col>

        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/3-Lebensmittel-Kategorisi-2020-1_256x.png?v=1607096918"
              />
            }
          >
            <Row>
              <Meta title="Temel Gıda" className="card_category_name" />
            </Row>
          </Card>
        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/4-Dondurma-Kategorisi-2020-1_256x.png?v=1607096932"
              />
            }
          >
            <Row>
              <Meta title="Dondurma" className="card_category_name" />
            </Row>
          </Card>
        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/5-Baby-Kategorisi-2020-1_256x.png?v=1607096947"
              />
            }
          >
            <Row>
              <Meta title="Bebek" className="card_category_name" />
            </Row>
          </Card>
        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/6-Hygiene-Kategorisi-2020-1_256x.png?v=1607096965"
              />
            }
          >
            <Row>
              <Meta title="Hijyen" className="card_category_name" />
            </Row>
          </Card>
        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/7-Tierbedarf-Kategorisi-2020-1_256x.png?v=1607096980"
              />
            }
          >
            <Row>
              <Meta title="Evcil Hayvan" className="card_category_name" />
            </Row>
          </Card>
        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12} className="card_col">
          <Card
            className="card_market"
            hoverable
            
            cover={
               <img className="card_img"
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0516/5423/0205/files/8-Adult-Kategorisi-2020-1_256x.png?v=1607096997"
              />
            }
          >
            <Row>
              <Meta title="Cinsellik" className="card_category_name" />
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Market;
