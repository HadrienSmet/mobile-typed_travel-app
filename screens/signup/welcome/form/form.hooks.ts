import { useReducer } from "react";

import { COLORS } from "../../../../constants";
import { InputBlurColors } from "../../../../components";
import { useAuthenticationForm } from "../../../../hooks";

import {
    PasswordConstraintsValues,
    SignupFormOutput, 
    SignupReducer 
} from "./form.types";
import { 
    signupReducer 
} from "./form.reducer";
import { 
    getEmailColorAction, 
    getEmailMessageAction, 
    getIsEmailOkAction, 
    getIsPasswordOkAction, 
    getPasswordColorAction, 
    getPasswordConstraintsAction, 
    getPasswordMessageAction 
} from "./form.actions";
import { 
    PASSWORD_CONSTRAINTS,
    PASSWORD_MESSAGES,
    REDUCER_DEFAULT_STATE 
} from "./form.constants";
import { useRouter } from "expo-router";

const useValidationState = () => {
    const [validationState, dispatchValidationState] = useReducer<SignupReducer>(signupReducer, REDUCER_DEFAULT_STATE);

    const _handleMailOnBlur = (isOk: boolean, message: string, color: InputBlurColors) => {
        dispatchValidationState(getIsEmailOkAction(isOk));
        dispatchValidationState(getEmailMessageAction(message));
        dispatchValidationState(getEmailColorAction(color));
    }
    const handleFineEmail = () => _handleMailOnBlur(true, "", COLORS.primary);
    const handleWrongEmail = (message: string) => _handleMailOnBlur(false, message, COLORS.warning);

    const _handlePasswordOnBlur = (isOk: boolean, message: string, color: InputBlurColors, constraints: Array<PasswordConstraintsValues>) => {
        dispatchValidationState(getIsPasswordOkAction(isOk));
        dispatchValidationState(getPasswordMessageAction(message));
        dispatchValidationState(getPasswordColorAction(color));
        dispatchValidationState(getPasswordConstraintsAction(constraints));
    }
    const handleFinePassword = () => _handlePasswordOnBlur(true, PASSWORD_MESSAGES.strongEnough, COLORS.primary, []);
    const handleGreatPassword = () => _handlePasswordOnBlur(true, PASSWORD_MESSAGES.strong, COLORS.primary, []);
    const handleWrongPassword = (constraints: Array<PasswordConstraintsValues>) => _handlePasswordOnBlur(false, PASSWORD_MESSAGES.wrong, COLORS.warning, constraints);

    return {
        validationState,
        handleFineEmail,
        handleWrongEmail,
        handleFinePassword,
        handleGreatPassword,
        handleWrongPassword
    }
}

export const useSignupForm = (): SignupFormOutput => {
    const router = useRouter();

    const {
        email,
        password,
        handleEmail,
        handlePassword,
    } = useAuthenticationForm();

    const {
        validationState,
        handleFineEmail,
        handleWrongEmail,
        handleFinePassword,
        handleGreatPassword,
        handleWrongPassword
    } = useValidationState();
    const { isEmailOk, isPasswordOk } = validationState;
    
    const handleEmailOnBlur = () => {
        if (email !== "") {
            if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) handleWrongEmail("Invalid mail adress");
            else {
                handleFineEmail();
                console.log("email", email)
                
            //     axiosCheckMail(email)
            //         .then((res) => {
            //             if (res.data === null) {
            //                 handleFineMail();
            //             } else {
            //                 handleWrongMail("Mail adress already existing");
            //             }
            //         })
            //         .catch(() => handleFineMail());
            }
        }
    };

    const handlePasswordConstraints = () => {
        const constraints = [];
        console.log("password", password);
        if (!password.match(/[A-Z]/)) constraints.push(PASSWORD_CONSTRAINTS.upperCase);
        if (!password.match(/[a-z]/)) constraints.push(PASSWORD_CONSTRAINTS.lowerCase);
        if (!password.match(/[\d]/)) constraints.push(PASSWORD_CONSTRAINTS.digits);
        if (!password.match(/[\W]/)) constraints.push(PASSWORD_CONSTRAINTS.extraAlphaNumeric);
        if (password.length < 8 || password.length > 30) constraints.push(PASSWORD_CONSTRAINTS.length);

        return constraints;
    }

    const handlePasswordOnBlur = () => {
        if (password !== "") {
            const constraints = handlePasswordConstraints();
    
            if (constraints.length > 0) handleWrongPassword(constraints);
            else if (password.length < 12) handleFinePassword();
            else handleGreatPassword();
            console.log("password", password)
        }
    }

    const handlePress = () => {
        const data = {
            email: email.toLocaleLowerCase(),
            password,
        };
        // if (!isEmailOk || !isPasswordOk) alert("Those fields are required and have constraints")

        // else {
            console.log("data", data)
            router.push("/personals")
        // };
    }

    return {
        email,
        password,
        validationState,
        handleEmail,
        handleEmailOnBlur,
        handlePassword,
        handlePasswordOnBlur,
        handlePress
    }
};
