import React from "react";
import {Theme} from "./theme";
import makeTheme, {THEMES} from "./themeFactory";

export type ThemeContextType = {
    theme: Theme
    setTheme: (theme: Theme) => void
};
const ThemeContext = React.createContext<ThemeContextType>({
    theme: makeTheme(THEMES.THEME_A),
    setTheme: () => {}
});

export default ThemeContext
