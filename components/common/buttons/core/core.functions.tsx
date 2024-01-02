import { 
    StyleProp, 
    Text, 
    TextStyle 
} from "react-native";

import { 
    ComponentChild, 
    CoreButtonEnum, 
    CoreButtonProps, 
    CoreButtonStyle,
} from "./types";
import { 
    BUTTON_BACKGROUND_COLOR, 
    BUTTON_COLOR, 
    BUTTON_FONT_SIZE, 
    BUTTON_FONT_WEIGHT, 
    BUTTON_LETTER_SPACING, 
    BUTTON_PADDING_VERTICAL 
} from "./core.constants";

export const getButtonStyle = ( params: CoreButtonProps): CoreButtonStyle => {
    const backgroundColor = params.backgroundColor ?? BUTTON_BACKGROUND_COLOR;
    const color = params.color ?? BUTTON_COLOR;
    const fontSize = params.fontSize ?? BUTTON_FONT_SIZE;
    const fontWeight = params.fontWeight ?? BUTTON_FONT_WEIGHT;
    const letterSpacing = params.letterSpacing ?? BUTTON_LETTER_SPACING;
    const paddingVertical = params.paddingVertical ?? BUTTON_PADDING_VERTICAL;

    const buttonStyle = {
        backgroundColor,
        borderRadius: params.borderRadius,
        paddingVertical,
    };
    const textStyle = { color, fontSize, fontWeight, letterSpacing };

    return { buttonStyle, textStyle }
};

export const getElement = (props: CoreButtonProps, textStyle: StyleProp<TextStyle>): ComponentChild  => {
    switch (props.type) {
        case CoreButtonEnum.NODE:
            return props.children;
        case CoreButtonEnum.TEXT:
            return <Text style={textStyle}>{props.value}</Text>
    }
};
