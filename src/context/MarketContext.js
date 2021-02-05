import React, { createContext, useEffect, useState } from "react";
import db from "../config/firebase";

import moment from "moment";

export const MarketContext = createContext(null);

export const MarketProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [ordersPrice, setOrdersPrice] = useState([]);

  const currentMonth = moment().format("YYYY-MM");

  console.log(ordersPrice);


  const totalPayment = ordersPrice.reduce((a, b) => a + b.price, 0);

  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
        setOrdersPrice(
          snapshot.docs.map((doc) => ({
            title: doc.id,
            price: doc.data().totalPrice,
          }))
        );
      });
  }, []);

  useEffect(() => {
    orders[orders.length - 1]?.key !== undefined &&
      orders[orders.length - 1]?.key !== currentMonth &&
      db
        .collection("users")
        .doc("903rfcO6sbX7hJISg1ND")
        .collection("orders")
        .doc(`${currentMonth}`)
        .set({
          totalPrice: 0,
          orders: [],
        })
        .then((e) => console.log("ürünler eklendi"))
        .catch((e) => console.error(e));
  }, [orders, currentMonth]);

  return (
    <MarketContext.Provider
      value={{
        orders,
        ordersPrice,
        totalPayment
      }}
    >
      {props.children}
    </MarketContext.Provider>
  );
};
