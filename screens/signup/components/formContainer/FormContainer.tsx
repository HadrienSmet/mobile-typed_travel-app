import { View } from "react-native";
import styles from "./formContainer.styles";
import { ReactNode } from "react";

type FormContainerProps = { readonly children: JSX.Element | ReactNode };

export const SignupFormContainer = ({ children }: FormContainerProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};
