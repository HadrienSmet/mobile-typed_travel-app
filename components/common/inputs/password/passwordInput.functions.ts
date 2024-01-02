import { SIZES } from "../../../../constants";
import { FontSizesValues, LineHeightsKeys } from "../../../../types";

import { 
    CORE_INPUT_DEFAULT_PADDING_HORIZONTAL, 
    CORE_INPUT_DEFAULT_SIZE 
} from "../core";
import { 
    InputPaddingHorizontal 
} from "../types";

type PositionParams = InputPaddingHorizontal | undefined
type PositionOutput = { right: number };

type SizeParams = LineHeightsKeys | undefined;

export const getRightPosition = (paddingHorizontal: PositionParams | undefined): PositionOutput => {
    const right = paddingHorizontal ?? CORE_INPUT_DEFAULT_PADDING_HORIZONTAL;

    return { right }
};

export const getIconSize = (letterSize: SizeParams): FontSizesValues => SIZES[letterSize] ?? SIZES[CORE_INPUT_DEFAULT_SIZE];
