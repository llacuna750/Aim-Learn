import React, { useState } from "react";
import "../appStyles.css";

function FeedBackform() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleOnchangeForm = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaination why the experience was poor.");
      return;
    }

    console.log("Form submitted!");
    console.log(`Score: ${score}`)
    console.log(`Comment: ${comment}`)
    setComment('')
    setScore('10')
  };

  return (
    <div className="feedbackForm">
      <form onSubmit={handleOnchangeForm}>
        <fieldset>
          <h2>Feedback Form</h2>
          <label htmlFor="feedBack">Score: {score} ⭐</label>
          <input
            id="feedBack"
            type="range"
            min={0}
            max={10}
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <div className="Field">
            <label htmlFor="comment">Comment:</label>
            <textarea name="comment" id="comment" onChange={e => setComment(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedBackform;
