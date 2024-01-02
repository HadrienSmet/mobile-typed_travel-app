import { Easing } from "react-native-reanimated";
import { BORDER_SIZES, COLORS, SHADES } from "../../../../../constants";
import { CORE_INPUT_DEFAULT_SIZE } from "../coreInput.constants";

export const CORE_INPUT_DEFAULT_BORDER_COLOR = SHADES.black02;
export const CORE_INPUT_DEFAULT_BORDER_WIDTH = BORDER_SIZES[CORE_INPUT_DEFAULT_SIZE];
export const CORE_INPUT_DEFAULT_FOCUS_BORDER_COLOR = COLORS.primary;
export const CORE_INPUT_DEFAULT_PSEUDO_ELEMENT_STYLE = {
    height: CORE_INPUT_DEFAULT_BORDER_WIDTH,
    backgroundColor: CORE_INPUT_DEFAULT_BORDER_COLOR,
} as const;
export const PSEUDO_ELEMENT_ANIMATIONS_CONFIG = {
    blurDecreasing: {
        duration: 40,
        easing: Easing.bezier(0, 1, 0, 1),
    },
    blurIncreasing: {
        duration: 65,
        easing: Easing.bezier(.21,.75,.72,.95),
        delay: 20
        
    },
    focusDecreasing: {
        duration: 130,
        easing: Easing.bezier(.07,.89,.72,.95),
    },
    focusIncreasing: {
        duration: 220,
        easing: Easing.bezier(.74,.11,.95,.77),
        delay: 60,
    },
} as const;