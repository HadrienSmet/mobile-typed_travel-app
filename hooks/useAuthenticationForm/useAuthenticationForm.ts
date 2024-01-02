import { useReducer } from "react";

import {
    AuthenticationHookFullOutput,
    AuthenticationReducerType 
} from "./authenticationForm.types";
import { 
    AUTHETICATION_FORM_INITIAL_STATE 
} from "./authenticationForm.constants";
import { 
    authenticationFormReducer
} from "./authenticationForm.reducer";
import { 
    getAuthenticationResetAction, 
    getEmailAction, 
    getPasswordAction 
} from "./authenticationForm.actions";

export const useAuthenticationForm = (): AuthenticationHookFullOutput => {
    const [authenticationState, dispatchAuthentication] = useReducer<AuthenticationReducerType>(
        authenticationFormReducer, 
        AUTHETICATION_FORM_INITIAL_STATE
    );
    const { email, password } = authenticationState;

    const handleEmail = (email: string) => dispatchAuthentication(getEmailAction(email));
    const handlePassword = (password: string) => dispatchAuthentication(getPasswordAction(password));
    const resetAuthentication = () => dispatchAuthentication(getAuthenticationResetAction());

    return {
        email,
        password,
        handleEmail,
        handlePassword,
        resetAuthentication,
    }
};
