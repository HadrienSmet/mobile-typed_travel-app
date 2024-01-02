import { View } from "react-native";

import { Label } from "../../label";

import { InputModeEnum, TextInputProps } from "../types";
import { CoreInput } from "../core";

import styles from "./text.styles";

export const CustomTextInput = (props: TextInputProps & { readonly label: string }) => {
    return (
        <View style={styles.container}>
            <Label label={props.label} />
            <CoreInput
                {...props}
                inputMode={InputModeEnum.TEXT}
                needToSecure={false}
                numberOfLines={1}
                multiline={false}
                isTextArea={false}
            />
        </View>
    );
};
