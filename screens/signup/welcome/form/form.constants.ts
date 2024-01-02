import { SignupReducerState } from "./form.types";

export const PASSWORD_CONSTRAINTS = {
    length: "Length of password need to be included within 8 - 30 characters.",
    lowerCase: "Requires at least one lowercase.",
    upperCase: "Requires at least one uppercase.",
    digits: "Requires at least one digits.",
    extraAlphaNumeric: "Requires at least one character non-alphanumerical.",
} as const;

export const PASSWORD_MESSAGES = {
    strongEnough: "Password strong. Add more characters for more safety.",
    strong: "Strong Password.",
    wrong: "Your password does not fit our constraints:"
} as const;

export const REDUCER_DEFAULT_STATE: SignupReducerState = {
    emailCustomColor: undefined,
    emailMessage: "",
    isEmailOk: false,

    isPasswordOk: false,
    passwordConstraints: [],
    passwordCustomColor: undefined,
    passwordMessage: "",
};
