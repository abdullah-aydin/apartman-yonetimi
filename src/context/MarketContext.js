import React, { createContext, useEffect, useState } from "react";
import db from "../config/firebase";
import firebase from "firebase/app";
// loading
import moment from "moment";

export const MarketContext = createContext(null);

export const MarketProvider = (props) => {
  const [orders, setOrders] = useState([]);

  const currentMonth = moment().format("YYYY-MM");

  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("orders")
      .onSnapshot((snapshot) =>
        setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
      );
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
      }}
    >
      {props.children}
    </MarketContext.Provider>
  );
};
