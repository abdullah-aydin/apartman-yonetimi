import { useContext, useEffect, useState } from "react";
//route
import { useHistory } from "react-router-dom";
//context
import { MarketContext } from "../../context/MarketContext";
//style
import "./Market.css";
// antdesign
import { Button, Card, Col, Row, Badge } from "antd";
// ant desgin icons
import { ShoppingCartOutlined } from "@ant-design/icons";
import { products, categorys } from "../../constant/data";
//components
import MarketDrawer from "./components/MarketDrawer";

const { Meta } = Card;

function Market() {
  const [productItems, setProductItems] = useState([]);
  const [select, setSelect] = useState(0);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("Atıştırmalık");

  const { items, setItems } = useContext(MarketContext);

  const history = useHistory();

  const onClose = () => {
    setVisible(false);
  };

  const itemsAdd = (product) => {
    if (items.length === 0) {
      return setItems([product]);
    }

    let updated = false;
    items.map(
      (item) =>
        item.id === product.id &&
        (setItems(
          items.map((newItem) =>
            newItem.id === product.id
              ? {
                  ...newItem,
                  count: newItem.count + 1,
                }
              : newItem
          )
        ),
        (updated = true))
    );
    !updated && setItems([...items, product]);
  };

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
        products.forEach((e) => {
          e.categoryId === 6 && data.push(e);
        });
        break;
      case 7:
        products.forEach((e) => {
          e.categoryId === 7 && data.push(e);
        });
        break;
      default:
    }

    setProductItems(data);
  }, [select]);

  const categorytList = categorys.map((category, index) => (
    <Col
      xl={3}
      lg={6}
      md={8}
      sm={8}
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
          setTitle(category.title);
        }}
      ></Card>
      <Meta title={category.title} className="card_category_name" />
    </Col>
  ));

  const productList = productItems.map((product, index) => (
    <Col xxl={4} xl={6} lg={8} md={8} sm={12} xs={16} key={index}>
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
          description={`${product.price}  TL`}
        />
        <Button className="market_buy_button" onClick={() => itemsAdd(product)}>
          Sepete Ekle
        </Button>
      </Card>
    </Col>
  ));

  // go to new-sug-com page
  const newshoppinglist = () => {
    return history.push(`/shopping-list`);
  };

  return (
    <>
      <div className="market_container">
        <div className="container_title">
          <h1 className="Market_title">Market</h1>

          <div className="market_badge_shoppinglist">
            <Button
              className="shoppinglist_button"
              type="default"
              shape="round"
              size="large"
              onClick={newshoppinglist}
            >
              Siparişlerim
            </Button>
            <Badge
              className="market_badge"
              count={items.length}
              onClick={() => setVisible(true)}
            >
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
        <hr className="container_hr" />

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{categorytList}</Row>

        <div className="market_product_col">
          <h1>{title}</h1>
        </div>
        <hr className="container_hr" />

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{productList}</Row>

        <MarketDrawer
          visible={visible}
          setVisible={setVisible}
          onClose={onClose}
          items={items}
          setItems={setItems}
        />
      </div>
    </>
  );
}

export default Market;
