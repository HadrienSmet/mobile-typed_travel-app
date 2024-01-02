import { FontSizesValues, LineHeightValues } from "../../../../types";
import { InputBackgroundColors, InputPaddingVertical } from "./types.base";

export type InputContainerStyle = {
    height: number;
    fontSize: FontSizesValues;
    lineHeight: LineHeightValues;
    paddingHorizontal: number;
    paddingVertical: InputPaddingVertical;
    textAlignVertical: "center" | "top";
};
type InputBackgroundColorStyle = {
    backgroundColor: InputBackgroundColors;
};

export type InputStyle = [InputBackgroundColorStyle, InputContainerStyle];
