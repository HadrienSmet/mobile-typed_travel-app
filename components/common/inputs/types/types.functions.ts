import { BorderSizesValues, FontSizesKeys, FontSizesValues, LineHeightValues, LineHeightsKeys } from "../../../../types";
import { InputBackgroundColors, InputPaddingHorizontal, InputPaddingVertical } from "./types.base";
import { InputContainerStyle, InputStyle } from "./types.styles";

export enum GetParamsEnum {
    FONT,
    LINE_HEIGHT
}

export type GetFontSizeSignature = (key: FontSizesKeys) => FontSizesValues;
export type GetLineHeightSignature = (key: LineHeightsKeys) => LineHeightValues;

type GetContainerStyleParams = {
    readonly borderWidth: BorderSizesValues;
    readonly letterSize: LineHeightsKeys;
    readonly paddingHorizontal: number;
    readonly paddingVertical: InputPaddingVertical
    readonly numberOfLines: number;
}
export type GetContainerStyleSignature = (params: GetContainerStyleParams) => InputContainerStyle;

export type GetCustomInputStyleParams = {
    readonly backgroundColor: InputBackgroundColors | undefined;
    readonly borderWidth: BorderSizesValues;
    readonly letterSize: LineHeightsKeys | undefined;
    readonly paddingHorizontal: InputPaddingHorizontal | undefined;
    readonly paddingVertical: InputPaddingVertical | undefined;
    readonly numberOfLines: number;
};
export type GetCustomStyleOutput = InputStyle;

export type GetCustomStyleSignature = (params: GetCustomInputStyleParams) => GetCustomStyleOutput;
