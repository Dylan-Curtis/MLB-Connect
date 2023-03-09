import React, { createContext, useState } from "react";

const StatsContext = createContext();

const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({});  

  return (
    <StatsContext.Provider value={{ setStats, stats }}>
      {children}
    </StatsContext.Provider>
  );
}
export { StatsContext, StatsProvider }