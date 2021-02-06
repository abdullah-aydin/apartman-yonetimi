// components
import Cards from "./components/Cards";
import Announcement from "./components/Announcement";
// ant design
// import { Card, Col, Row } from "antd";
//styles
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Cards />
      <Announcement />
    </>
  );
}

export default Dashboard;
