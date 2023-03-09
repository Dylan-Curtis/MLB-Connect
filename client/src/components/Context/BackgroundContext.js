import React, { createContext, useState } from "react";

const BackgroundContext = createContext()

const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState("App-Header") 

  return (
    <BackgroundContext.Provider value={{ setBackground, background }}>
      {children}
    </BackgroundContext.Provider>
  );
}
export { BackgroundContext, BackgroundProvider };