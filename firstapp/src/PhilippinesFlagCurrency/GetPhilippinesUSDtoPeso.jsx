import React, { useState } from "react";
import axios from "axios";
import getFlagCurrecy from "./CurrencyFlagLogo";

const url = "https://currencyapi.net/api/v2/rates";
const params = {
  key: "2bd061460b7e4c0510d2a19b7b39817cb64f",
  base: "USD",
  output: "JSON",
};

const { timeZone, flaglogo, currency } = getFlagCurrecy();
const strToUpperCase = (curr) => {
  return curr !== curr.toUpperCase() ? curr.toUpperCase() : curr;
};

let curr = strToUpperCase(currency);

const validateIfPHPcurrency = (curr) => {
  if (curr === "PHP") {
    console.log("Now you in Looking for:", curr);
  }

  return curr;
};

export function GetPhilippinesUSDtoPeso() {
  axios
    .get(url, { params })
    .then((response) => {
      if (!response.data.rates[curr]) {
        throw new Error(`${curr} is not valid currency!`);
      }

      console.log(
        `Dollar to Peso ExchancheRate: USD - ${curr} = ${response.data.rates[curr]}`,
      );
    })
    .catch((error) => {
      console.error(error.message);
    });

  return (
    <div>
      GetPhilippinesUSDtoPeso <br />
      <p>
        Currency: <b>{validateIfPHPcurrency(curr)}</b>
      </p>
      <p>Time Zone: {timeZone}</p>
      <b>Country: </b>
      <img style={{ width: "10%" }} src={flaglogo} alt="flagCountry" />
    </div>
  );
}
