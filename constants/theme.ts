import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const BORDER_RADIUS = {
    none: 0,
    small: 4,
    medium: 8,
    large: 12,
    circle: 6000,
} as const;

const BORDER_SIZES = {
    none: 0,
    small: 1,
    medium: 2,
    large: 4
} as const;

const COLORS = {
    primary: "#00A7EF",
    secondary: "#FF7A00",
    tertiary: "#FF00A8",

    advice: "green",
    approval: "#6BBF44",
    refusal: "#E20A0A",
    transparent: "transparent",
    warning: "red",

    gray: "rgba(0,0,0,0.5)",
    gray2: "#C1C0C8",

    black: "rgba(0,0,0, 0.8)",
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
} as const;

const LINE_HEIGHTS = {
    xSmall: 12,
    small: 18,
    medium: 22,
    large: 26,
    xLarge: 30,
    xxLarge: 38,
} as const;

const SIZES = {
    xxSmall: 8,
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
} as const;

const TRIANGLE_HEIGHT: number = height * 0.04;

const SHADES = {
    black02: "rgba(0,0,0,0.2)",
    black04: "rgba(0,0,0,0.4)",
    black06: "rgba(0,0,0,0.6)",
    black07: "rgba(0,0,0,0.7)",

    orange04: "rgba(122,59,0,0.4)",
    orange055: "rgba(122,59,0,0.55)",
    orange065: "rgba(122,59,0,0.65)",

    pink04: "rgba(255, 0, 168, 0.4)",

    white04: "rgba(255,255,255,0.4)",
    white06: "rgba(255,255,255,0.6)",
    white08: "rgba(255,255,255,0.8)",
} as const;

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
    large: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.84,
        elevation: 8,
    },
} as const;

const SPACING = {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 20,
    xxl: 24,
    h: 28,
    xh: 32,
    xxh: 36,
} as const;

const WEIGHTS = {
    regular: "400",
    bold: "700",
    black: "900",
} as const;

export { 
    BORDER_RADIUS, 
    BORDER_SIZES, 
    COLORS, 
    LINE_HEIGHTS, 
    SIZES, 
    SHADES, 
    SHADOWS, 
    SPACING, 
    TRIANGLE_HEIGHT,
    WEIGHTS
};
