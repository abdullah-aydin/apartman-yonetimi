import { useState } from "react";
import "./Market.css";
// TODO:"DATAYI İMPORT ET"
import { Button, Card, Col, Row } from "antd";
import {products,categorys} from "../../constant/data"
  const { Meta } = Card;
 

  function Market() {
    
    {
      /*
    const [product, setProduct] = useState(["içecekler"]);
    console.log(product);*/
    }
 

  const categorytList = categorys.map((category,index) => (
    <Col xl={3} lg={3} md={12} sm={12} xs={12} className="market_col" key={category.id}>
      <Card
        className="card_market"
        hoverable
        cover={<img className="card_img" alt="example" src={category.img} />}
      >
        <Row>
          <Meta title={category.title} className="card_category_name" />
          
        </Row>
      </Card>
    </Col>
  ));

  
const productList = products.map((product,index)=>(
 <Col xl={4} lg={4} md={16} sm={16} xs={16} className="market_product_col" key={index}>
  
  <Card
   
   className="card_market_product"
    hoverable
    cover={<img alt="example" className="card_product_img" src={product.img} />}
  >
    
    <Meta className="card_product_name"  title={product.title} description={`${product.price} TL`} />
    <Button className="market_buy_button" >Sepete Ekle</Button>
  
  </Card>
  
  </Col>
));

     

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {categorytList}
     
      </Row>
    
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      
      {productList}
      </Row>
   
     
    </>
  )
}

export default Market;
