import {ReactElement} from "react";

type PartialTypographies = {
    bodyText1?: Partial<Typography>
}
export type Typographies = {
    bodyText1: Typography
}

export type Typography = {
    family: string;
    size: string;
}

export type Color = string
export type Colors = {
    primary: Color,
    surface: Color,
    onSurface: Color
}

type PartialDesignTokens = Partial<{
    color: Partial<Colors>,
    typography: PartialTypographies,
    spacing: any
}>


export type DesignTokens = {
    color: Colors,
    typography: Typographies,
    spacing: any,
    overrides: { [name: string]: PartialDesignTokens }
    // etc...
}


export type ComponentFactory = {
    [componentName: string]: () => ReactElement
}
