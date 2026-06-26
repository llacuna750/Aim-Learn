import React, { useEffect, useState } from "react";

export default function UseEpek() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = !toggle ?  'useEffect run once' : 'Welcome to Little Lemon'
  }, 
  [toggle]) // Only run once


  return (
    <div>
      <fieldset>
        <h2>
          Update the dom Title
          <button onClick={updateToggle}>Toggle message</button>
        </h2>
        {toggle && <h2>Welcome to Little Lemon</h2>}
      </fieldset>
    </div>
)
}
