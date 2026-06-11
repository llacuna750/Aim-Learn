import React, { useState } from "react";
import "../appStyles.css";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouch: false,
  });
  const [role, setRole] = useState("role");

  const roles = ["Role", "Individual", "Business"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getIsFormValid()) {
      return
    }
    
    console.log("Form successfully submitted!");
    clearForm();
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword({
      value: "",
      isTouch: false,
    });
    setRole("role");
  };

  const getIsFormValid = () => {
    return firstname && email && password.value.length >= 8 && role !== "role";
  };

  return (
    <div className="signUpdiv">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="Fields">
          <label htmlFor="firstname">
            First name <sup>*</sup>
          </label>
          <input
            value={firstname}
            placeholder="First name"
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="lastname">Last name</label>
          <input
            value={lastname}
            placeholder="Last name"
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="email">
            Email address <sup>*</sup>
          </label>
          <input
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            Password <sup>*</sup>
          </label>
          <input
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            onBlur={() => {
              setPassword({ ...password, isTouch: true });
            }}
            placeholder="Password"
          />
          {password.isTouch && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}

          <label htmlFor="role">
            Role <sup>*</sup>
          </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {/* <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option> */}
            {roles.map((rl) => (
              <option key={rl}>{rl}</option>
            ))}
          </select>
        </div>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
}

export default SignUp;
