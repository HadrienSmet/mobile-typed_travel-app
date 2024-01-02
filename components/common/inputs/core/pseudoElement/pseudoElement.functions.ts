import { BorderSizesValues } from "../../../../../types";
import { 
    InputBorderColors, 
    PseudoElementOutput, 
    PseudoElementProps 
} from "./pseudoElement.types";
import { 
    CORE_INPUT_DEFAULT_BORDER_COLOR, 
    CORE_INPUT_DEFAULT_BORDER_WIDTH, 
    CORE_INPUT_DEFAULT_FOCUS_BORDER_COLOR
} from "./pseudoElement.constants";

export const getCustomStyle = (
    backgroundColor: InputBorderColors, 
    height: BorderSizesValues, 
) => {
    const data = {
        height,
        backgroundColor,
    } as const;

    return data;
}

export const getCustomValues = (props: PseudoElementProps): PseudoElementOutput => {
    const defaultColor = props.borderStyle ? props.borderStyle.backgroundColor : CORE_INPUT_DEFAULT_BORDER_COLOR;
    const focusColor = props.focusColor ?? CORE_INPUT_DEFAULT_FOCUS_BORDER_COLOR;
    const height = props.borderStyle ? props.borderStyle.height :  CORE_INPUT_DEFAULT_BORDER_WIDTH;

    return {
        defaultColor,
        focusColor,
        height
    }
};
