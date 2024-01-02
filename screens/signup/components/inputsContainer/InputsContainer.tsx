import { ReactNode } from "react"
import { View } from "react-native";
import styles from "./inputsContainer.styles";

type InputsContainerProps = { readonly children: ReactNode };

export const SignupInputsContainer = ({ children }: InputsContainerProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}