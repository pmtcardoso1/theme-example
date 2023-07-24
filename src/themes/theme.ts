import {Colors, DesignTokens, Typographies} from "./types";
import merge from 'lodash/merge'

export class Theme {
    designTokens: DesignTokens;

    constructor(designTokens: DesignTokens) {
        this.designTokens = designTokens
    }

    get colors(): Colors {
        return this.designTokens.color
    }

    get typographies(): Typographies {
        return this.designTokens.typography
    }

    getOverride(overrideName: string): Theme {
        if (!this.designTokens.overrides[overrideName]) return this;

        return new Theme(merge({}, this.designTokens, this.designTokens.overrides[overrideName]))
    }
}

const defaultTheme = new Theme({
    color: {
        primary: "#61dafb",
        surface: "#282c34",
        onSurface: "#ffffff"
    },
    typography: {
        bodyText1: {
            family: "sans-serif",
            size: "24px"
        }
    },
    spacing: {},
    overrides: {
        app: {
            color: {
                // surface: "black",
            }
        }
    }
})

export default defaultTheme;
