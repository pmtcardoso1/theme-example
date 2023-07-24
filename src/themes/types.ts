export type Typographies = {
    bodyText1: Typography
}

export type Typography = {
    family: string;
    size: string;
};

export type Color = string

export type Colors = {
    primary: Color,
    surface: Color,
    onSurface: Color
}


export type DesignTokens = {
    color: Colors,
    typography: Typographies,
    spacing: any,
    // etc...
}
