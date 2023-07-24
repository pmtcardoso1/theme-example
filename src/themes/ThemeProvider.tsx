import defaultTheme, {Theme} from "./theme";
import React, {useState, ReactElement} from "react";
import ThemeContext from "./context";


type ThemeProviderProps = {
    children: string | ReactElement | ReactElement[]
}

export const ThemeProvider = ({children} : ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

