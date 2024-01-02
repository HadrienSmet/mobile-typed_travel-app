import { COLORS } from "../../../../../constants";
import { FontSizesValues } from "../../../../../types";

export type NeedToSecureButtonProps = {
    readonly needToSecure: boolean;
    readonly size: FontSizesValues;

    readonly iconColor?: typeof COLORS.white | undefined
};
