import React from "react";

export default function useConsoleLog(varName) {
  React.useEffect(() => {
    console.log(varName);
  }, [varName]);
}
