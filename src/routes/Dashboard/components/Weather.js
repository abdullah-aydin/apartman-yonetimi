import { useState, useEffect, useContext } from "react";
//ant design
import { Card, Col, Row, Spin } from "antd";
//styles
import "../Dashboard.css";
// context
import WeatherContext from "../../../context/WeatherContext";
//moment
import moment from "moment";

const iconBase = "http://openweathermap.org/img/wn";

function Weather() {
  const { forecasts } = useContext(WeatherContext);
  const [today, setToday] = useState();
  const [threeDays, setThreeDays] = useState([]);

  useEffect(() => {
    setToday(forecasts?.data?.daily[0]);
    setThreeDays([
      forecasts?.data?.daily[1],
      forecasts?.data?.daily[2],
      forecasts?.data?.daily[3],
    ]);
  }, [forecasts]);

  const icons1x = (iconID) => {
    return `${iconBase}/${iconID}.png`;
  };

  const icons2x = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  return (
    <Col
      xxl={6}
      xl={8}
      lg={12}
      md={12}
      sm={24}
      xs={24}
      className="dashboard_col"
    >
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
              width: "100%",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            {today !== undefined ? (
              <>
                <div className="today_weather">
                  <h3>{moment(today.dt * 1000).format("DD.MM.YYYY")}</h3>
                  <p>{moment(today.dt * 1000).format("dddd")}</p>
                  <img src={icons2x(today.weather[0].icon)} alt="icon" />
                  <h3>
                    <b>{`${today?.temp.day} ºC`}</b>
                  </h3>
                  <p>{`${today.weather[0].description}`.toUpperCase()}</p>
                </div>
                <div>
                  {threeDays.map((day, index) => (
                    <Row
                      key={day.dt}
                      className="threeDays_weather"
                      style={
                        index !== 2 && { borderBottom: "1px solid #f0f0f0" }
                      }
                    >
                      <Col xxl={8} xs={8} className="threeDays_date">
                        <h3>{moment(day.dt * 1000).format("DD.MM.YYYY")}</h3>
                        <p>{moment(day.dt * 1000).format("dddd")}</p>
                      </Col>
                      <Col xxl={8} xs={8}>
                        <img src={icons1x(day.weather[0].icon)} alt="icon" />
                        <p>{`${day.weather[0].description}`.toUpperCase()}</p>
                      </Col>
                      <Col xxl={8} xs={8} className="threeDays_temp">
                        <h4>
                          <b>{`${day?.temp.day} ºC`}</b>
                        </h4>
                      </Col>
                    </Row>
                  ))}
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
