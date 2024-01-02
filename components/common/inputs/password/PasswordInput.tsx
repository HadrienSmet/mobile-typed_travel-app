import { 
    Pressable, 
    View 
} from "react-native";

import { 
    InputModeEnum, 
    PasswordInputProps 
} from "../types";

import { Label } from "../../label";
import { CoreInput } from "../core";
import { NeedToSecureButton } from "./needToSecureButton";

import { usePasswordInput } from "./passwordInput.hooks";
import { getIconSize, getRightPosition } from "./passwordInput.functions";
import styles from "./passwordInput.styles";

export const PasswordInput = (props: PasswordInputProps) => {
    const {
        needToSecure,
        toggleSecurity
    } = usePasswordInput();
    // Will have to handle the iconColor here whenEver the backgroundColor is not whit or transparent on white.
    
    return (
        <View 
            style={styles.container}
        >
            <Label 
                label="Password:" 
            />
            <View
                style={styles.inputShape}
            >
                <CoreInput
                    needToSecure={needToSecure}
                    inputMode={InputModeEnum.TEXT}
                    isTextArea={false}
                    multiline={false}
                    numberOfLines={1}
                    {...props}
                />
                <Pressable 
                    style={[
                        styles.inputButton, 
                        getRightPosition(props.paddingHorizontal)
                    ]}
                    onPress={toggleSecurity}
                >
                    <NeedToSecureButton 
                        needToSecure={needToSecure}
                        size={getIconSize(props.letterSize)}
                    />
                </Pressable>
            </View>
        </View>
    );
};
