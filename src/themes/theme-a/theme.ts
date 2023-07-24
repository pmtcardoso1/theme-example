import {Theme} from "../theme";
import {ComponentFactory, DesignTokens} from "../types";
import ThemeAComponentFactory from "./componentFactory";

class ThemeA extends Theme {
    constructor(tokens: DesignTokens, factory: ComponentFactory = {}) {
        super(tokens, Object.assign({}, ThemeAComponentFactory, factory));
    }
}

export default ThemeA
