import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // state values
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  // toggle functions
  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  // return component
  return (
    <AppContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        isModal,
        setIsModal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
