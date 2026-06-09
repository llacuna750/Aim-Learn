import React from "react";
import Time from "../components/Time";
import "./StylePhilippines.css";
import getCurrencyFlagLogo from "./CurrencyFlagLogo.js";
import { GetPhilippinesUSDtoPeso } from "./GetPhilippinesUSDtoPeso.jsx";

const getFlagCurrecy = getCurrencyFlagLogo();

function RenderTimeCurrencyFlagLogo() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "420px",
    padding: "0 16px",
    boxSizing: "border-box",
    margin: "0 auto",
  };

  const timeWrapperStyle = {
    width: "100%",
    minWidth: "260px",
    maxWidth: "420px",
  };

  return (
    <div className="pinoyCSS" style={containerStyle}>
      <div style={timeWrapperStyle}>
        <Time
          timeZone={getFlagCurrecy.timeZone}
          logo={getFlagCurrecy.logo}
          currency={getFlagCurrecy.currency}
        />
      </div>
      <GetPhilippinesUSDtoPeso />
    </div>
  );
}

export default RenderTimeCurrencyFlagLogo;
