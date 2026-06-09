import React, { useState } from "react";

/* 
Controlled Components
✅ Use Controlled when:
- Real-time validation
- Conditional rendering based on input
- Formatting input (e.g., phone number)
- Disabling submit until form is valid
- Dynamic forms
*/
function ControlledForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName('')
    setPassword('')
    console.log({ username, password }); // data readily available
  };

  return (
    <div>
      <b>Controlled Components</b>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            placeholder="Please enter your username"
            value={username}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="Please enter your password"
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={!username || !password} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledForm;
