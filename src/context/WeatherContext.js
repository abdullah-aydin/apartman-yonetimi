import { createContext, useState, useEffect, useMemo } from "react";
//axios
import axios from "axios";
//cities
// import cities from "../constant/CitiesOfTurkey.json";

const WeatherContext = createContext(null);

const API_BASE = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_WEATHER_KEY;

export const WeatherProvider = ({ children }) => {
  const [forecasts, setForecasts] = useState([]);
  const [value, setValue] = useState("İstanbul");
  // const [location, setLocation] = useState({
  //   lat: "41.0053",
  //   lon: "28.9770",
  // });

  const location = useMemo(() => {
    return { lat: "41.0053", lon: "28.9770" };
  }, []);

  // initial value; Istanbul
  const units = "metric";

  // if there is changed value, set again lon & lat
  // useEffect(() => {
  //   cities.forEach((city) => {
  //     city.name === value &&
  //       setLocation({ lat: city.latitude, lon: city.longitude });
  //   });
  // }, [value]);

  //if there is changed lon & lat, fetch again data
  useEffect(() => {
    axios
      .get(
        `${API_BASE}/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely&units=${units}&lang=tr&appid=${API_KEY}`
      )
      .then((res) => setForecasts(res))
      .catch((err) => console.err(err));
  }, [location]);

  const values = {
    forecasts,
    value,
    setValue,
  };

  if (!forecasts) return null;

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
