import { Image, KeyboardAvoidingView, View } from "react-native";

import { Triangle } from "./triangle";

import { useConnexionLayout } from "./layout.hooks";
import { LoginLayoutProps } from "./layout.types";
import styles from "./layout.style";
import { KEYBOARD_BEHAVIOR } from "../../../constants";

export const ConnexionLayout = ({ children }: LoginLayoutProps): JSX.Element => {
    const customHeight = useConnexionLayout();

    return (
        <View style={[customHeight]}>
            <Triangle />
            <Image
                blurRadius={3}
                style={styles.backgroundImage}
                source={require("../../../assets/images/connexion_bg.jpg")}
            />
            <KeyboardAvoidingView 
                behavior={KEYBOARD_BEHAVIOR} 
                style={{ 
                    flex: 1, 
                    justifyContent: "center"
                }}
            >
                {children}
            </KeyboardAvoidingView>
        </View>
    );
};
