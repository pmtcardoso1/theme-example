import {Colors, DesignTokens, Typographies} from "./types";

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
}

export default new Theme({
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
    spacing: {}
})
