import { 
    BORDER_RADIUS, 
    COLORS, 
    SIZES, 
    SPACING, 
    WEIGHTS
} from "../../../../../constants";

export type ButtonColors = typeof COLORS.white | typeof COLORS.black;
export type ButtonBackgroundColors = typeof COLORS.primary | typeof COLORS.secondary | typeof COLORS.transparent;
export type ButtonBorderRadius = typeof BORDER_RADIUS.small | typeof BORDER_RADIUS.circle;
export type ButtonFontSizes = typeof SIZES.xSmall | typeof SIZES.small | typeof SIZES.medium;
export type ButtonFontWeights = typeof WEIGHTS.regular | typeof WEIGHTS.bold;
export type ButtonLetterSpacing = 0.5 | 0.7 | 1 | 2;
export type ButtonPaddingVertical = typeof SPACING.xs | typeof SPACING.s | typeof SPACING.m | typeof SPACING.l;
