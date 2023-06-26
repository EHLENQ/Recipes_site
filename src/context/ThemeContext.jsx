import { useState } from "react";
import { createContext } from "react"

export const ThemeContext = createContext();

export function ThemeContextProvider({children}) {

    const [themecolor,SetThemeColor] = useState('primary');
    const [mode,SetMode] = useState('light');

    const selectTheme = (color) => {
        SetThemeColor(color);
    }

    const setMode = (mode) => {
        SetMode(mode);
    }
    
    return(
    <ThemeContext.Provider value={ {color: themecolor , btncolor: themecolor , mode: mode ,selectTheme , setMode}}>
        {children}
    </ThemeContext.Provider>
    )
}