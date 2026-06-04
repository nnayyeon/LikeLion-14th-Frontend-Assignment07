import { createContext, useContext, useState } from "react";

const TravelToastContext = createContext();

export const TravelToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showToast = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <TravelToastContext.Provider value={{ showToast }}>
      {children}

      {message && (
        <div className="toast">
          {message}
        </div>
      )}
    </TravelToastContext.Provider>
  );
};

export const useTravelToast = () => {
  return useContext(TravelToastContext);
};