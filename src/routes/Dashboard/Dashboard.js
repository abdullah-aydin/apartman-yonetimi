// components
import Cards from "./components/Cards";
import Announcement from "./components/Announcement";
import Weather from "./components/Weather";
// ant design
import { Row } from "antd";
//styles
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Cards />
      <div className="site-card-wrapper">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Weather />
          <Announcement />
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
