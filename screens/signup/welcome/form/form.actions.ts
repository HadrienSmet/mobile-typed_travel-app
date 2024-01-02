import { InputBlurColors } from "../../../../components";
import { PasswordConstraintsValues, SignupActionEnum, SignupReducerAction } from "./form.types";

export const getEmailColorAction = (emailColor: InputBlurColors): SignupReducerAction => ({ type: SignupActionEnum.EMAIL_COLOR, payload: emailColor });
export const getEmailMessageAction = (emailMsg: string): SignupReducerAction => ({ type: SignupActionEnum.EMAIL_MESSAGE, payload: emailMsg });
export const getIsEmailOkAction = (isEmailOk: boolean): SignupReducerAction => ({ type: SignupActionEnum.IS_EMAIL_OK, payload: isEmailOk });
export const getIsPasswordOkAction = (isPasswordOk: boolean): SignupReducerAction => ({ type: SignupActionEnum.IS_PASSWORD_OK, payload: isPasswordOk });
export const getPasswordColorAction = (passwordColor: InputBlurColors): SignupReducerAction => ({ type: SignupActionEnum.PASSWORD_COLOR, payload: passwordColor });
export const getPasswordConstraintsAction = (constraints: Array<PasswordConstraintsValues>): SignupReducerAction => ({ type: SignupActionEnum.PASSWORD_CONSTRAINTS, payload: constraints });
export const getPasswordMessageAction = (passwordMsg: string): SignupReducerAction => ({ type: SignupActionEnum.PASSWORD_MESSAGE, payload: passwordMsg });
export const getResetAction = (): SignupReducerAction => ({ type: SignupActionEnum.RESET, payload: undefined }); 
