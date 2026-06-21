import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";
import "./AppMemoUsecallbackUseMemo.css";

function AppMemoUsecallbackUseMemo() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  /*
    useCallback is a hook designed to memoize a function so that it maintains the same reference in memory across re-renders.
        Why it's needed: Because React.memo uses referential equality, it can "break" if you pass a function as a prop. 
        In JavaScript, a new function is created on every render, which React.memo sees as a "new" prop, triggering a re - render.

        so i only use useCallback() when i pass a function as a prop to a child component that is wrapped in React.memo.
    */
  const memoizeCallback = useCallback(
    (number) => changeChildNumber(number),
    [],
  );

  /* 
    How it works: It accepts a function that performs the calculation and a dependency array
    . It caches the output value and only re-runs the function if the dependencies change
    . Result: Instead of re-computing the logic on every render, React simply returns the last "memoized" value, saving processing power
    so i only use useMemo() when i have a heavy computation that i want to avoid re-computing on every render, and i want to cache the result until the dependencies change.
  */
  const memoizeMemo = useMemo(() => getLargestNumber(), [arr]);

  function changeChildNumber(number) {
    // Set the childNumber so it re-render and pass to Child Component
    setChildNumber(number);
  }

  function getLargestNumber() {
    console.log("I am working");
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([60, 70, 80, 90]);
  }

  return (
    <div className="AppMemoUsecallbackUseMemo">
      <Child changeNumber={memoizeCallback} number={childNumber} />
      <button
        onClick={() => {
          setLocalNumber((state) => state + 1);
        }}
      >
        Click to increment <b>Parent</b> number
      </button>
      <h3>Local: {localNumber}</h3>
      <h2>Largest Number: {memoizeMemo}</h2>
      <button onClick={changeArray}>Change array</button>
    </div>
  );
}

export default AppMemoUsecallbackUseMemo;
