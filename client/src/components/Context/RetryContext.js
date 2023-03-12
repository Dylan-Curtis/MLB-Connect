import { createContext, useState } from "react";

const RetryContext = createContext();

const RetryProvider = ({ children }) => {
  const [retry, setRetry] = useState(false);
  const [stat, setStat] = useState({})  

  return (
    <RetryContext.Provider value={{ setRetry, retry, stat, setStat }}>
      {children}
    </RetryContext.Provider>
  );
}
export { RetryContext, RetryProvider }