import ThemeA from "../theme-a/theme";
import {ComponentFactory, DesignTokens} from "../types";
import ThemeBComponentFactory from "./componentFactory";

class ThemeB extends ThemeA {
    constructor(tokens: DesignTokens, factory: ComponentFactory = {}) {
        super(tokens, Object.assign({}, ThemeBComponentFactory, factory));
    }
}

export default ThemeB
