import React, { createContext, useContext } from "react";

const HouseholdContext = createContext(null);

export const useHousehold = () => useContext(HouseholdContext);

export const HouseholdProvider = ({ children, householdId }) => (
  <HouseholdContext.Provider value={householdId}>
    {children}
  </HouseholdContext.Provider>
);
