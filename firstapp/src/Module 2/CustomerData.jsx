import React, { useEffect, useState } from "react";

export default function CustomerData() {
  const [user, setUser] = useState([]);
  const fetchDate = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results-1");
      if (!response.ok) {
        throw new Error(
          "Your requesting to get the Data from the server is failed!",
        );
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error("Error message:", err.message);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  /* Go to this file to test what is structure of data apiTestResult.js */
  //   console.log(user);

  const  { date, age } = user.results?.[0]?.dob || {};

  return (
    <div>
      <fieldset>
        {Object.keys(user).length > 0 ? (
          <div>
            <h2>Customer Data</h2>
            <h2>Name: {user.results[0].name.first}</h2>
            <h3>Age: {date}, {age}</h3>
            <img src={user.results[0].picture.large} alt="LargePicture" />
          </div>
        ) : (
          <h2>Pending Fetching...</h2>
        )}
      </fieldset>
    </div>
  );
}
