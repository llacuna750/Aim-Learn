import React, { useState } from "react";
import "../index.css";

function Parent() {
  const [identity, setIdentity] = useState({
    name: "Gabriel",
    age: 22,
    label: 'Parent',
    doneClick: false
  });

  return (
    <div className="parentDiv">
      <h3>{identity.doneClick ? 'Child' : identity.label}</h3>
      <Child name={identity.name} age={identity.age} />
      <button
        onClick={() => {
          setIdentity({ name: "Mrbagvs", age: 50, doneClick: true});
        }}
      >
        button
      </button>
    </div>
  );
}

function Child({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default Parent;
