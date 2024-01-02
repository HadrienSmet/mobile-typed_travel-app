import { 
    StyleProp, 
    TextStyle, 
    ViewStyle
} from "react-native";
import { ButtonBorderRadius } from "./types.base";

export type ButtonBorderRadiusExtension = { borderRadius: ButtonBorderRadius }
export type CoreButtonStyle = { 
    readonly buttonStyle: StyleProp<ViewStyle>;
    readonly textStyle: StyleProp<TextStyle>;
};
