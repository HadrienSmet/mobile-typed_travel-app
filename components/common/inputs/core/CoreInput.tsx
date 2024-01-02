import { TextInput, View } from "react-native";

import { CustomInputProps} from "../types";

import { PseudoElement } from "./pseudoElement";
import { useCustomInput } from "./coreInput.hooks";
import styles from "./coreInput.style";

export const CoreInput = (props: CustomInputProps): JSX.Element => {
    const { 
        isFocus, 
        customStyle,
        handleFocus, 
        handleBlur 
    } = useCustomInput(props);

    return (
        <View style={styles.customInput}>
            <TextInput
                inputMode={props.inputMode}
                placeholder={props.inputPlaceholder}
                value={props.inputValue}
    
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                secureTextEntry={props.needToSecure}
    
                onChangeText={props.inputHandler}
                onBlur={handleBlur}
                onFocus={() => handleFocus()}
    
                style={[styles.customInput, ...customStyle]}
            />
            <PseudoElement
                borderStyle={props.borderStyle}
                focusColor={props.focusColor}
                isFocus={isFocus}  
            />
        </View>
    );
};
