import { useState, useEffect } from "react";
// ant design
import { Card, Col, Row } from "antd";
//components
import ColumnChart from "../../components/ColumnChat";
//firebase
import db from "../../config/firebase";
//styles
import "./Analytics.css"

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
      console.log(data);
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
    },
    {
      title: "Doğalgaz",
      no: 1,
    },
    {
      title: "Su",
      no: 2,
    },
  ];

  return (
    <div className="site-card-wrapper">
      {billsChart.map((bill) => (
        <Row className="analytics_body">
          <Col xl={12} lg={12} md={16} sm={16} xs={16}>
            <Card bordered={true} className="card">
              <h2 className="analytics_title">
                {`Aylara Göre Toplam ${bill.title} Faturaları`}
              </h2>
              <ColumnChart data={averagePrice(bill.no)} />
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Analytics;
