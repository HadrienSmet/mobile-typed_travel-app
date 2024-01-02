import { View } from "react-native";
import { Label } from "../../label";
import { 
    EmailInputProps,
    InputModeEnum 
} from "../types";
import { CoreInput } from "../core";

import styles from "./emailInput.style";

export const EmailInput = (props: EmailInputProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Label label="Email:" />
            <CoreInput
                {...props}
                inputMode={InputModeEnum.EMAIL}
                needToSecure={false}
                numberOfLines={1}
                multiline={false}
                isTextArea={false}
            />
        </View>
    );
};
