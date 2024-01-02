import { GetCustomStyleOutput } from "./types.functions";

export type CoreInputHookOutput = {
    readonly isFocus: boolean;
    readonly customStyle: GetCustomStyleOutput;
    readonly handleFocus: () => void;
    readonly handleBlur: () => void;
};
