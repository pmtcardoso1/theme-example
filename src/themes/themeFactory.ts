import {Theme} from "./theme";
import ThemeA from "./theme-a/theme";
import ThemeB from "./theme-b/theme";
const tokens = require('./designTokens.json');

export const THEMES = {
    THEME_A: 'theme-a',
    THEME_B: 'theme-b'
}
function makeTheme(themeName: string): Theme {
    switch (themeName) {
        case THEMES.THEME_B:
            return new ThemeB(tokens);
        default:
            return new ThemeA(tokens);
    }
}

export default makeTheme
