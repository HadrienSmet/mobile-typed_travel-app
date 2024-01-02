import {
    Text, 
    View,
} from "react-native";

import { 
    CoreButtonEnum,
    InputTypesEnum, 
    EmailInput, 
    PasswordInput, 
    DefaultButton
} from "../../../components";

import { useForm } from "./form.hooks";
import styles from "./form.styles";

export const LoginForm = () => {
    const {
        email,
        password,
        handleEmail,
        handlePassword,
        handlePress
    } = useForm();

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <EmailInput
                    type={InputTypesEnum.EMAIL}
                    inputHandler={handleEmail}
                    inputPlaceholder="mikehorn@email.com"
                    inputValue={email}
                />
                <View style={styles.passwordDivision}>
                    <PasswordInput
                        type={InputTypesEnum.PASSWORD}
                        inputHandler={handlePassword}
                        inputPlaceholder="********"
                        inputValue={password}
                    />
                    <Text style={styles.forgetPasswordText}>
                        Forgot password?
                    </Text>
                </View>
            </View>
            <DefaultButton
                type={CoreButtonEnum.TEXT}
                handlePress={handlePress}
                value="Log In"
            />
        </View>
    );
};
