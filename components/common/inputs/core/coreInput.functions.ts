import { FontSizesValues, LineHeightValues } from "../../../../types";
import {
    LINE_HEIGHTS, 
    SIZES,
} from "../../../../constants";
import { 
    CORE_INPUT_DEFAULT_BACKGROUND_COLOR,
    CORE_INPUT_DEFAULT_PADDING_HORIZONTAL, 
    CORE_INPUT_DEFAULT_PADDING_VERTICAL, 
    CORE_INPUT_DEFAULT_SIZE 
} from "./coreInput.constants";
import {
    GetContainerStyleSignature, 
    GetCustomStyleSignature, 
    GetFontSizeSignature, 
    GetLineHeightSignature, 
    InputStyle
} from "../types";

const getFontSize: GetFontSizeSignature = (key) => key ? SIZES[key] : SIZES[CORE_INPUT_DEFAULT_SIZE];
const getLineHeightSize: GetLineHeightSignature = (key) => key ? LINE_HEIGHTS[key] : LINE_HEIGHTS[CORE_INPUT_DEFAULT_SIZE];
const getContainerStyle: GetContainerStyleSignature = (params) => {
    const { borderWidth, letterSize, paddingHorizontal, paddingVertical, numberOfLines } = params;

    const fontSize: FontSizesValues = getFontSize(letterSize);
    const lineHeight: LineHeightValues = getLineHeightSize(letterSize);
    const height = (numberOfLines * lineHeight) + (2 * paddingVertical) + borderWidth;
    const textAlignVertical = numberOfLines > 1 ? "top" : "center";

    return {
        fontSize,
        lineHeight,
        height,
        paddingHorizontal,
        paddingVertical,
        textAlignVertical,
    }
};
export const getCustomInputStyle: GetCustomStyleSignature = (params) => {
    const { borderWidth, letterSize, numberOfLines } = params;

    const backgroundColor = params.backgroundColor ?? CORE_INPUT_DEFAULT_BACKGROUND_COLOR;
    const paddingHorizontal = params.paddingHorizontal ?? CORE_INPUT_DEFAULT_PADDING_HORIZONTAL;
    const paddingVertical = params.paddingVertical ?? CORE_INPUT_DEFAULT_PADDING_VERTICAL;

    const firstElement = { backgroundColor };
    const secondElement = getContainerStyle({
        borderWidth,
        letterSize, 
        paddingHorizontal, 
        paddingVertical, 
        numberOfLines
    });
    const inputStyle: InputStyle = [firstElement, secondElement]

    return inputStyle;
};
