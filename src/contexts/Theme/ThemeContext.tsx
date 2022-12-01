import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { THEMES } from '../../theme/themes';
import { Theme, ThemeType } from '../../theme/themetype';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES.light
} as ThemeContextProps);

interface iThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: iThemeProvider) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
