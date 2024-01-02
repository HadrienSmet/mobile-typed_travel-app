import { 
    COLORS, 
    LINE_HEIGHTS, 
    SHADES, 
    SIZES, 
    SPACING 
} from "../../../../constants";

import { CoreSelectListProps } from "./core.types";

const DEFAULT_SIZE = "small" as const;

export const getSelectListStyles = (props: CoreSelectListProps) => {
    const paddingHorizontal = props.paddingHorizontal ?? SPACING.s;
    const paddingVertical = props.paddingVertical ?? SPACING.xxs;
    const fontSize = props.letterSize ? SIZES[props.letterSize] : SIZES[DEFAULT_SIZE];
    const lineHeight = props.letterSize ? LINE_HEIGHTS[props.letterSize] : LINE_HEIGHTS[DEFAULT_SIZE];
    const color = (props.value === "" || props.value == undefined || props.value == 0)? SHADES.black06 : COLORS.black

    const boxStyle = {
        paddingHorizontal,
        paddingVertical,
    };
    const inputStyle = { color };
    const textStyle = {
        fontSize,
        lineHeight
    };

    return {
        boxStyle,
        inputStyle,
        textStyle,
    }
};
