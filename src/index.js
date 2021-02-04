import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { MarketProvider } from "./context/MarketContext";

ReactDOM.render(
  <AuthProvider>
    <MarketProvider>
      <App />
    </MarketProvider>
  </AuthProvider>,
  document.getElementById("root")
);
