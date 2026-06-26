import React, { useEffect, useState } from "react";

function DemoModule2() {
  const [count, setCount] = useState(0);
  // 1. Runs AFTER EVERY render
  useEffect(() => {
    console.log("I run every render!");
  });

  // 2. Runs ONLY ONCE (on mount)
  useEffect(() => {
    console.log("I run only once!");
  }, []); // Empty array

  // 3. Runs when SPECIFIC VALUE changes
  useEffect(() => {
    console.log("count changed!");
  }, [count]); // Only when count changes

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Click me to increment</button>
    </div>
  );
}

export default DemoModule2;
