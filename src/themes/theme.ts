import {Colors, Typographies} from "./types";

export class Theme {
    get colors(): Colors {
        return {
            primary: "#61dafb",

            surface: "#282c34",
            onSurface: "#ffffff"
        }
    }

    get typographies(): Typographies {
        return {
            bodyText1: {
                family: "sans-serif",
                size: "24px"
            },
        }
    }
}

export default new Theme()
