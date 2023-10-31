import React, { createContext, useContext, useState } from "react";


type ApiContextType = {
  name: string,
  setName: string,
  mobile: string,
  setMobile: number,
  nameError: number,
  setNameError: string,
  mobileError: string,
  setMobileError: string,
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');

  return (
    <ApiContext.Provider
      value={{
        name,
        setName,
        mobile,
        setMobile,
        nameError,
        setNameError,
        mobileError,
        setMobileError,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
