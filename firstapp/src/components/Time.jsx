import React, { useState, useEffect } from "react";
// Adjusted import path: move up one level
// to reach shared stylesheet in src
import "../MyStyle.css";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
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
