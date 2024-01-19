// themes/ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  // Add more theme properties as needed
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme: Theme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  // Default theme properties
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // You can fetch the theme dynamically or use a theme provider configuration here
  const currentTheme: Theme = defaultTheme;

  return <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>;
};
