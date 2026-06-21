import React from "react";

function ReactUseState() {
  const [currentNumber, setCurrentNumber] = React.useState(0);
  return (
    <div>
      <h3>Your number: {currentNumber}</h3>
      <h1>React.useState()</h1>
      <button
        onClick={() => {
          setCurrentNumber(currentNumber + 1);
        }}
      >
        click to increment current number
      </button>
    </div>
  );
}

export default ReactUseState;
