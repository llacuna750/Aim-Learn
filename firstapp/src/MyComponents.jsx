// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

import React, { useState } from "react";

function MyComponents() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [isEmployed, setIsEmployed] = useState(false);

  const updateName = function () {
    name = "Gabriel";
    setName(name);
    console.log(name);
  };

  const incrementAge = () => {
    age++; 
    setAge(age);
    console.log(`Updated age to ${age}`);
  };

  const toggleStatus = () => {
    setIsEmployed(!isEmployed)
  };

  return (
    <div>
      <p>My name is: {name}</p>
      <button onClick={updateName}>Click to Assign name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponents;
