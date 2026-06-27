import React, { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

export default function DataFetching() {
  const [someStateVariable, setSomeStateVariable] = useState({});

  const fetchApi = async () => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        console.log("\nFetch error 2 __using await");
        throw new Error(`Network response was not ok:  ${response.statusText}`);
      }
      const data = await response.json();
      setSomeStateVariable(data);
      console.log("\nFetched data: using await:", data);
    } catch (err) {
      console.error("Can't Load:", err.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const usd = someStateVariable?.bitcoin?.usd;
  return usd !== undefined ? (
    <div>
      <h1>Bitcoin Price now:</h1>
      <h2>${usd}</h2>
    </div>
  ) : (
    <h2>Data pending...</h2>
  );
}
