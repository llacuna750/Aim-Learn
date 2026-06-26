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

  return (
    <div>
      <fieldset>
        <h2>Customer Data</h2>
        {Object.keys(user).length > 0 ? (
          // <img src="" alt="" />
          <img src={user.results[0].picture.large} alt="LargePicture" />
        ) : (
          <h2>Pending Fetching...</h2>
        )}
      </fieldset>
    </div>
  );
}
