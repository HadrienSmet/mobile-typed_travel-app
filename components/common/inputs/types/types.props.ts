import { LineHeightsKeys } from "../../../../types";
import { 
    InputBorderColors, 
    PseudoElementStyle 
} from "../core/pseudoElement";
import {
    InputBackgroundColors,
    InputPaddingHorizontal,
    InputPaddingVertical,
} from "./types.base";

export enum InputTypesEnum {
    EMAIL,
    NUMERIC,
    PASSWORD,
    TEXT,
    TEXTAREA,
}
export enum InputModeEnum {
    TEXT = "text",
    NUMERIC = "numeric",
    EMAIL = "email",
}

type CoreInputIntrinsequeProps<T extends InputTypesEnum> = {
    readonly type: T;
    readonly inputPlaceholder: string;
    readonly inputValue: string;
    readonly inputHandler: (value: string) => void;

    readonly backgroundColor?: InputBackgroundColors;
    readonly borderStyle?: PseudoElementStyle;
    readonly focusColor?: InputBorderColors;
    readonly letterSize?: LineHeightsKeys | undefined;
    readonly paddingHorizontal?: InputPaddingHorizontal;
    readonly paddingVertical?: InputPaddingVertical; 
    readonly blurHandler?: () => void;
};

type EmailExtension = {
    readonly inputMode: InputModeEnum.EMAIL;
    readonly needToSecure: false;
    readonly multiline: false;
    readonly numberOfLines: 1;
    readonly isTextArea: false;
};
type PasswordExtension = {
    readonly inputMode: InputModeEnum.TEXT;
    readonly needToSecure: boolean;
    readonly multiline: false;
    readonly numberOfLines: 1;
    readonly isTextArea: false;
};
type NumericExtension = {
    readonly inputMode: InputModeEnum.NUMERIC;
    readonly needToSecure: false;
    readonly multiline: false;
    readonly numberOfLines: 1;
    readonly isTextArea: false;
};
type TextExtension = {
    readonly inputMode: InputModeEnum.TEXT;
    readonly needToSecure: false;
    readonly multiline: false;
    readonly numberOfLines: 1;
    readonly isTextArea: false;
};
type TextAreaExtension = {
    readonly inputMode: InputModeEnum.TEXT;
    readonly needToSecure: false;
    readonly multiline: true;
    readonly numberOfLines: number;
    readonly isTextArea: true;
};

export type EmailInputProps = CoreInputIntrinsequeProps<InputTypesEnum.EMAIL>;
export type NumericInputProps =
    CoreInputIntrinsequeProps<InputTypesEnum.NUMERIC>;
export type PasswordInputProps = CoreInputIntrinsequeProps<InputTypesEnum.PASSWORD>;
export type TextInputProps = CoreInputIntrinsequeProps<InputTypesEnum.TEXT>;
export type TextAreaProps = CoreInputIntrinsequeProps<InputTypesEnum.TEXT>;

export type PropsFromEmailInput = EmailInputProps & EmailExtension;
export type PropsFromNumericInput = NumericInputProps & NumericExtension;
export type PropsFromPasswordInput = PasswordInputProps & PasswordExtension;
export type PropsFromTextInput = TextInputProps & TextExtension;
export type PropsFromTextArea = TextAreaProps & TextAreaExtension;

export type CustomInputProps =
    | PropsFromEmailInput
    | PropsFromNumericInput
    | PropsFromPasswordInput
    | PropsFromTextInput
    | PropsFromTextArea;
