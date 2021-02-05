import { createContext, useEffect, useState } from "react";
import db from "../config/firebase";
import moment from "moment";

export const BillsContext = createContext(null);

export const BillsProvider = (props) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc("903rfcO6sbX7hJISg1ND")
      .collection("bill")
      .onSnapshot((snapshot) =>
        setBills(
          snapshot.docs.map((doc) => ({
            bill: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // FOR CHARTS //
  const avarageForCharts = (dt) => {
    let data = [];
    let totalPayment = 0;
    if (dt) {
      const allMonthBills = Object.values(dt);

      // dt items sorts from first date to last date
      allMonthBills.sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });

      allMonthBills.forEach((d) => {
        data.push({
          title: moment(d.date?.seconds * 1000).format("YYYY-MM"),
          price: d.price,
        });
        totalPayment += d.price;
      });
    }
    return { data, totalPayment };
  };

  const averagePriceForCharts = (count) => {
    let data = avarageForCharts(bills[count]?.data);
    return data;
  };

  // ./ FOR CHARTS //

  // FOR DASHBOARD CARDS //
  const avarageForCards = (dt) => {
    if (dt) {
      const allMonthBills = Object.values(dt);

      // dt items sorts from first date to last date
      allMonthBills.sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });

      const lastBill = allMonthBills.pop();

      let totalPrice = 0;
      allMonthBills.forEach((d) => (totalPrice += d.price));

      let avrg = totalPrice / allMonthBills.length;

      return { avrg: avrg.toFixed(2), lastBill: lastBill };
    }

    return { avrg: 0, lastBill: 0 };
  };

  const thisMonthPriceForCards = (count) => {
    let price = avarageForCards(bills[count]?.data).lastBill.price;
    return price;
  };

  const averagePriceForCards = (count) => {
    let price = avarageForCards(bills[count]?.data).avrg;
    return price;
  };

  const percantageForCards = (count) => {
    let per = (
      ((thisMonthPriceForCards(count) - averagePriceForCards(count)) /
        averagePriceForCards(count)) *
      100
    ).toFixed(1);
    return per;
  };
  // ./ FOR DASHBOARD CARDS //

  return (
    <BillsContext.Provider
      value={{
        bills,
        avarageForCharts,
        averagePriceForCharts,
        thisMonthPriceForCards,
        averagePriceForCards,
        percantageForCards,
      }}
    >
      {props.children}
    </BillsContext.Provider>
  );
};
