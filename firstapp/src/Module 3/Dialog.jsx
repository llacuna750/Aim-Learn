import React, { useState, useEffect, useCallback } from "react";
import "./module3.css";

const Button = ({ toggleDialog, children, backgroundColor }) => {
  console.log("DeleteButton clicked!");
  return (
    <button onClick={toggleDialog} style={{ backgroundColor }}>
      {children}
    </button>
  );
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = (props) => {
  return (
    <Button toggleDialog={props.clicktoTogggle} backgroundColor="red">
      Delete
    </Button>
  );
};

function Dialog() {
  const [dialog, setDialog] = useState(false);

  const updateDialog = () => {
    setDialog(!dialog);
  };

  useEffect(() => {
    // Effect runs when dialog state changes
  }, [dialog]);

  const memoizeCallback = useCallback(()=> updateDialog(), [dialog])

  const ButtonToToggle = () => {
    return (
      <button style={{ color: "black" }} onClick={updateDialog}>
        Click and delete dialog will show!
      </button>
    );
  };

  return (
    <div className="DeleteDialog">
      <header>Little Lemon Restaurant 🍕</header>
      {dialog ? (
        <Alert>
          <h4>Delete Account</h4>
          <p>
            Are you sure you want to proceed? You will miss all your delicious
            recipes!
          </p>
          <DeleteButton clicktoTogggle={memoizeCallback} />
        </Alert>
      ) : (
        <ButtonToToggle />
      )}
    </div>
  );
}

export default Dialog;
