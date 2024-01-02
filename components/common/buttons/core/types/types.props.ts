import { ReactNode } from "react";
import { 
    ButtonBackgroundColors, 
    ButtonColors, 
    ButtonFontSizes, 
    ButtonFontWeights, 
    ButtonLetterSpacing, 
    ButtonPaddingVertical 
} from "./types.base";
import { ButtonBorderRadiusExtension } from "./types.style";

export enum CoreButtonEnum {
    TEXT,
    NODE,
}
export type ComponentChild = ReactNode | JSX.Element;
export type ButtonStyleExtension = {
    backgroundColor?: ButtonBackgroundColors;
    color: ButtonColors;
    paddingVertical?: ButtonPaddingVertical;
};
type _CoreButtonBase<T extends CoreButtonEnum> = {
    readonly type: T;
    readonly handlePress: () => void;

    backgroundColor?: ButtonBackgroundColors;
    color?: ButtonColors;
    fontSize?: ButtonFontSizes;
    fontWeight?: ButtonFontWeights;
    letterSpacing?: ButtonLetterSpacing;
    paddingVertical?: ButtonPaddingVertical;
};

type TextButtonExtension = { readonly value: string; };
type TextButtonBase = _CoreButtonBase<CoreButtonEnum.TEXT>;
type TextButtonProps = TextButtonBase & TextButtonExtension;

type NodeButtonExtension = { readonly children: ComponentChild };
type NodeButtonBase = _CoreButtonBase<CoreButtonEnum.NODE>;
type NodeButtonProps = NodeButtonBase & NodeButtonExtension;

export type IntrinsequeCoreButtonProps = TextButtonProps | NodeButtonProps;
export type CoreButtonProps = IntrinsequeCoreButtonProps & ButtonBorderRadiusExtension;
