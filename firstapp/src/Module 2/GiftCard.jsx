import React, { useState } from "react";
import "./Module2.css";

export default function GiftCard() {
  const [user] = useState({ firstname: "Jennifer", lastname: "Smith" });
  const [giftCard, setGiftCard] = useState({
    isSpend: false,
    text: "Free dinner for 4 guest",
    instructions: "To use your coupon click the button below.",
    valid: true,
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        instructions: "Please vist out restaurant to nenew your gift card.",
        valid: false,
      };
    });
  }

  const ShowButtonIfValid = () => {
    return <button onClick={spendGiftCard}>Spend Gift Card</button>;
  };

  return (
    <div className="module2Challenge">
      <h2>Gift Card Page</h2>
      <h3>Customer: {user.firstname} {user.lastname}</h3>
      <h4>{giftCard.text}</h4>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && <ShowButtonIfValid />}
    </div>
  );
}
