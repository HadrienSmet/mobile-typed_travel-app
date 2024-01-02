import { useCallback, useState } from "react";

import { 
    CoreInputHookOutput, 
    CustomInputProps, 
    GetCustomInputStyleParams, 
    GetCustomStyleOutput 
} from "../types";

import { getCustomInputStyle } from "./coreInput.functions";
import { CORE_INPUT_DEFAULT_BORDER_WIDTH } from "./pseudoElement";

export const useCustomInput = (params: CustomInputProps): CoreInputHookOutput => {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus: () => void = useCallback(() => {
        setIsFocus(true);
    }, [setIsFocus]);
    const handleBlur: () => void = useCallback(() => {
        params.blurHandler !== undefined && params.blurHandler();
        setIsFocus(false);
    }, [params.blurHandler, setIsFocus]);

    const borderWidth = params.borderStyle ? params.borderStyle.height : CORE_INPUT_DEFAULT_BORDER_WIDTH;
    const getCustomStyleParams: GetCustomInputStyleParams = {
        backgroundColor: params.backgroundColor,
        borderWidth,
        letterSize: params.letterSize,
        paddingHorizontal: params.paddingHorizontal,
        paddingVertical: params.paddingVertical,
        numberOfLines: params.numberOfLines,
    };
    const customStyle: GetCustomStyleOutput = getCustomInputStyle(getCustomStyleParams);

    return { isFocus, customStyle, handleFocus, handleBlur };
};