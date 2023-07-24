import {Colors, ComponentFactory, DesignTokens, Typographies} from "./types";
import merge from 'lodash/merge'

export class Theme {
    designTokens: DesignTokens;
    components: ComponentFactory;

    constructor(designTokens: DesignTokens, componentFactory: ComponentFactory) {
        this.designTokens = designTokens
        this.components = componentFactory
    }

    get colors(): Colors {
        return this.designTokens.color
    }

    get typographies(): Typographies {
        return this.designTokens.typography
    }

    getOverride(overrideName: string): Theme {
        if (!this.designTokens.overrides[overrideName]) return this;

        return new Theme(merge({}, this.designTokens, this.designTokens.overrides[overrideName]), this.components)
    }
}
