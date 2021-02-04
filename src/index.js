import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// context
import { AuthProvider } from "./context/AuthContext";
import { MarketProvider } from "./context/MarketContext";
import { BillsProvider } from "./context/BillsContext";

ReactDOM.render(
  <AuthProvider>
    <BillsProvider>
      <MarketProvider>
        <App />
      </MarketProvider>
    </BillsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
