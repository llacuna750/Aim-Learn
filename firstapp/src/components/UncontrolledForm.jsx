import React, { useRef, useState } from "react";

const DisplayUncontrolledComponent = ({ inputV }) => {
  if (!inputV) return null;
  return <h1>{inputV}</h1>;
};

/* Uncontrolled components 
✅ Use Uncontrolled when:
- Simple forms with no real-time needs
- Integrating with non-React code
- File inputs (<input type="file">)
- Performance-critical forms with many fields
*/
function UncontrolledForm() {
  const inputRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    // use the input value
    console.log(
      inputValue ? `Form submitted with: ${inputValue}` : "No input value",
    );
    setSubmittedValue(inputValue);

    // optionally clear the input
    inputRef.current.value = "";
  };

  return (
    <div>
      <b>Uncontrolled Components</b>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Enter any text: </label>
          <input
            id="textUncontrolled"
            ref={inputRef}
            type="text"
            placeholder="Enter any text"
          />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <DisplayUncontrolledComponent inputV={submittedValue} />
    </div>
  );
}

export default UncontrolledForm;
