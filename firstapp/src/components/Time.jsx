import React, { useState, useEffect } from "react";
// Adjusted import path: move up one level
// to reach shared stylesheet in src
import "../MyStyle.css";
import axios from "axios";

// import CurrencyApi from './src/CurrencyApi.js';
// const currency = new CurrencyApi('2bd061460b7e4c0510d2a19b7b39817cb64f');
// console.log(currency)


const url = "https://currencyapi.net/api/v2/rates";
const params = {
    key: "2bd061460b7e4c0510d2a19b7b39817cb64f",
    base: "USD",
    output: "JSON"
};

axios.get(url, { params })
    .then(response => {
       console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });



function Time() {
  const [time, setTime] = useState(new Date());
  let [phpCurrency, setPhpCurrency] = useState(null);

  const getPhilippinesTime = () => {
    const philippinesTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Manila",
    });
    return new Date(philippinesTime);
  };

  const phillippinesTime = {
    timeZone: "Asia/Manila",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    currency: "PHP",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getPhilippinesTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        margin: "0 10px",
        border: "1px solid purple",
        borderWidth: "5px",
        borderStyle: "double",
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ color: "purple", fontSize: "14px", fontWeight: "600" }}>
        <div>Time</div>
        <div>{time.toDateString()}</div>
        <div>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
}

export default Time;
