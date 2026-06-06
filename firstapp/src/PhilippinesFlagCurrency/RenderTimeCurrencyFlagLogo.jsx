import React from "react";
import Time from "../components/Time";
import "./StylePhilippines.css";
import getCurrencyFlagLogo from "./CurrencyFlagLogo.js";
import { GetPhilippinesUSDtoPeso } from "./GetPhilippinesUSDtoPeso.jsx";

const getFlagCurrecy = getCurrencyFlagLogo();

function RenderTimeCurrencyFlagLogo() {
  return (
    <div className="pinoyCSS">
      <Time
        timeZone={getFlagCurrecy.timeZone}
        logo={getFlagCurrecy.logo}
        currency={getFlagCurrecy.currency}
      />
      <GetPhilippinesUSDtoPeso />
      {/* <div><img src="" alt="" /></div> */}
    </div>
  );
}

export default RenderTimeCurrencyFlagLogo;
