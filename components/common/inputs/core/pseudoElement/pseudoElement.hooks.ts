import { useEffect, useState } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { 
    PseudoElementHookOutput, 
    PseudoElementProps, 
    PseudoElementStyleArray 
} from "./pseudoElement.types";
import { 
    getCustomStyle, 
    getCustomValues 
} from "./pseudoElement.functions";
import { 
    PSEUDO_ELEMENT_ANIMATIONS_CONFIG 
} from "./pseudoElement.constants";

export const usePseudoElement = (props: PseudoElementProps): PseudoElementHookOutput => {
    const [width, setWidth] = useState<number | null>(null)
    const defaultWidth = useSharedValue<number>(0);
    const focusWidth = useSharedValue<number>(0);
    
    const {
        defaultColor,
        focusColor,
        height
    } = getCustomValues(props);

    const defaultBorder = getCustomStyle(defaultColor, height);
    const focusBorder = getCustomStyle(focusColor, height);

    useEffect(() => {
        if (width) {
            if (props.isFocus) {
                defaultWidth.value = withTiming(0, PSEUDO_ELEMENT_ANIMATIONS_CONFIG.focusDecreasing);
                focusWidth.value = withTiming(width, PSEUDO_ELEMENT_ANIMATIONS_CONFIG.focusIncreasing);
            } else {
                focusWidth.value = withTiming(0, PSEUDO_ELEMENT_ANIMATIONS_CONFIG.blurDecreasing);
                defaultWidth.value = withTiming(width, PSEUDO_ELEMENT_ANIMATIONS_CONFIG.blurIncreasing);
            }
        }
    }, [props.isFocus, width])

    const animatedDefaultStyle = useAnimatedStyle(() => ({ width: defaultWidth.value }))
    const animatedFocusStyle = useAnimatedStyle(() => ({ width: focusWidth.value }));
    const defaultStyle: PseudoElementStyleArray = [defaultBorder, animatedDefaultStyle];
    const focusStyle: PseudoElementStyleArray = [focusBorder, animatedFocusStyle];

    return {
        defaultStyle,
        focusStyle,
        setWidth,
    }
};
