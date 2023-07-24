import {useContext} from "react";
import ThemeContext from "./context";

function useTheme(overrideName = '') {
    const ctx = useContext(ThemeContext)

    if (!overrideName) return ctx

    return {theme: ctx.theme.getOverride(overrideName), setTheme: ctx.setTheme}
}

export default useTheme
