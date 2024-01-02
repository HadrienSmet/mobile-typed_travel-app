import { REDUCER_DEFAULT_STATE } from "./form.constants";
import { SignupActionEnum, SignupReducerAction, SignupReducerState } from "./form.types";

export const signupReducer = (
    state: SignupReducerState,
    action: SignupReducerAction
): SignupReducerState => {
    switch (action.type) {
        case SignupActionEnum.EMAIL_COLOR:
            return {
                ...state,
                emailCustomColor: action.payload
            }
        case SignupActionEnum.EMAIL_MESSAGE:
            return {
                ...state,
                emailMessage: action.payload
            }
        case SignupActionEnum.IS_EMAIL_OK:
            return {
                ...state,
                isEmailOk: action.payload
            }
        case SignupActionEnum.IS_PASSWORD_OK:
            return {
                ...state,
                isPasswordOk: action.payload
            }
        case SignupActionEnum.PASSWORD_COLOR:
            return {
                ...state,
                passwordCustomColor: action.payload
            }
        case SignupActionEnum.PASSWORD_CONSTRAINTS:
            return {
                ...state,
                passwordConstraints: action.payload
            }
        case SignupActionEnum.PASSWORD_MESSAGE:
            return {
                ...state,
                passwordMessage: action.payload
            }
        case SignupActionEnum.RESET:
            return REDUCER_DEFAULT_STATE;
    }
};
