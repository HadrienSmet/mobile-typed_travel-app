import { COLORS, SPACING } from "../../../../constants";

export type InputBackgroundColors =
    | typeof COLORS.transparent
    | typeof COLORS.white;

export type InputPaddingHorizontal = 
    | typeof SPACING.xxs 
    | typeof SPACING.xs 
    | typeof SPACING.s
    | typeof SPACING.m;
    
export type InputPaddingVertical = 
    | typeof SPACING.xxs 
    | typeof SPACING.xs 
    | typeof SPACING.s;
