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

export default new Theme(require("./tokens.json"))
