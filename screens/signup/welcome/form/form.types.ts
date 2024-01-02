import { Reducer } from "react";

import { AuthenticationHookOutput } from "../../../../hooks";
import { InputBlurColors } from "../../../../components";
import { PASSWORD_CONSTRAINTS } from "./form.constants";

type PasswordConstraintsKeys = keyof typeof PASSWORD_CONSTRAINTS;
export type PasswordConstraintsValues = typeof PASSWORD_CONSTRAINTS[PasswordConstraintsKeys]

export enum SignupActionEnum {
    EMAIL_COLOR,
    EMAIL_MESSAGE,
    IS_EMAIL_OK,
    IS_PASSWORD_OK,
    PASSWORD_COLOR,
    PASSWORD_CONSTRAINTS,
    PASSWORD_MESSAGE,
    RESET,
}

export type SignupReducerState = {
    readonly emailCustomColor: InputBlurColors;
    readonly emailMessage: string;
    readonly isEmailOk: boolean;

    readonly isPasswordOk: boolean;
    readonly passwordConstraints: Array<PasswordConstraintsValues>;
    readonly passwordCustomColor: InputBlurColors;
    readonly passwordMessage: string;
};

type _SignupReducerAction<T extends SignupActionEnum, P> = {
    readonly type: T;
    readonly payload: P;
};
type EmailColorAction = _SignupReducerAction<SignupActionEnum.EMAIL_COLOR, InputBlurColors>;
type EmailMessageAction = _SignupReducerAction<SignupActionEnum.EMAIL_MESSAGE, string>;
type IsEmailOkAction = _SignupReducerAction<SignupActionEnum.IS_EMAIL_OK, boolean>;
type IsPasswordOkAction = _SignupReducerAction<SignupActionEnum.IS_PASSWORD_OK, boolean>;
type PasswordColorAction = _SignupReducerAction<SignupActionEnum.PASSWORD_COLOR, InputBlurColors>;
type PasswordConstraintsAction = _SignupReducerAction<SignupActionEnum.PASSWORD_CONSTRAINTS, Array<PasswordConstraintsValues>>
type PasswordMessageAction = _SignupReducerAction<SignupActionEnum.PASSWORD_MESSAGE, string>;
type ResetAction = _SignupReducerAction<SignupActionEnum.RESET, undefined>;
export type SignupReducerAction = 
    | EmailColorAction
    | EmailMessageAction
    | IsEmailOkAction
    | IsPasswordOkAction
    | PasswordColorAction
    | PasswordConstraintsAction
    | PasswordMessageAction
    | ResetAction;

export type SignupReducer = Reducer<SignupReducerState, SignupReducerAction>

type SignupFormOutputExtension  = {
    readonly validationState: SignupReducerState;
    readonly handleEmailOnBlur: () => void;
    readonly handlePasswordOnBlur: () => void;
    readonly handlePress: () => void;
};
export type SignupFormOutput = AuthenticationHookOutput & SignupFormOutputExtension;
