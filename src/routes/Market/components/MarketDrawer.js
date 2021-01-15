import { useState, useEffect, useRef } from "react";
import { Drawer, Button, Radio, Space, InputNumber } from "antd";

function MarketDrawer({ visible, onClose, items, setItems }) {
  const [marketItems, setMarketItems] = useState(items);

  useEffect(() => {
    setMarketItems(items);
  }, [items]);

  function onChange(id, cnt) {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              count: cnt,
            }
          : item
      )
    );
  }

  return (
    <>
      <Drawer
        title="Sepetim"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="right"
      >
        {marketItems.map((item, index) => (
          <>
            <div className="marketdrawer_count" key={index}>
              <p className="marketdrawer_p">{item.title} </p>
              <InputNumber
                min={1}
                max={10}
                defaultValue={item.count}
                value={item.count}
                onChange={(cnt) => onChange(item.id, cnt)}
              />
            </div>
          </>
        ))}
        {items.length === 0 && (
          <p className="Market_drawer_sepet"> Henüz Sepete Ürün Eklemediniz!</p>
        )}
      </Drawer>
    </>
  );
}

export default MarketDrawer;
