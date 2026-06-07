import React, { useEffect, useState } from "react";
import axios from "axios";
import getFlagCurrecy from "./CurrencyFlagLogo";

const url = "https://currencyapi.net/api/v2/rates";
const params = {
  key: "2bd061460b7e4c0510d2a19b7b39817cb64f",
  base: "USD",
  output: "JSON",
};

// ✅ Full check only works in Node.js/Backend
async function isWebsiteOnline(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.status === 200; // true if online
  } catch {
    return false; // false if offline or invalid
  }
}

const { timeZone, flaglogo, currency } = getFlagCurrecy();
const strToUpperCase = (curr) => {
  return curr !== curr.toUpperCase() ? curr.toUpperCase() : curr;
};

let curr = strToUpperCase(currency);
const validateIfPHPcurrency = (curr) => {
  return curr === "PHP" ? true : false;
};

async function getExchangeRate(url, params) {
  const response = await axios.get(url, { params });
  return response;
}

const FormCurrencyValue = () => {
  // ✅ You need a selected currency state to access the rate
  const [selectedCurrency, setSelectedCurrency] = useState("PHP");
  const [currencyExcRate, setcurrencyExcRate] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await getExchangeRate(url, params);

        if (!(await isWebsiteOnline(url, params))) {
          throw new Error(
            `API request failed with status ${data.request.status}`,
          );
        }
        setcurrencyExcRate(data.data);
      } catch (err) {
        console.error("Failed in component:", err.message);
      }
    }

    fetchRates();
  }, []);

  return (
    <div>
      <label htmlFor="currencyapi">Choose a currency:</label>
      {/* ❌ Remove error JSX */}
      <select
        name="currencyapi"
        id="currency"
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {currencyExcRate ? (
          Object.keys(currencyExcRate.rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))
        ) : (
          <option>Loading currencies...</option>
        )}
      </select>
      <p>
        USD Exchange rate:{" "}
        {currencyExcRate
          ? currencyExcRate.rates[selectedCurrency]
          : "Loading..."}{" "}
      </p>
    </div>
  );
};

export function GetPhilippinesUSDtoPeso() {
  return (
    <div>
      GetPhilippinesUSDtoPeso <br />
      <p>
        Currency:{" "}
        <b>{!validateIfPHPcurrency(curr) ? "Not Philippines" : curr}</b>
      </p>
      <p>Time Zone: {timeZone}</p>
      <b>Country: </b>
      <img style={{ width: "10%" }} src={flaglogo} alt="flagCountry" />
      <FormCurrencyValue />
    </div>
  );
}
