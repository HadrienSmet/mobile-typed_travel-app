import { FlatList, View } from "react-native";

import { 
    CORE_INPUT_DEFAULT_BORDER_WIDTH,
    CoreButtonEnum,
    DefaultButton,
    EmailInput, 
    InputBlurColors, 
    InputTypesEnum, 
    PasswordInput,
    PseudoElementStyle,
} from "../../../../components";
import {  COLORS } from "../../../../constants";

import { 
    SignupFormContainer, 
    SignupInputsContainer 
} from "../../components";

import { Message } from "./message";
import { Constraint } from "./constraint";

import { useSignupForm } from "./form.hooks";

const MAIN_COLOR = COLORS.secondary

export const SignupForm = () => {
    const {
        email,
        password,
        validationState,
        handleEmail,
        handleEmailOnBlur,
        handlePassword,
        handlePasswordOnBlur,
        handlePress
    } = useSignupForm();

    const { 
        emailCustomColor,
        emailMessage,
        isPasswordOk,
        passwordCustomColor,
        passwordMessage,
        passwordConstraints,
    } = validationState;

    const getCustomBorderStyle = (color: InputBlurColors): PseudoElementStyle => ({
        height: CORE_INPUT_DEFAULT_BORDER_WIDTH,
        backgroundColor: color
    })

    return (
        <SignupFormContainer>
            <SignupInputsContainer>
                <View>
                    <EmailInput
                        type={InputTypesEnum.EMAIL}
                        inputValue={email}
                        inputHandler={handleEmail}
                        inputPlaceholder="mikehorn@gmail.com"
                        focusColor={MAIN_COLOR}
                        blurHandler={handleEmailOnBlur}
                        borderStyle={emailCustomColor && getCustomBorderStyle(emailCustomColor)}
                    />
                    {emailMessage && (
                        <Message 
                            message={emailMessage} 
                            isValid={false} 
                        />
                    )}
                </View>
                <View>
                    <PasswordInput
                        inputValue={password}
                        type={InputTypesEnum.PASSWORD}
                        inputHandler={handlePassword}
                        inputPlaceholder="********"
                        focusColor={MAIN_COLOR}
                        blurHandler={handlePasswordOnBlur}
                        borderStyle={passwordCustomColor && getCustomBorderStyle(passwordCustomColor)}
                    />
                    {passwordMessage && (
                        <Message 
                            message={passwordMessage}
                            isValid={isPasswordOk}
                        />
                    )}
                    {passwordConstraints && (
                        <FlatList 
                            data={passwordConstraints} 
                            renderItem={({ item }) => <Constraint constraint={item} />}
                        />
                    )}
                </View>
            </SignupInputsContainer>
            <DefaultButton
                type={CoreButtonEnum.TEXT}
                handlePress={handlePress}
                value="Confirm"
                backgroundColor={MAIN_COLOR}
            />
        </SignupFormContainer>
    );
};
