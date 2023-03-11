import { createContext, useState } from "react";

const RetryContext = createContext();

const RetryProvider = ({ children }) => {
  const [retry, setRetry] = useState({});  

  return (
    <RetryContext.Provider value={{ setRetry, retry }}>
      {children}
    </RetryContext.Provider>
  );
}
export { RetryContext, RetryProvider }