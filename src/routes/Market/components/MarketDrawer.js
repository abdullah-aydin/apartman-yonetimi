import { Drawer, Button, Radio, Space, InputNumber } from "antd";

function MarketDrawer({ visible, onClose, items }) {


  function onChange(value) {
    console.log("changed", value);
  }

  return (
    <>
      <Drawer
        title="Sepetim"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="right"
      >
        {/* {items.map((item, index) => (
          <div className="marketdrawer_count" key={index}>
            <p>{item.title} </p>
            <InputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
            />
          </div>
        ))}
        {items.length === 0 && (
          <p className="Market_drawer_sepet"> Henüz Sepete Ürün Eklemediniz!</p>
        )} */}
      </Drawer>
    </>
  );
}

export default MarketDrawer;
