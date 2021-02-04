import React, { createContext, useEffect, useState } from "react";
import db from "../config/firebase";

import moment from "moment";

export const MarketContext = createContext(null);

export const MarketProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [ordersPrice, setOrdersPrice] = useState([])
  const [market, setMarket] = useState({
    currentMonthMarketPrice: 0,
    totalMarketPrice: 0,
    average: 0,
    percantage: 0,
  });


  const currentMonth = moment().format("YYYY-MM");

  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>{
        setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
        setOrdersPrice(snapshot.docs.map((doc) => doc.data().totalPrice))
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

  useEffect(() => {
    const currentMonthMarketPrice = ordersPrice.pop();

    const totalMarketPrice = ordersPrice.reduce((a, b) => a + b, 0);
    const average = (totalMarketPrice / ordersPrice.length).toFixed(2);
    const percantage = parseInt(
      (((currentMonthMarketPrice - average) / average) * 100).toFixed(1)
    );

    setMarket({
      currentMonthMarketPrice: currentMonthMarketPrice,
      average: average,
      percantage: percantage,
    });
  }, [ordersPrice]);

  return (
    <MarketContext.Provider
      value={{
        orders,
        market
      }}
    >
      {props.children}
    </MarketContext.Provider>
  );
};
