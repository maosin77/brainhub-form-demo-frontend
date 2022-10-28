import { Theme } from '@mui/material/styles/createTheme';
import React, { useContext, createContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { standard } from '../styles/theme';
import { dark } from '../styles/theme/dark';
import { LocalStorageKey, useLocalStorage } from '../hooks/useLocalStorage';

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface ContextValue {
    toggleTheme: () => void;
    theme: Theme;
}

const ThemeContext = createContext<ContextValue | undefined>(undefined);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [storedTheme, setStoredTheme] = useLocalStorage(
        LocalStorageKey.theme,
        'standard',
    );

    const [theme, setTheme] = useState<Theme>(
        storedTheme === 'dark' ? dark : standard,
    );

    const toggleTheme = () => {
        setTheme(previousTheme => {
            if (previousTheme.palette.mode === 'dark') {
                setStoredTheme('standard');
                return standard;
            }

            setStoredTheme('dark');
            return dark;
        });
    };

    return (
        <ThemeContext.Provider
            value={useMemo(() => ({ toggleTheme, theme }), [theme])}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme context is out of scope');
    }

    return context;
};
