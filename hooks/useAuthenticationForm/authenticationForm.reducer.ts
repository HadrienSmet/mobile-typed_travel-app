import { AuthenticationFormAction, AuthenticationFormEnum, AuthenticationFormState } from "./authenticationForm.types";
import { AUTHETICATION_FORM_INITIAL_STATE } from "./authenticationForm.constants";

export const authenticationFormReducer = (
    state: AuthenticationFormState,
    action: AuthenticationFormAction
): AuthenticationFormState => {
    switch (action.type) {
        case AuthenticationFormEnum.EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case AuthenticationFormEnum.PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case AuthenticationFormEnum.RESET:
            return AUTHETICATION_FORM_INITIAL_STATE;
    }
};
