import React from "react";
import defaultTheme, {Theme} from "./theme";

export type ThemeContextType = {
    theme: Theme
    setTheme: (theme: Theme) => void
};
const ThemeContext = React.createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => {}
});

export default ThemeContext
