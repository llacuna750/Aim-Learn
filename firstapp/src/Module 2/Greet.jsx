import React, { useState } from "react";
import "./Module2.css";

function Greet() {
  const [greeting, setGreeting] = useState({
    greet: "Hello, ",
    place: "World",
    langauge: "English",
    timestamp: "2024-01-01",
    author: "John",
  });
  console.table(greeting, setGreeting);

  /* 
    way of Updating that likely updating only a small part of it.
    ❌ Your approach - LOSES other properties!
  */
  function updateGreeting() {
    setGreeting({ greet: "Hello, World-Wide Web" });
    /* 
    Result: { greet: "Hello, World-Wide Web" }
    ❌ language, timestamp, author are ALL GONE!
    */
  }

  // ✅ With Spread - KEEPS other properties!
  /* function updateGreetSpreading() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "Hello, World-Wide Web using ...Spread Operator";
    setGreeting(newGreeting);
  } */

  function updateGreetSpreading() {
    setGreeting({
      ...greeting,
      greet: "Hello, World-Wide Web using ...Spread Operator",
    });
    // Result: { greet: "Hello, World-Wide Web", language: "English",
    //           timestamp: "2024-01-01", author: "John" }
    // ✅ Only greet is updated, rest are preserved!
  }

  function updateGreet() {
    /* 
    This approach is similar to the spread operator method, 
    but it directly modifies the existing state object before setting it again.
    no Update in Heading because the reference of the object is still the same, 
    React does not detect a change in state and therefore does not trigger a re-render.
    */
    console.log("Hello you Update using updateGreet()");
    greeting.greet = "Hello, Kalibutan";
    setGreeting(greeting);
  }

  /* 
    To reiterate, the proper way of working with state when it's saved as an object is to:
    1. Copy the old state object using the spread (...) operator and save it into a new variable and
    2. Pass the new variable to the state-updating function
  */
  function updateGreetComplex() {
    setGreeting((prevState) => {
      return { ...prevState, place: "World-Wide-Web 2026" };
    });
  }
  const isHas2026 = (greeting?.place ?? "")
    .split(" ")
    .some((w) => Number(w) === 2026);

  return (
    <div className="Module2">
      <h1>{isHas2026 ? (greeting.greet, greeting.place) : greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting (setGreeting())</button>
      <button onClick={updateGreetSpreading}>
        Update Greet using ...Spread Operator
      </button>
      <button onClick={updateGreet}>Update Greet using (updateGreet())</button>
      <button onClick={updateGreetComplex}>
        Update Greet using (updateGreetComplex())
      </button>
    </div>
  );
}

export default Greet;
