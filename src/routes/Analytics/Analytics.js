import { useState, useEffect } from "react";
// ant design
import { Card, Col, Row } from "antd";
//components
import ColumnChart from "../../components/ColumnChat";
//firebase
import db from "../../config/firebase";
//styles
import "./Analytics.css";
//icons
import { RiFireFill } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Analytics() {
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

  const avarage = (dt) => {
    let data = [];
    if (dt) {
      const allMonthBills = Object.values(dt);

      // dt items sorts from first date to last date
      allMonthBills.sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });

      allMonthBills.forEach((d) => data.push(d.price));

      return data;
    }
  };

  const averagePrice = (count) => {
    let price = avarage(bills[count]?.data);
    return price;
  };

  const billsChart = [
    {
      title: "Elektrik",
      no: 0,
      icon: <GiElectric />,
    },
    {
      title: "Doğalgaz",
      no: 1,
      icon: <RiFireFill />,
    },
    {
      title: "Su",
      no: 2,
      icon: <IoWater />,
    },
    {
      title: "Market",
      no: 3,
      icon: <AiOutlineShoppingCart />,
    },
  ];

  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="analytics_body"
      >
        {billsChart.map((bill) => (
          <Col
            xl={12}
            lg={12}
            md={24}
            sm={24}
            xs={24}
            className="analytics_col"
            key={bill.no}
          >
            <Card className="card">
              <h2 className="analytics_title">{`${bill.title} Faturaları`}</h2>
              <div className="analytics_description">
                <div className="analytics_icon">{bill.icon}</div>
                <div className="analytics_total_bill">
                  <p>Toplam Harcama</p>
                  <b>1500 TL</b>
                </div>
              </div>
              <ColumnChart data={averagePrice(bill.no)} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Analytics;
