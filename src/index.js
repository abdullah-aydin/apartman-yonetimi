import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// context
import { AuthProvider } from "./context/AuthContext";
import { MarketProvider } from "./context/MarketContext";
import { BillsProvider } from "./context/BillsContext";
import { WeatherProvider } from "./context/WeatherContext";

ReactDOM.render(
  <AuthProvider>
    <BillsProvider>
      <MarketProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </MarketProvider>
    </BillsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
