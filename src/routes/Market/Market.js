import { useEffect, useState } from "react";
import "./Market.css";
import { Button, Card, Col, Row, Badge } from "antd";
// ant desgin icons
import { ShoppingCartOutlined } from "@ant-design/icons";
import { products, categorys } from "../../constant/data";
// firebase
// import db from "../../firebase";

const { Meta } = Card;

function Market() {
  const [productItems, setProductItems] = useState([]);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    let data = [];

    // shows the content of the selected items
    switch (select) {
      case 0:
        products.forEach((e) => {
          e.categoryId === 0 && data.push(e);
        });
        break;
      case 1:
        products.forEach((e) => {
          e.categoryId === 1 && data.push(e);
        });
        break;
      case 2:
        products.forEach((e) => {
          e.categoryId === 2 && data.push(e);
        });
        break;
      case 3:
        products.forEach((e) => {
          e.categoryId === 3 && data.push(e);
        });
        break;
      case 4:
        products.forEach((e) => {
          e.categoryId === 4 && data.push(e);
        });
        break;
      case 5:
        products.forEach((e) => {
          e.categoryId === 5 && data.push(e);
        });
        break;
      case 6:
        categorys.forEach((e) => {
          e.categoryId === 6 && data.push(e);
        });
        break;
      case 7:
        products.forEach((e) => {
          e.categoryId === 7 && data.push(e);
        });
        break;
      case 8:
        products.forEach((e) => {
          e.categoryId === 8 && data.push(e);
        });
        break;
      default:
    }

    setProductItems(data);
  }, [select]);

  const categorytList = categorys.map((category, index) => (
    <Col
      xl={3}
      lg={3}
      md={12}
      sm={12}
      xs={12}
      className="market_col"
      key={category.id}
    >
      <Card
        className="card_market"
        hoverable
        cover={<img className="card_img" alt="example" src={category.img} />}
        onClick={() => {
          setSelect(category.id);
        }}
      >
        <Row>
          <Meta title={category.title} className="card_category_name" />
        </Row>
      </Card>
    </Col>
  ));

  const productList = productItems.map((product, index) => (
    <Col
      xl={4}
      lg={4}
      md={16}
      sm={16}
      xs={16}
      className="market_product_col"
      key={index}
    >
      <Card
        className="card_market_product"
        hoverable
        cover={
          <img alt="example" className="card_product_img" src={product.img} />
        }
      >
        <Meta
          className="card_product_name"
          title={product.title}
          description={`${product.price} TL`}
        />
        <Button className="market_buy_button">Sepete Ekle</Button>
      </Card>
    </Col>
  ));

  return (
    <>
      <div className="container_title">
        <h1>Anasayfa</h1>
        <Badge count={5}>
          <ShoppingCartOutlined />
        </Badge>
      </div>
      <hr className="container_hr"/>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{categorytList}</Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{productList}</Row>
    </>
  );
}

export default Market;
