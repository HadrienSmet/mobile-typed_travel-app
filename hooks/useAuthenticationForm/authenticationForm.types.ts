import { Reducer } from "react";

export enum AuthenticationFormEnum {
    EMAIL,
    PASSWORD,
    RESET,
}

export type AuthenticationFormState = {
    email: string;
    password: string;
};

type _AuthenticationFormAction<T extends AuthenticationFormEnum, P> = {
    readonly type: T;
    readonly payload: P;
};
type EmailAction = _AuthenticationFormAction<AuthenticationFormEnum.EMAIL, string>;
type PasswordAction = _AuthenticationFormAction<AuthenticationFormEnum.PASSWORD, string>;
type ResetAction = _AuthenticationFormAction<AuthenticationFormEnum.RESET, undefined>;

export type AuthenticationFormAction = EmailAction | PasswordAction | ResetAction;
export type AuthenticationReducerType = Reducer<AuthenticationFormState, AuthenticationFormAction>;

export type AuthenticationHookOutput = {
    readonly email: string;
    readonly password: string;
    readonly handleEmail: (value: string) => void;
    readonly handlePassword: (value: string) => void;
}
export type AuthenticationHookFullOutput = AuthenticationHookOutput & { readonly resetAuthentication: () => void; }
