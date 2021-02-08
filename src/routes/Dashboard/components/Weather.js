import { useState, useEffect, useContext } from "react";
//ant design
import "antd/dist/antd.css";
import { Card, Col, Row, Spin } from "antd";
//styles
import "../Dashboard.css";
//icons
// import { IoMdNotificationsOutline } from "react-icons/io";
// context
import WeatherContext from "../../../context/WeatherContext";
//moment
// import moment from "moment";

const iconBase = "http://openweathermap.org/img/wn";

function Weather() {
  const { forecasts } = useContext(WeatherContext);
  const [today, setToday] = useState();

  useEffect(() => {
    setToday(forecasts?.data?.daily?.shift());
  }, [forecasts]);

  // remove today from daily array
  //   if (forecasts.data?.daily.length > 4) {
  //     forecasts.data?.daily.shift();
  //     forecasts.data?.daily.pop();
  //   }

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  //   console.log(forecasts);

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
      <Card bordered={true} className="card">
        <h2
          style={{
            color: "#3b4cb8",
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Hava Durumu
        </h2>

        <Row>
          <Col
            style={{
              height: "500px",
              width: "100%",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            {today !== undefined ? (
              <>
                <div>
                  <h1>{`${today?.temp.day} ºC`}</h1>
                  <p>Sıcaklık</p>
                  <img src={icons(today.weather[0].icon)} alt="icon" />
                  <div>{`${today.weather[0].description}`.toUpperCase()}</div>
                </div>
              </>
            ) : (
              <div>
                <Spin />
              </div>
            )}
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default Weather;
