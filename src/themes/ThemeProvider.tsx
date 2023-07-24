import {Theme} from "./theme";
import React, {useState, ReactElement} from "react";
import ThemeContext from "./context";
import makeTheme, {THEMES} from "./themeFactory";


type ThemeProviderProps = {
    children: string | ReactElement | ReactElement[]
}

export const ThemeProvider = ({children} : ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(makeTheme(THEMES.THEME_A))

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

