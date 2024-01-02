import { Dispatch, SetStateAction } from "react";

import { BorderSizesValues, Percentage } from "../../../../../types";
import { COLORS, SHADES } from "../../../../../constants";
export type InputBlurColors = typeof COLORS.approval | typeof COLORS.primary | typeof COLORS.warning | undefined;
export type InputFocusBorderColors = 
    | typeof COLORS.primary 
    | typeof COLORS.secondary;
export type InptDefaultborderColor = typeof SHADES.black02;
export type InputBorderColors = 
    | InputBlurColors
    | InputFocusBorderColors
    | InptDefaultborderColor;

export type PseudoElementStyle = {
    height: BorderSizesValues;
    backgroundColor: InputBorderColors;
};
type PseudoElementBasicStyle = { width: `${Percentage}%` };
export type PseudoElementCustomStyle = PseudoElementBasicStyle & PseudoElementStyle;

export type PseudoElementOutput = {
    height: BorderSizesValues,
    defaultColor: InputBorderColors,
    focusColor: InputBorderColors,
};
export type GetPseudoElementStyleSignature = (focusColor: InputBorderColors) => PseudoElementOutput;

export type PseudoElementProps = {
    readonly borderStyle: PseudoElementStyle | undefined;
    readonly focusColor: InputBorderColors | undefined;
    readonly isFocus: boolean;
};

export type PseudoElementStyleArray = [PseudoElementStyle, WidthObject]
type WidthObject = { width: number; }
export type PseudoElementHookOutput = {
    readonly defaultStyle: PseudoElementStyleArray;
    readonly focusStyle: PseudoElementStyleArray;
    readonly setWidth: Dispatch<SetStateAction<number>>
};
