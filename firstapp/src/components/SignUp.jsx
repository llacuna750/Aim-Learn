import React, { useState } from "react";
import "../appStyles.css";

function SignUp() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

  return (
    <div className="signUpdiv">
      <form>
        <h2>Sign Up</h2>
        <div className="Fields">
          <label htmlFor="firstname">First name </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
          />

          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastame"
            placeholder="Last name"
          />

          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />

          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="">Role</option>
          </select>
        </div>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
}

export default SignUp;
