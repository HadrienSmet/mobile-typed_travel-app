import { AuthenticationFormAction, AuthenticationFormEnum } from "./authenticationForm.types";

export const getEmailAction = (email: string): AuthenticationFormAction => ({
    type: AuthenticationFormEnum.EMAIL,
    payload: email,
});
export const getPasswordAction = (password: string): AuthenticationFormAction => ({
    type: AuthenticationFormEnum.PASSWORD,
    payload: password,
});
export const getAuthenticationResetAction = (): AuthenticationFormAction => ({
    type: AuthenticationFormEnum.RESET,
    payload: undefined,
});
