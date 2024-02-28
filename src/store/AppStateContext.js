import React, { createContext, useState, useContext } from "react";

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [otherStateValue, setOtherStateValue] = useState("");

  const handleSetUserEmail = (data) => {
    setUserEmail(data);
  };

  const updateOtherStateValue = (value) => {
    setOtherStateValue(value);
  };

  return (
    <AppStateContext.Provider
      value={{
        userEmail,
        handleSetUserEmail,
        otherStateValue,
        updateOtherStateValue,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};
