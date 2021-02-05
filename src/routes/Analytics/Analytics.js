import { useContext } from "react";
// ant design
import { Card, Col, Row } from "antd";
//components
import ColumnChart from "../../components/ColumnChat";
//styles
import "./Analytics.css";
//icons
import { RiFireFill } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
// context
import { BillsContext } from "../../context/BillsContext";
import { MarketContext } from "../../context/MarketContext";

function Analytics() {
  const { averagePriceForCharts } = useContext(BillsContext);
  const { ordersPrice, totalPayment } = useContext(MarketContext);

  const billsChart = [
    {
      id: 0,
      title: "Su",
      icon: <IoWater />,
      data: averagePriceForCharts(2).data,
      total: averagePriceForCharts(2).totalPayment,
      color: ["#77abf6"],
    },
    {
      id: 1,
      title: "Doğalgaz",
      icon: <RiFireFill />,
      data: averagePriceForCharts(1).data,
      total: averagePriceForCharts(1).totalPayment,
      color: ["#f28686"],
    },
    {
      id: 2,
      title: "Elektrik",
      icon: <GiElectric />,
      data: averagePriceForCharts(0).data,
      total: averagePriceForCharts(0).totalPayment,
      color: ["#8fcd48"],
    },
    {
      id: 3,
      title: "Market",
      icon: <AiOutlineShoppingCart />,
      data: ordersPrice,
      total: totalPayment,
      color: ["#67c2b6"],
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
            key={bill.id}
          >
            <Card className="card">
              <h2 className="analytics_title">{`${bill.title} Faturaları`}</h2>
              <div className="analytics_description">
                <div className={`analytics_icon icon_${bill.id + 1}`}>
                  {bill.icon}
                </div>
                <div className="analytics_total_bill">
                  <p>Toplam Harcama</p>
                  <b>{bill.total} TL</b>
                </div>
              </div>
              <ColumnChart chartData={bill.data} color={bill.color} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Analytics;
