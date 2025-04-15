import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context
interface AppContextType {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ isLoaded, setIsLoaded, menuOpen, setMenuOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook (optional for cleaner usage)
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
