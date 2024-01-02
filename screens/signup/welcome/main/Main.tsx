import { Text, View } from "react-native";
import styles from "./main.styles";
import { SignupForm } from "../form";

export const SignupMain = () => {
    
    return (
        <>
            <View>
                <Text style={styles.mainTitle}>Welcome fellow traveler!</Text>
                <Text style={styles.secondaryTitle}>Define your email and password</Text>
            </View>
            <SignupForm />
        </>
    );
};
